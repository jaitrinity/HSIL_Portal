import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AccountsService } from '../service/account.service';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'toastr-ng2';
import { AccountsModel } from '../model/account.model';
import { AccountsSummeryModel } from '../model/account-summery.model';
import { ClientsDetailsModel } from '../model/clients-details.model';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CurrencyPipe } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModel } from '../../../../shared/model/pagination.model';
import { Console } from '@angular/core/src/console';
import { DecimalPipe } from '@angular/common';
import {IMyDpOptions} from 'mydatepicker';


@Component( {
    selector: 'app-accounts',
    templateUrl: '../template/account.component.html',
    styleUrls: ['../styles/accounts.component.scss'],
    animations: [routerTransition()],
    providers: [AccountsService,ToastrService,AuthenticationService,CurrencyPipe,DecimalPipe]
})

export class AccountsComponent implements OnInit {    
    public currentAccount : string;
    public isShowAccountSummery : Boolean;
    public accountSummeryList: Array<AccountsSummeryModel>;
    public accountsColumnsList : Array<any>;
    public accountsModelList : Array<AccountsModel>;
    public accountTypeList;
    public currentReport : string;
    public currentReportName : string;
    public loading = false;    
    public searchAccountReport : string;
    public key: string; //set default
    public reverse: boolean = false;  
    public paginationModel : PaginationModel;  
    public importance : string;     
    public srNo: number = 0;
    public accountReportFromDate : any;
    public accountReportToDate : any;
    public en : any;
    public isExcel : boolean = false;
    closeResult: string;
    public clientsDetailsModelList : Array<ClientsDetailsModel>;
    public content : any;


    public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'yyyy/mm/dd',
    };
    
    dt = new Date();
    // Initialized to specific date (09.10.2018).
    public model: any = { date: { year: this.dt.getFullYear(), month: (this.dt.getMonth()+1), day: this.dt.getDate() } };



    public onDateFromChanged(event){
        this.accountReportFromDate = event.formatted;
    } 
    
    public onDateEndChanged(event){
        this.accountReportToDate = event.formatted;
    } 

    constructor( private router: Router,        
        private route: ActivatedRoute,
        private titleService: Title,
        private modalService: NgbModal,
        private reportService: AccountsService,
        private _authenticationService :AuthenticationService,
        private toastr: ToastrService ) {                    
        this.accountsModelList = new Array<AccountsModel>();        
        this.isShowAccountSummery = false;
        this.accountTypeList = [];
        this.accountsColumnsList = [];
        this.paginationModel = new PaginationModel();
        this.paginationModel.TotalRecords = 0;
        this.paginationModel.CurrentPage = 1;
        this.paginationModel.PerPage = 10;
        this.currentAccount = 'All';
        this.importance = 'All';        
    }

    ngOnInit() { 
        this.en = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
        };                                             
        this.route.queryParams.forEach(( params: Params ) => {
            this.currentReport = params['type'];
            window.scrollTo( 0, 0 );
            this.currentReport = this.currentReport ? this.currentReport : '';
            this.titleService.setTitle( this.currentReport);     
            if(this.currentReport == 'details'){                                
                this.currentReportName = 'Accounts Details ';
                this.titleService.setTitle(this.currentReportName);                                                   
            }                   
            else if(this.currentReport == 'performance'){                                
                this.currentReportName = 'Accounts Performance ';
                this.titleService.setTitle(this.currentReportName);                                   
            }            
            this.getAccountTypeList();  
            this.getAccountsDetails();
        });
    }

    sort(key : any) : void {        
        this.key = key;
        this.reverse = !this.reverse;
    }

    callMethod(type) : void{
        if(type == 'excel')
        {
            this.isExcel = true;
            this.getAccountsDetails();
        }        
        else if(type == 'pdf')
        {
            this.toastr.info("Functionaity In Progress");
        }
    }

    getAccountTypeList() : void {
        this.loading = true;
        this.reportService.getAccountTypeList().subscribe(( result: any ) => {
            this.loading = false;
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {                
                this.toastr.success(result.SuccessMessage);                   
                this.accountTypeList = result.Data;                
            }
        });
    }

    changePage(event):void{
        this.paginationModel.CurrentPage = event;
        this.getAccountsDetails();
    }

    searchReport() : void{
        this.paginationModel.CurrentPage = 1;
        this.paginationModel.TotalRecords = 0;
        this.getAccountsDetails();        
    }

    getClients(dataItem : any){        
        this.clientsDetailsModelList = new Array<ClientsDetailsModel>();
        if(dataItem){
            this.loading = true;
            let mappingId : any;
            if(this.currentReport == 'details'){                                
                //mappingId = dataItem[8];
                mappingId = dataItem[9];
            }                   
            else if(this.currentReport == 'performance'){                                
                //mappingId = dataItem[17];
                mappingId = dataItem[18];
            }            
            this.reportService.getClients(mappingId).subscribe( result=> {
                this.loading = false;
                if ( !result ) {
                    this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
                } else if ( result.Error ) {
                    this.toastr.error(result.ErrorMessage);
                } else {
                    this.modalService.open(this.content).result.then((result) => {
                        this.closeResult = `Closed with: ${result}`;
                    }, (reason) => {
                        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                    });
                    this.toastr.success(result.SuccessMessage);                                        
                    result.Data.forEach( result => {
                        let clientsDetailsModel = new ClientsDetailsModel();
                        clientsDetailsModel.Designation = result[0];
                        clientsDetailsModel.ClientName = result[1];
                        clientsDetailsModel.ContactNo = result[2];
                        clientsDetailsModel.EmailId = result[3];
                        this.clientsDetailsModelList.push(clientsDetailsModel);
                    });
                }
            });
        }      
        else{
            this.toastr.error("Unable to get Mapping Id");
        }  
    }

    open(content) {
        this.content = content;
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    getAccountsDetails(): void {
        this.loading = true;        
        this.accountReportFromDate = this.accountReportFromDate ? this.accountReportFromDate : ''; 
        this.accountReportToDate = this.accountReportToDate ? this.accountReportToDate : ''; 
        this.reportService.getAccountsDetails(this.accountReportFromDate,this.accountReportToDate,this.isExcel,this.searchAccountReport,this.importance,this.currentAccount,this.currentReport,this.paginationModel).subscribe(( result: any ) => {
            if(!this.isExcel){
                this.accountsModelList = null;
                this.accountsColumnsList = null;
                this.accountSummeryList = null;
                this.paginationModel.TotalRecords = 0;
            }
            this.loading = false;
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {                
                if(this.isExcel){
                    let tempDataArray : Array<any> = [];
                    tempDataArray.push(result.Columns);
                    result.ArrayData.forEach(element => {
                        tempDataArray.push(element);
                    });
                    this._authenticationService.exportFunction("AccountReport.xlsx",tempDataArray);
                    this.isExcel = false;
                }
                else{
                    this.srNo = ((this.paginationModel.CurrentPage - 1 ) * this.paginationModel.PerPage);
                    this.paginationModel.TotalRecords = result.TotalRecords;
                    this.toastr.success(result.SuccessMessage);
                    this.accountsModelList = result.ArrayData;
                    this.accountsColumnsList = result.Columns;
                    this.accountSummeryList = result.Summery.Data;
                }                
            }
        });
    }
}