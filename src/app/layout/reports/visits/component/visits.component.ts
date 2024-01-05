import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { VisitsService } from '../service/visits.service';
import { ToastrService } from 'toastr-ng2';
import { VisitsSummeryModel } from '../model/visits-summery.model'
import { VisitsModel } from '../model/visits.model';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { DatePipe } from '@angular/common';
import { PaginationModel } from '../../../../shared/model/pagination.model';
import { CommonService } from '../../../../shared/services/common.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {IMyDpOptions} from 'mydatepicker';

@Component( {
    selector: 'app-visits',
    templateUrl: '../template/visits.component.html',
    styleUrls: ['../styles/visits.component.scss'],
    animations: [routerTransition()],
    providers: [VisitsService,ToastrService,AuthenticationService,DatePipe,CommonService]
})

export class VisitsComponent implements OnInit {   
    public isShowVisitSummery : Boolean;
    public visitsSummeryModel : VisitsSummeryModel;
    public visitsModelList : Array<VisitsModel>;
    public loading = false;    
    public searchVisitsReport : string;
    public key: string; //set default
    public reverse: boolean = false;    
    public paginationModel : PaginationModel;    
    public visitsMonths = [];
    public currentMonth : string;
    public importance : string;
    public visitReportFromDate : any;
    public visitReportToDate : any;
    public isShowFilters : boolean = false;
    public en : any;
    public currentImageUrl : string;
    closeResult: string;
    public isExcel : boolean = false;
    public srNo : number;
    public errorImage : string = 'https://kwspecialties.on.ca/wp-content/uploads/2014/07/no-image.png';

    public myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'yyyy/mm/dd',
    };
    
    dt = new Date();
    // Initialized to specific date (09.10.2018).
    public model: any = { date: { year: this.dt.getFullYear(), month: (this.dt.getMonth()+1), day: this.dt.getDate() } };
    

    public onDateFromChanged(event){
        this.visitReportFromDate = event.formatted;
    } 
    
    public onDateEndChanged(event){
        this.visitReportToDate = event.formatted;
    } 
    

    constructor( private router: Router,
        private _datePipe : DatePipe,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private titleService: Title,
        private _visitsService: VisitsService,
        private _commonService: CommonService,        
        private _authenticationService :AuthenticationService,
        private toastr: ToastrService) {                
            this.isShowVisitSummery = false;
            this.visitsSummeryModel = new VisitsSummeryModel();
            this.visitsModelList = new Array<VisitsModel>();
            this.searchVisitsReport = '';
            this.paginationModel = new PaginationModel(); 
            this.currentMonth = 'All';
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
        this.getMonthsList();
        this.titleService.setTitle('Visits');    
        this.resetPagination();                        
    }
    
    sort(key : any) : void {
        this.key = key;
        this.reverse = !this.reverse;
    }

    updateCurrentImage(currentImage : string) : void {        
        this.currentImageUrl = currentImage ? currentImage : this.errorImage;
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
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

    getDataBySearch() : void{
        this.paginationModel.TotalRecords = 100;   
        this.paginationModel.CurrentPage = 1;
        this.paginationModel.PerPage = 10;
        this.getVisitsDetails();
    }

    resetPagination(): void {
        this.searchVisitsReport = '';
        this.paginationModel.TotalRecords = 100;   
        this.paginationModel.CurrentPage = 1;
        this.paginationModel.PerPage = 10;
        this.getVisitsDetails();
    }
    callMethod(type) : void{
        if(type == 'excel')
        {
            this.isExcel = true;
            this.getVisitsDetails();
        }
        else if(type == 'pdf')
        {
            this.toastr.info("Functionaity In Progress");
        }
    }

    changePage(event):void{
        this.paginationModel.CurrentPage = event;        
        this.getVisitsDetails();
    }

    getMonthsList(){
        this._commonService.getMonthsList().subscribe(result =>{
            if(result.Error){
                this.toastr.error(result.ErrorMessage);
            }
            else
            {
                this.visitsMonths = result.data;
            }
        });
    }
    
    getVisitsDetails(): void {
        this.loading = true;
        this.visitReportFromDate = this.visitReportFromDate ? this.visitReportFromDate : ''; 
        this.visitReportToDate = this.visitReportToDate ? this.visitReportToDate : ''; 
        this._visitsService.getVisitsDetails(this.visitReportFromDate,this.visitReportToDate,this.isExcel,this.searchVisitsReport,this.paginationModel,this.currentMonth,this.importance).subscribe(( result: any ) => {
            if(!this.isExcel){
                this.visitsModelList = [];
                this.visitsModelList = new Array<VisitsModel>();
                this.visitsSummeryModel = null;
                this.visitsSummeryModel = new VisitsSummeryModel();
            }
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {                                     
                this.toastr.success(result.SuccessMessage);
                this.paginationModel.TotalRecords = result.TotalRecords;
                let visitsModelList : Array<any> = [];
                for(let i=0;i<result.Data.length;i++){
                    let _visitsModel = new VisitsModel();
                    this.srNo = ((this.paginationModel.CurrentPage - 1 ) * this.paginationModel.PerPage);
                    _visitsModel.EmpCode = result.Data[i].EmpCode;
                    _visitsModel.User = result.Data[i].User;  
                    _visitsModel.TerritoryCode = result.Data[i].TERRITORY_CODE;  
                    _visitsModel.DealerClassification = result.Data[i].DealerClassification;      
                    _visitsModel.VisitType = result.Data[i].VisitType;
                    _visitsModel.AccountType = result.Data[i].AccountType;
                    _visitsModel.FirmName = result.Data[i].FIRM_NAME;                                  
                    _visitsModel.Address = result.Data[i].Address;
                    _visitsModel.MetWhom = result.Data[i].MetWhom; 
                    _visitsModel.Importance = result.Data[i].Importance;
                    _visitsModel.Objective = result.Data[i].Objective;
                    _visitsModel.PlanDate = this._datePipe.transform(result.Data[i].PlanDate,'mediumDate');
                    _visitsModel.Remarks = result.Data[i].Remarks;                                         
                    _visitsModel.Image = result.Data[i].IMAGE ? result.Data[i].IMAGE : this.errorImage;
                    if(result.Data[i].VisitDate != '' && result.Data[i].VisitDate != undefined && result.Data[i].VisitDate != null)
                    {
                        _visitsModel.VisitDate = this._datePipe.transform(result.Data[i].VisitDate,'medium');
                    }
                    else
                    {
                        _visitsModel.VisitDate = result.Data[i].VisitDate;
                    }                    
                    
                    _visitsModel.WithRm = (result.Data[i].WithRm == 1 || result.Data[i].WithRm == 'Y') ? 'Yes' : 'No';
                    this.isExcel ? visitsModelList.push(_visitsModel) : this.visitsModelList.push(_visitsModel);                    
                }
                this.visitsSummeryModel = result.Summery;
                if(this.isExcel){
                    this._authenticationService.exportFunction("VisitReport.xlsx",visitsModelList);
                }
            }
            this.loading = false;
            this.isExcel = false;
        });
    }
}