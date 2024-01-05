import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProjectReportService } from '../service/project-report.service';
import { ToastrService } from 'toastr-ng2';
import { ProjectReportModel } from '../model/project-report.model';
import { ProjectSummeryModel } from '../model/project-summery.model';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { PaginationModel } from '../../../../shared/model/pagination.model';
import { CommonService } from '../../../../shared/services/common.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IMyDpOptions } from 'mydatepicker';

@Component( {
    selector: 'app-project-report',
    templateUrl: '../template/project-report.component.html',
    styleUrls: ['../styles/project-report.component.scss'],
    animations: [routerTransition()],
    providers: [ProjectReportService,ToastrService,AuthenticationService,CommonService]
})

export class ProjectReportComponent implements OnInit {      
    closeResult: string;
    public projectReportSnapshotModelList : Array<ProjectReportModel>;
    public projectReportSnapshotColumnList : Array<any>;
    public projectReportDetailsModelList : Array<ProjectReportModel>;
    public projectReportDetailsColumnList : Array<any>;
    public projectTypeList : Array<string>;
    public currentProjectType : string;  
    public isShowProjectSummery : Boolean;
    public isShowProjectSnashot : Boolean;
    public isShowProjectDetails : Boolean;
    public currentReportName : string;        
    public projectSummeryModel : ProjectSummeryModel;    
    public searcProjectDetailsReport: string;
    public searcProjectSnapshotReport: string;
    public snapshotLoading = false;    
    public detailsLoading = false;    
    public projectSnapshotReportSortBy: string;
    public projectDetailsReportSortBy: string;
    public paginationSnapshotModel : PaginationModel;
    public paginationDetailsModel : PaginationModel;
    public visitsMonths = [];
    public currentMonth: string = "All";
    public detailsSrNo : number = 1;
    public snapshotSrNo : number = 1;
    public projectSnapshotReportSortByReverse : boolean = true; 
    public projectDetailsReportSortByReverse : boolean = true;
    public taggedProject : number;
    public virtualState : string;
    public monthOfCloser:string;
    public zoneList = [];
    public zone:string;

    public detailsExcel: boolean = false;
    public snapshotExcel: boolean = false;
    public currentImageUrl : string = '';
    public projectReportFromDate : any;
    public projectReportToDate : any;
    public errorImage : string = 'https://kwspecialties.on.ca/wp-content/uploads/2014/07/no-image.png';
    public en : any;
    public isSalesBDE: boolean = false;
    public excelDataModelList : Array<any> = [];
    public isShowFilters: boolean = false;
    public isVirtualState = true;
    public ishotWarmCode = false
    public role:string;

    public virtualCity = [];


    public myDatePickerOptions: IMyDpOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy/mm/dd',
    };
    
    dt = new Date();
    // Initialized to specific date (09.10.2018).
    public model: any = { date: { year: this.dt.getFullYear(), month: (this.dt.getMonth()+1), day: this.dt.getDate() } };
    
    

    constructor( private router: Router,
        private route: ActivatedRoute,
        private _commonService : CommonService,
        private modalService: NgbModal,
        private titleService: Title,        
        private _projectReportService: ProjectReportService,
        private _authenticationService :AuthenticationService,
        private toastr: ToastrService,
        private vcr: ViewContainerRef ) {                
        this.projectReportSnapshotModelList = new Array<ProjectReportModel>();  
        this.projectReportDetailsModelList = new Array<ProjectReportModel>();  
        this.projectTypeList = ['Enquiry','Pipeline','Conversion','OrderLost'];
        this.isShowProjectSummery = false;   
        this.isShowProjectSnashot = true;
        this.isShowProjectDetails = false;          
        this.projectSummeryModel = new ProjectSummeryModel();
        this.projectReportSnapshotColumnList = [];
        this.projectReportDetailsColumnList = [];
        this.paginationSnapshotModel = new PaginationModel();        
        this.paginationDetailsModel = new PaginationModel();     
        this.taggedProject = 0;            
    }

    public onDateFromChanged(event){
        this.projectReportFromDate = event.formatted;
    } 
    
    public onDateEndChanged(event){
        this.projectReportToDate = event.formatted;
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
            this.getMonthsList();
            this.currentProjectType = params['type'];
            window.scrollTo( 0, 0 );      
            this.currentReportName = 'Project ' + (this.currentProjectType ? this.currentProjectType : '') + ' Report';            
            this.titleService.setTitle( this.currentReportName );            
            this.paginationDetailsModel.TotalRecords = 0;
            this.paginationDetailsModel.CurrentPage = 1;
            this.paginationDetailsModel.PerPage = 10;
            this.paginationSnapshotModel.TotalRecords = 0;
            this.paginationSnapshotModel.CurrentPage = 1;
            this.paginationSnapshotModel.PerPage = 10; 
            this.getProjectReportSnapshot();  
            this.isShowProjectDetails = false;
        });
        let userRole = sessionStorage.getItem("UserRole");
        this.role = userRole;
        // console.log(userRole);
        // console.log("user role:- " +userRole.toLowerCase());
        if(userRole.toLowerCase() == 'business development executive' || userRole.toLowerCase() == 'sales'){
            this.isSalesBDE = true;
        }

        this.virtualCity = JSON.parse(localStorage.getItem("virtualStateList"));
        this.zoneList = JSON.parse(localStorage.getItem("zoneList"));

    }

    changeCurrentType(item : string) : void {        
        this.router.navigateByUrl('/project-report?type='+item);
        if(item === "Enquiry"){
            this.ishotWarmCode = false;
        }
        else{
            this.ishotWarmCode = true;
        }
    }

    sortSnapshot(key : any) : void {        
        this.projectSnapshotReportSortBy = key;
        this.projectSnapshotReportSortByReverse = !this.projectSnapshotReportSortByReverse;
    }

    sortDetails(key : any) : void {        
        this.projectDetailsReportSortBy = key;
        this.projectDetailsReportSortByReverse = !this.projectDetailsReportSortByReverse;
    }

    changeSnapshotPage(event){
        this.paginationSnapshotModel.CurrentPage = event;
        this.getProjectReportSnapshot();
    }

    changeDetailsPage(event){
        this.paginationDetailsModel.CurrentPage = event;
        this.getProjectReportDetails();
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

    callDetailsMethod(type) : void{
        if(type == 'excel')
        {
            this.detailsExcel = true;
            this.getProjectReportDetails();            
        }
        else if(type == 'pdf')
        {
            this.toastr.info("Functionaity In Progress");
        }
    }

    callSnapshotMethod(type) : void{
        if(type == 'excel')
        {            
            this.snapshotExcel = true;
            this.getProjectReportSnapshot();            
        }
        else if(type == 'pdf')
        {
            this.toastr.info("Functionaity In Progress");
        }
    }

    resetSnapshotPagination(isSearch : number): void {
        if(!isSearch){
            this.searcProjectSnapshotReport = '';
        }        
        this.paginationSnapshotModel.TotalRecords = 100;   
        this.paginationSnapshotModel.CurrentPage = 1;
        this.paginationSnapshotModel.PerPage = 10;
        this.getProjectReportSnapshot();
    }

    resetDetailsPagination(isSearch : number): void {
        if(!isSearch){
            this.searcProjectDetailsReport = '';
        }                
        this.paginationDetailsModel.TotalRecords = 100;   
        this.paginationDetailsModel.CurrentPage = 1;
        this.paginationDetailsModel.PerPage = 10;
        this.getProjectReportDetails();
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

    getProjectReportSnapshot(): void {
        this.snapshotLoading = true;
        // console.log(this.projectReportFromDate);
        this.projectReportFromDate = this.projectReportFromDate ? this.projectReportFromDate : '';
        this.projectReportToDate = this.projectReportToDate ? this.projectReportToDate : '';
        this._projectReportService.getProjectReportDetails(this.projectReportFromDate,this.projectReportToDate,this.snapshotExcel,this.taggedProject,this.virtualState,this.zone,this.monthOfCloser,this.projectSnapshotReportSortBy,this.projectDetailsReportSortByReverse,this.searcProjectSnapshotReport,'Snapshot',this.currentMonth,this.currentProjectType,this.paginationSnapshotModel).subscribe(( result: any ) => {            
            if(!this.snapshotExcel){
                this.paginationSnapshotModel.TotalRecords = 0;
                this.projectReportSnapshotModelList = [];
                this.projectSummeryModel = null;
                this.projectReportSnapshotColumnList = [];
                // console.log(result);
            }            
            this.snapshotLoading = false;
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {                 
                this.snapshotSrNo = ((this.paginationSnapshotModel.CurrentPage - 1 ) * this.paginationSnapshotModel.PerPage);
                if(this.snapshotExcel){
                    this.snapshotExcel = false;
                    this.excelDataModelList = [];
                    this.excelDataModelList.push(result.Columns);
                    result.ArrayData.forEach(element => {
                        this.excelDataModelList.push(element);
                    }); 
                    this._authenticationService.exportFunction("ProjectSnapshotReport.xlsx",this.excelDataModelList);
                }
                else{
                    this.toastr.success(result.SuccessMessage);
                    this.paginationSnapshotModel.TotalRecords = result.TotalRecords;
                    this.projectReportSnapshotModelList = result.ArrayData;
                    this.projectSummeryModel = result.Summery;
                    this.projectReportSnapshotColumnList = result.Columns;                
                }                
            }
        });
    }

    getProjectReportDetails(): void {
        this.detailsLoading = true;
        this.projectReportFromDate = this.projectReportFromDate ? this.projectReportFromDate : '';
        this.projectReportToDate = this.projectReportToDate ? this.projectReportToDate : '';
        this._projectReportService.getProjectReportDetails(this.projectReportFromDate,this.projectReportToDate,this.detailsExcel,this.taggedProject,this.virtualState,this.zone,this.monthOfCloser,this.projectDetailsReportSortBy,this.projectSnapshotReportSortByReverse,this.searcProjectDetailsReport,'Details',this.currentMonth,this.currentProjectType,this.paginationDetailsModel).subscribe(( result: any ) => {
            if(!this.detailsExcel){
                this.paginationDetailsModel.TotalRecords = 0;
                this.projectReportDetailsModelList = [];            
                this.projectReportDetailsColumnList = [];
            }            
            this.detailsLoading = false;
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {           
                this.detailsSrNo = ((this.paginationDetailsModel.CurrentPage - 1 ) * this.paginationDetailsModel.PerPage);
                if(this.detailsExcel){
                    this.detailsExcel = false;
                    this.excelDataModelList = [];
                    this.excelDataModelList.push(result.Columns);                    
                    result.ArrayData.forEach(element => {
                        this.excelDataModelList.push(element);
                    });
                    this._authenticationService.exportFunction("ProjectDetailsReport.xlsx",this.excelDataModelList);                
                }
                else{
                    this.toastr.success(result.SuccessMessage);
                    this.paginationDetailsModel.TotalRecords = result.TotalRecords;
                    this.projectReportDetailsModelList = result.ArrayData;                
                    this.projectReportDetailsColumnList = result.Columns;
                }                
            }
        });
    }
}