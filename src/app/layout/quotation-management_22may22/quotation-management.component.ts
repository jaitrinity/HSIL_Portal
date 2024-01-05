import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuotationManagementService } from './service/quo-mgt.service';
import { ToastrService } from 'toastr-ng2';
import { Title } from '@angular/platform-browser';
declare var $;

@Component({
  selector: 'app-quotation-management',
  templateUrl: './quotation-management.component.html',
  styleUrls: ['./quotation-management.component.scss'],
  animations: [routerTransition()],
  providers: [QuotationManagementService]
})
export class QuotationManagementComponent implements OnInit {

  private project_id : string = "";
  private project_type : string = "";
  private projectName : string = "";
  private loggedInEmployeeId : string;
  private loggedInUserRole : string;
  public quotationTypeList : Array<string>;
  public currentQuotationType : string; 
  public snapshotLoading = false;
  public projectList : Array<any>;
  public searchItemList : Array<any>;
  public customerName : string = "";
  public mobileNo : string = "";
  public emailId : string = "";
  public address : string = "";
  public state : string = "";
  public city : string = "";
  public pincode : string = "";
  public type : string = "";
  public firmName : string = "";
  public remark : string = "";
  public noOfBath : number = 0;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private _quotationManagementService: QuotationManagementService,
    private toastr: ToastrService, private titleService : Title) { 
    // this.quotationTypeList = ["Budgetory","Quote to Customer","View Quotation","Draft"];
    this.quotationTypeList = ["Budgetory","Quote to Customer","View Quotation"];
    this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
    this.loggedInUserRole = sessionStorage.getItem("UserRole");
  }

  ngOnInit() {
    this.route.queryParams.forEach(( params: Params ) => {
      // this.getMonthsList();
      this.currentQuotationType = params['type'];
      window.scrollTo( 0, 0 );      
      this.getProjectReportSnapshot();  
      this.getQuotationDiscountMatrix();
      //if(this.currentQuotationType == 'Quote to Customer'){
        this.getAllTermAndCondtion();
      //}
      if(this.currentQuotationType == 'View Quotation'){
        this.getQuotationByEmpId();
      }
      this.titleService.setTitle("Quotation Management:"+ this.currentQuotationType); 
    });
  }

  changeCurrentType(item : string) : void {        
    this.router.navigateByUrl('/quotation-management?type='+item);
    // if(item === "Enquiry"){
        // this.ishotWarmCode = false;
    // }
    // else{
        // this.ishotWarmCode = true;
    // }
  }

  termAndCondtionList = [];
  getAllTermAndCondtion(){
    let jsonData = {};

    this._quotationManagementService.getDataByAnyPostRequest('getAllTermsAndConditions',jsonData).subscribe(( result: any ) => {
                
      this.snapshotLoading = false;
      if ( !result ) {
          this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
      } else if ( result.Error ) {
          this.toastr.error(result.ErrorMessage);
      } else {  
        this.termAndCondtionList = result.wrappedList[0];
      }
    });
  }

  is_action_required_on_quotation : boolean = false;
  quatationList = [];
  tempQuatationList = [];
  projectNameList = [];
  getQuotationByEmpId(){
    let jsonData = {
      empId : this.loggedInEmployeeId 
    };

    this._quotationManagementService.getDataByAnyPostRequest('getQuotationByEmpId',jsonData).subscribe(( result: any ) => {
                
      if ( !result ) {
          this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
      } else if ( result.Error ) {
          this.toastr.error(result.ErrorMessage);
      } else {  
        this.quatationList = result.wrappedList;
        if(this.quatationList.length != 0){
          this.tempQuatationList = result.wrappedList;

          // let tempProjectNameList = [];
          // for(let i=0;i<this.quatationList.length;i++){
          //   let projectName = this.quatationList[i].project_name;
          //   let index = tempProjectNameList.indexOf(projectName);
          //   if(index < 0){
          //     tempProjectNameList.push(projectName);
          //   }
          // }
          // this.projectNameList = tempProjectNameList;
          this.projectNameList = this.quatationList.map(key => key.project_name);
          this.projectNameList = this.removeDuplicateFromArray(this.projectNameList);

          for(let i=0;i<this.quatationList.length;i++){
            let quotObj = this.quatationList[i];
            // if(quotObj.isdiscount == 1) this.is_action_required_on_quotation = true;
            if(quotObj.isdiscount == 1 && 
              (
                quotObj.quotationStatus == "QUO_01" || quotObj.quotationStatus == "QUO_03" ||
                quotObj.quotationStatus == "QUO_06" || quotObj.quotationStatus == "QUO_09"
              )){
                this.is_action_required_on_quotation = true;
            }
          }
        }
        
        this.snapshotLoading = false;
      }
    });
  }

  removeDuplicateFromArray(data){
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  quotationDiscountMatrix = [];
  getQuotationDiscountMatrix(){
    let jsonData = {};
    this._quotationManagementService.getDataByAnyPostRequest('getQuotationDiscountMatrix',jsonData).subscribe(( result: any ) => {
                
      this.snapshotLoading = false;
      if ( !result ) {
          this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
      } else if ( result.Error ) {
          this.toastr.error(result.ErrorMessage);
      } else {  
        this.quotationDiscountMatrix = result.wrappedList;
      }
    });
  }

  for_TM : boolean = false;
  for_Commercial : boolean = false;
  getProjectReportSnapshot() : void{
    this.projectList = [];
    this.snapshotLoading = true;
    this._quotationManagementService.getProjectReportDetails(this.currentQuotationType).subscribe(( result: any ) => {
      if ( !result ) {
          this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
      } else if ( result.Error ) {
          this.toastr.error(result.ErrorMessage);
      } else {  
        let wrappedList = result.wrappedList[0];
        if(this.currentQuotationType == "Budgetory"){
          let tempProjectList = [];
          for(let i=0;i<wrappedList.length;i++){
            let wrappedObj = wrappedList[i];
            let projectStage = wrappedObj.project_stage;
            let projectQuotationStatus = wrappedObj.project_quotation_status;
            // if(!(projectStage == 'Lost' || projectStage == 'Conversion')){
            if(projectStage == 'Enquiry' || projectStage == 'Pipeline'){
            // if(!(projectStage == 'Lost')){
              tempProjectList.push(wrappedObj);
              if(!this.for_TM && 
                (
                  projectQuotationStatus == "QUO_02" || projectQuotationStatus == "QUO_05" || 
                  projectQuotationStatus == "QUO_08" || projectQuotationStatus == "QUO_11" || 
                  projectQuotationStatus == "QUO_04" || projectQuotationStatus == "QUO_07" || 
                  projectQuotationStatus == "QUO_10" || projectQuotationStatus == "QUO_13" || 
                  projectQuotationStatus == "QUO_16"
                )
                ){
                this.for_TM = true;
              }
              if(!this.for_Commercial && (wrappedObj.project_po_id != null)){
                this.for_Commercial = true;
              }
            }
            
          }
          this.projectList = tempProjectList;
        }
        else if(this.currentQuotationType == "Quote to Customer"){
          let tempProjectList = [];
          for(let i=0;i<wrappedList.length;i++){
            let wrappedObj = wrappedList[i];
            let projectStage = wrappedObj.project_stage;
            let projectQuotationStatus = wrappedObj.project_quotation_status;
            if(projectStage == 'Pipeline' || projectStage == 'Conversion'){
              tempProjectList.push(wrappedList[i]);
              if(!this.for_TM && 
                (
                  projectQuotationStatus == "QUO_02" || projectQuotationStatus == "QUO_05" || 
                  projectQuotationStatus == "QUO_08" || projectQuotationStatus == "QUO_11" || 
                  projectQuotationStatus == "QUO_04" || projectQuotationStatus == "QUO_07" || 
                  projectQuotationStatus == "QUO_10" || projectQuotationStatus == "QUO_13" || 
                  projectQuotationStatus == "QUO_16"
                )
                ){
                this.for_TM = true;
              }
              if(!this.for_Commercial && (wrappedObj.project_po_id != null)){
                this.for_Commercial = true;
              }
            }
          }
          this.projectList = tempProjectList;
        }  
        this.snapshotLoading = false;        
      }
    });
  }

  addProduct(data : any){
    // alert(data.projectName)
    this.projectName = data.projectName;
    this.firmName = data.builder_firm_name;
    this.state = data.state;
    this.city = data.city;
    this.noOfBath = data.total_bath;
    this.getCustomerList();
    // let itemObj = data.definedCaptionsResponse.find(item => item.key === 'SITE_NAME');
    for(let i=0;i<data.definedCaptionsResponse.length;i++){
      let key = data.definedCaptionsResponse[i].key;
      let value = data.definedCaptionsResponse[i].value;
      // if(key == "SITE_NAME") this.customerName = value;
      if(key == "SITE_CONTACT_NO") this.mobileNo = value;
      if(key == "SITE_ADDRESS") this.address = value;
    }

    this.makeAllAsDefault();

    this.project_id = data.project_id;
    this.project_type = data.project_type;
    $("#exampleModal").modal({
      backdrop : 'static',
      keyboard : false
    });
  }

  customerList = [];
  getCustomerList(){
    let jsonData = {
      state : this.state,
    }
    this._quotationManagementService.getAllListBySelectType(jsonData,"customer")
    .subscribe(
      (result)=>{
        this.customerList = result.customerList;
      },
      (error)=>{

      }
    )
  }

  makeAllAsDefault(){
    $(".customerDetailsContent, .addedItemContent").hide();
    $(".itemContent").show();
    $("#item-search-txt").val("");
    $("#total_mrp,#total_quantity").val("");
    this.searchItemList = [];
    this.addedItemList = [];
    this.totalConfirmPrice = 0;
    this.totalConfirmTax = 0;
    this.totalConfirmGrossPrice = 0;
    this.totalConfirmQuantity = 0;
    this.addedItemInfo = [];
    $("#custmerNameInput").val("");
    $("#mobileNoInput").val("");
    $("#emailIdInput").val("");
    $("#addressInput").val("");
    $("#stateInput").val("");
    $("#cityInput").val("");
    $("#pincodeInput").val("");
    $("#typeInput").val("");
    $("#firmNameInput").val("");
    $("#SW_PASTInput").val("");
    $("#FAUCETS_PASTInput").val("");
    $("#PAST_SalesInput").val("");
    $("#Ref_ZQTInput").val("");
    $("#TODInput").val("");
    $("#Liability_FAUCETSInput").val("");
    $("#PAY_TERMS_FAUCETSInput").val("");
    $("#FREIGHT_GIVEN_BYInput").val("");
    $("#FREIGHT_FAUCETSInput").val("");
    $("#DISPATCH_FROMInput").val("");
    $("#ORCInput").val("");
    $("#remarkInput").val("");
  }

  searchItem(event){
    // console.log(event.target.value)
    this.searchItemList = [];
    let searchValue = event.target.value;
    if(searchValue.length >= 3){
      this.snapshotLoading = true;
      let jsonData = {
        project_id : this.project_id,
        searchkey : searchValue
      }
      this._quotationManagementService.getDataByAnyPostRequest('getAllSKUOnTheBasisOfProject',jsonData).subscribe(( result: any ) => {
        // console.log(JSON.stringify(result));
        this.snapshotLoading = false;
        if ( !result ) {
            this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
        } else if ( result.Error ) {
            this.toastr.error(result.ErrorMessage);
        } else {  
          this.searchItemList = result.wrappedList[0];
        }
      });

    }
  }
  addedItemObjList = [];
  addedItemList = [];
  addAndRemoveItem(action,item_code){
    // alert(action+" "+id)
    let textObj = $("#item_"+item_code);
    let textValue = parseInt(textObj.val());
    if(action == "add"){
      textValue = textValue+1;
      textObj.val(textValue)
    }
    else if(action == "remove" && textValue > 0){
      textValue = textValue-1;
      textObj.val(textValue)
    }
    let totalAddItemCount = 0;
    let total_mrp = 0;
    $(".addItemCount").each(function(){
      totalAddItemCount += parseInt($(this).val());

      let itemCount = parseInt($(this).val());
      if(itemCount != 0){
        let itemMrp = parseFloat($(this).attr("mrp"))
        total_mrp += itemCount*itemMrp;
      }
    })
    $("#total_quantity").val(totalAddItemCount);
    $("#total_mrp").val(total_mrp);

    let index = this.addedItemList.indexOf(item_code);
    if(textValue !=0){
      if(index < 0){
        this.addedItemList.push(item_code);
      }
    }
    else{
      this.addedItemList.splice(index, 1);
    }
    for(let i=0;i<this.addedItemList.length;i++){
      let itemObj = this.searchItemList.find(item => item.item_code === this.addedItemList[i]);
      if(itemObj != undefined){
        let itemQuantity = parseInt($("#item_"+this.addedItemList[i]).val());
        let totalPrice = itemObj.mrp * itemQuantity;
        itemObj.quantity = itemQuantity;
        itemObj.totalPrice = totalPrice;
        this.addedItemObjList.push(itemObj);
      }
    }
  }

  totalConfirmPrice = 0;
  totalConfirmGrossPrice = 0;
  totalConfirmQuantity = 0;
  addedItemInfo = [];
  confirmToAddItem(){
    if(this.addedItemList.length == 0){
      this.toastr.warning("Pleas add atleast one item.");
      return ;
    }
    this.totalConfirmTax = 0;
    let tempAddedItem = [];
    let tempConfirmPrice = 0;
    let tempConfirmQuantity = 0;
    for(let i=0;i<this.addedItemList.length;i++){
      let itemObj = this.addedItemObjList.find(item => item.item_code === this.addedItemList[i]);
      // let itemQuantity = parseInt($("#item_"+this.addedItemList[i]).val());
      // let totalPrice = itemObj.mrp * itemQuantity;
      let itemQuantity = itemObj.quantity;
      let totalPrice = itemObj.totalPrice;
      let newJson = {
        item_code : itemObj.item_code,
        cat_code : itemObj.cat_code,
        item_desc : itemObj.item_desc,
        category : itemObj.category,
        color : itemObj.color,
        image : itemObj.image,
        lineDiagram : itemObj.lineDiagram,
        mrp : itemObj.mrp,
        gst : itemObj.gst,
        quantity : itemQuantity,
        totalPrice : totalPrice
      }
      tempAddedItem.push(newJson);

      tempConfirmPrice += totalPrice;
      tempConfirmQuantity += itemQuantity;
    }
    this.addedItemInfo = tempAddedItem;
    this.totalConfirmPrice = tempConfirmPrice;
    this.totalConfirmGrossPrice = tempConfirmPrice;
    this.totalConfirmQuantity = tempConfirmQuantity;
    

    $(".itemContent").hide();
    $(".addedItemContent").show();
  }

  backToAddItem(showClass, hideClass){
    $("."+hideClass).hide();
    $("."+showClass).show();
  }

  totalConfirmTax = 0;
  excIncGst(totalPrice, gst, item_code){
    let isCheck = $("#gst_"+item_code).prop("checked");
    if(isCheck){
      let taxPrice = totalPrice * gst/100;
      $("#tax_price_"+item_code).val(taxPrice);
      $("#gst_value_"+item_code).val(gst);
    }
    else{
      $("#tax_price_"+item_code).val(0);
      $("#gst_value_"+item_code).val(0);
    }

    this.grossTaxAndPrice();

  }

  grossTaxAndPrice(){
    let tempTotalPrice = 0;
    $(".total_price").each(function(){
      let tp = parseFloat($(this).val());
      tempTotalPrice += tp;
    });

    let tempTotalTaxPrice = 0
    $(".tax_price").each(function(){
      let tp = parseFloat($(this).val());
      tempTotalTaxPrice += tp;
    });
    this.totalConfirmTax = tempTotalTaxPrice;


    this.totalConfirmGrossPrice = tempTotalPrice + tempTotalTaxPrice;
  }

  emailValidator(email : string) : any{
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){		
        return false;
    }
    return true;
  }

  validateCustomerDetails() : any{
    if(this.customerName == ''){
      $("#custmerNameInput").focus();
      this.toastr.warning("Please enter value of customer name");
      return false;
    }
    else if(this.mobileNo == ''){
      $("#mobileNoInput").focus();
      this.toastr.warning("Please enter value of mobile no");
      return false;
    }
    else if(this.emailId == ''){
      $("#emailIdInput").focus();
      this.toastr.warning("Please enter value of email id","Alert",{timeOut : 2000});
      return false;
    }
    else if(!this.emailValidator(this.emailId)){
      $("#emailIdInput").focus();
      this.toastr.warning("Please enter valid email id","Alert",{timeOut : 2000});
      return false;
    }
    else if(this.address == ''){
      $("#addressInput").focus();
      this.toastr.warning("Please enter value of address");
      return false;
    }
    else if(this.state == ''){
      $("#stateInput").focus();
      this.toastr.warning("Please enter value of state");
      return false;
    }
    else if(this.city == ''){
      $("#cityInput").focus();
      this.toastr.warning("Please enter value of city");
      return false;
    }
    else if(this.pincode == ''){
      $("#pincodeInput").focus();
      this.toastr.warning("Please enter value of pincode");
      return false;
    }
    else if(this.type == ''){
      $("#typeInput").focus();
      this.toastr.warning("Please enter value of type");
      return false;
    }
    else if(this.firmName == ''){
      $("#firmNameInput").focus();
      this.toastr.warning("Please enter value of Firm Name");
      return false;
    }
    return true;
  }

  validateDataForDiscountedQuotation() : any{
    if(this.SW_PAST == ''){
      $("#SW_PASTInput").focus();
      this.toastr.warning("please enter value of `SW (Past Sales History in Lacs)` ");
      return false;
    }
    else if(this.FAUCETS_PAST == ''){
      $("#FAUCETS_PASTInput").focus();
      this.toastr.warning("please enter value of `Faucets (Past Sales History in Lacs)` ");
      return false;
    }
    else if(this.PAST_Sales == ''){
      $("#PAST_SalesInput").focus();
      this.toastr.warning("please enter value of `Past Sales History in Lacs` ");
      return false;
    }
    else if(this.Ref_ZQT == ''){
      $("#Ref_ZQTInput").focus();
      this.toastr.warning("please enter value of `Ref ZQT Number` ");
      return false;
    }
    else if(this.TOD == ''){
      $("#TODInput").focus();
      this.toastr.warning("please enter value of `TOD on Project Sales (%)` ");
      return false;
    }
    else if(this.Liability_FAUCETS == ''){
      $("#Liability_FAUCETSInput").focus();
      this.toastr.warning("please enter value of `Extra liability Faucets (%)` ");
      return false;
    }
    else if(this.PAY_TERMS_FAUCETS == ''){
      $("#PAY_TERMS_FAUCETSInput").focus();
      this.toastr.warning("please select value of `Payment Terms for faucets` ");
      return false;
    }
    else if(this.FREIGHT_GIVEN_BY == ''){
      $("#FREIGHT_GIVEN_BYInput").focus();
      this.toastr.warning("please select value of `Freight given by` ");
      return false;
    }
    else if(this.FREIGHT_FAUCETS == ''){
      $("#FREIGHT_FAUCETSInput").focus();
      this.toastr.warning("please enter value of `Freight for Faucets` ");
      return false;
    }
    else if(this.DISPATCH_FROM == ''){
      $("#DISPATCH_FROMInput").focus();
      this.toastr.warning("please select value of `Material dispatch from` ");
      return false;
    }
    else if(this.ORC == ''){
      $("#ORCInput").focus();
      this.toastr.warning("please enter value of `ORC` ");
      return false;
    }
    return true;
  }

  itemList = [];
  submitCheckout(){
    let tempItemList = [];
    for(let i=0;i<this.addedItemList.length;i++){
      let itemObj = this.addedItemObjList.find(item => item.item_code === this.addedItemList[i]);
      // let itemQuantity = parseInt($("#item_"+this.addedItemList[i]).val());
      let itemQuantity = itemObj.quantity;
      let itemGst = $("#gst_value_"+this.addedItemList[i]).val();
      let itemDiscount = $("#discount_value_"+this.addedItemList[i]).val();
      // let totalPrice = itemObj.mrp * itemQuantity;
      let totalPrice = itemObj.totalPrice;
      let saveSkuJson = {
        cat_code : itemObj.cat_code,
        discount : itemDiscount,
        gst : itemGst,
        item_code : itemObj.item_code,
        mrp : itemObj.mrp,
        dealerExfactory : itemObj.dealerExfactory,
        distributorExfactory : itemObj.distributorExfactory,
        costPrice : itemObj.costPrice,
        division : itemObj.division,
        materialType : itemObj.materialType,
        net_price : totalPrice,
        quantity : itemQuantity
      }
      tempItemList.push(saveSkuJson);
    }
    this.itemList = tempItemList;
    $(".addedItemContent").hide();
    $(".customerDetailsContent").show();
  }

  SW_PAST : string = "";
  FAUCETS_PAST : string = "";
  PAST_Sales : string = "";
  Ref_ZQT : string = "";
  TOD : string = "";
  Liability_FAUCETS : string = "";
  PAY_TERMS_FAUCETS : string = "";
  FREIGHT_GIVEN_BY : string = "";
  FREIGHT_FAUCETS : string = "";
  DISPATCH_FROM : string = "";
  ORC : string = "";
  termAndCondtion : string = "";

  saveSkuData(){
    if(!this.validateCustomerDetails()){
      return;
    }
    else if(this.currentQuotationType == 'Quote to Customer' && !this.validateDataForDiscountedQuotation()){
      return;
    }

    let tAndc = "";
    // $(".termAndCondtion").each(function(){
    //   let isChecked = $(this).prop("checked");
    //   if(isChecked){
    //     tAndc += $(this).attr("condition_id")+",";
    //   }
    // });
    $(".termAndCondtion").each(function(){
      tAndc += $(this).attr("condition_id")+",";
    });
    this.termAndCondtion = tAndc.slice(0,-1);
    // console.log(this.termAndCondtion)

    if(this.remark == ""){
      $("#remarkInput").focus();
      this.toastr.warning("please enter value of `Remark` ");
      return false;
    }
    let tempCustomer = this.customerName;
    let custSplit = tempCustomer.split("---");
    let custCode = custSplit[0];
    let custName = custSplit[1];
    let jsonData = [];
    if(this.currentQuotationType == "Budgetory"){
      let json = {
        definedCaptionRequest : [],
        empid : this.loggedInEmployeeId,
        emp_role : this.loggedInUserRole,
        isdiscount : 0,
        itemList : this.itemList,
        project_id : this.project_id,
        project_type : this.project_type,
        selected_terms_cond : this.termAndCondtion,
        remark : this.remark,
        skuCustInfoDetails : {
          accountType : this.type,
          address : this.address,
          city : this.city,
          customerCode : custCode,
          customerName : custName,
          emailId : this.emailId,
          firmName : this.firmName,
          mobileNo : this.mobileNo,
          pinCode : this.pincode,
          state : this.state
        }
      }
      jsonData.push(json);
    }
    else{
      let json = {
        definedCaptionRequest : [
          {key : 'SW_PAST', value : this.SW_PAST},
          {key : 'FAUCETS_PAST', value : this.FAUCETS_PAST},
          {key : 'PAST_Sales', value : this.PAST_Sales},
          {key : 'Ref_ZQT', value : this.Ref_ZQT},
          {key : 'TOD', value : this.TOD},
          {key : 'Liability_FAUCETS', value : this.Liability_FAUCETS},
          {key : 'PAY_TERMS_FAUCETS', value : this.PAY_TERMS_FAUCETS},
          {key : 'FREIGHT_GIVEN_BY', value : this.FREIGHT_GIVEN_BY},
          {key : 'FREIGHT_FAUCETS', value : this.FREIGHT_FAUCETS},
          {key : 'DISPATCH_FROM', value : this.DISPATCH_FROM},
          {key : 'ORC', value : this.ORC}
        ],
        empid : this.loggedInEmployeeId,
        emp_role : this.loggedInUserRole,
        isdiscount : 1,
        itemList : this.itemList,
        project_id : this.project_id,
        project_type : this.project_type,
        selected_terms_cond : this.termAndCondtion,
        remark : this.remark,
        skuCustInfoDetails : {
          accountType : this.type,
          address : this.address,
          city : this.city,
          customerCode : custCode,
          customerName : custName,
          emailId : this.emailId,
          firmName : this.firmName,
          mobileNo : this.mobileNo,
          pinCode : this.pincode,
          state : this.state
        }
      }
      jsonData.push(json);
    }
    // console.log(jsonData)

    this.snapshotLoading = true;
    this._quotationManagementService.getDataByAnyPostRequest('saveSkuData',jsonData).subscribe(( result: any ) => {
                
      this.snapshotLoading = false;
      if ( !result ) {
          this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
      } else if ( result.Error ) {
          this.toastr.error(result.ErrorMessage);
      } else {  
        let quotID = result.wrappedList[0].quotID;
        this.toastr.success(result.responseDesc);
        this.closeAnyModal('exampleModal');
      }
    });
  }

  openDiscount(item_code, itemObj){
    $("#discount_txt").val("");
    $("#itemNetPrice").html("");
    let total_price = parseFloat($("#total_price_"+item_code).val());
    $("#itemGrossPrice_HTML").html(total_price);
    $("#itemGrossPrice").val(total_price);
    $("#discountOnItemcode").val(item_code);
    $("#itemCategory").val(itemObj.category);
    $("#itemQuantity").val(itemObj.quantity);

    $("#discountModal").modal({
      backdrop : 'static',
      keyboard : false
    });
  }

  discount : any = 0;
  applyDiscount(event : any){
    let category = $("#itemCategory").val();
    let total_price = parseFloat($("#itemGrossPrice").val());
    this.discount = event.target.value;
    this.discount = parseFloat(this.discount);
    if(this.currentQuotationType == "Budgetory"){
      let isFind = false;
      for(let i=0;i<this.quotationDiscountMatrix.length;i++){
        let disObj = this.quotationDiscountMatrix[i];
        let dd = disObj.Catogory == category && 
        this.noOfBath >= parseFloat(disObj.Start_No_Of_Bathrooms) && 
        this.noOfBath <= parseFloat(disObj.End_No_Of_Bathrooms) && 
        this.discount <= parseFloat(disObj.Discount);
        if(dd){
            isFind = true;
            break;
        }
      }
      if(!isFind){
        alert("Please enter correct value ");
        $("#itemNetPrice").html("");
        $("#discount_txt").val("");
        event.preventDefault();
        return false;
      }
    }
    else{
      if(this.discount > 100){
        alert("Please enter correct value ");
        $("#itemNetPrice").html("");
        $("#discount_txt").val("");
        event.preventDefault();
        return false;
      }
    }
    
    let netPrice = total_price - (total_price * this.discount/100);
    $("#itemNetPrice").html(netPrice);
  }

  applyDiscountOnItem(){
    let itemCode = $("#discountOnItemcode").val();
    let netPrice = $("#itemNetPrice").html();
    if(netPrice == ''){
      this.toastr.warning("please apply right discount")
      return false;
    }
    $("#total_price_"+itemCode).val(netPrice)
    $("#discount_value_"+itemCode).val(this.discount);
    $("#discount_value_HTML_"+itemCode).html(this.discount);
    this.grossTaxAndPrice();
    this.closeAnyModal('discountModal');
  }

  closeAnyModal(modalId : any){
    $("#"+modalId).modal("hide");
  }

  imageUrl = "";
  openImgModal(imageUrl : any){
    this.imageUrl = imageUrl;
    $("#imageModal").modal({
      backdrop : 'static',
      keyboard : false
    });
  }

  viewQuotPdf(quotId : any,quotType :any){
    // if qoutType == 1 this is discounted quotation else budgetory
    let line = 0;
    let isShow = confirm("Is show line diagram in PDF?? \nFor Yes press on Ok else Cancel");
    if(isShow){
      line = 1;
    }
    let type = quotType == 1 ? 'c' : 'b';
    let pdfUrl = "http://fast.org.in:8080/HSILQuotation_test/Service/generatePdfForQuotation?EMP_ID="+this.loggedInEmployeeId+"&QUOT_ID="+quotId+"&line="+line+"&type="+type;
    window.open(pdfUrl)

  }

  changeProjectName(){
    if(this.projectName == ""){
      this.quatationList = this.tempQuatationList;
      return;
    }
    let searchQuotationList = [];
    for(let i=0;i<this.tempQuatationList.length;i++){
      let arrayObj = this.tempQuatationList[i];
      if(arrayObj.project_name == this.projectName){
        searchQuotationList.push(arrayObj);
      }
    }
    this.quatationList = searchQuotationList;
  }

  openApprovalPortal(quotId, role){
    let url = "";
    // if(role == "TM")
    if(role != "Commercial")
      url = "http://fast.org.in/QuotationApprovalView/#/layout/quotation-approval?quotId="+quotId+"&role="+role;
    else
      url = "http://fast.org.in/QuotationApprovalView/#/layout/quotation-approval?projectId="+quotId+"&role="+role;
    window.open(url);
  }

}
