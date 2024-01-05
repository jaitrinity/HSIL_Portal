import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserReportService } from '../service/user-report.service';
import { ToastrService } from 'toastr-ng2';
import { UserDataModel } from '../model/user-data.model';
import { UserSummeryModel } from '../model/user-summery.model';
import { RoleWiseCountModel } from  '../model/role-wise-count.model';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { PaginationModel } from '../../../../shared/model/pagination.model';

@Component( {
    selector: 'app-user-report',
    templateUrl: '../template/user-report.component.html',
    styleUrls: ['../styles/user-report.component.scss'],
    animations: [routerTransition()],
    providers: [UserReportService,ToastrService,AuthenticationService]
})

export class UserReportComponent implements OnInit {
    public currentReportType: string;
    public currentReportName: string;
    public showUserSummary : Boolean;
    public userDataModelList : Array<UserDataModel>;
    public userSummeryModel : UserSummeryModel;
    public reportTypeList : Array<String>;
    public noOfDays : number;
    public loading = false;
    public paginationModel : PaginationModel;
    public searchUserReportReport : string;
    public key: string; //set default
    public reverse: boolean = false;
    constructor( private router: Router,
        private route: ActivatedRoute,
        private titleService: Title,
        private _userReportService: UserReportService,
        private _authenticationService : AuthenticationService,
        private toastr: ToastrService,
        private vcr: ViewContainerRef) {
        this.showUserSummary = false;
        this.userDataModelList = new Array<UserDataModel>();
        this.userSummeryModel = new UserSummeryModel();
        this.userSummeryModel.RoleWiseCountModelList = new Array<RoleWiseCountModel>();
        this.reportTypeList = ["Inactive","Active"];
        this.noOfDays = 7;
        this.searchUserReportReport = '';
        this.paginationModel = new PaginationModel();
    }

    ngOnInit() {
        this.route.queryParams.forEach(( params: Params ) => {
            this.currentReportType = params['type'];
            window.scrollTo( 0, 0 );             
            this.currentReportName = (this.currentReportType ? this.currentReportType : '') + ' User Report';
            this.titleService.setTitle( this.currentReportName );      
            this.paginationModel.TotalRecords = 100;   
            this.paginationModel.CurrentPage = 1;
            this.paginationModel.PerPage = 10;      
            if(this.currentReportType){
                this.getUserDetails();
            }
        });
    }

    callMethod(type) : void{
        if(type == 'excel')
        {
            let fileName = "SegmentWiseReport.xlsx";            
            this._authenticationService.exportFunction(fileName,this.userDataModelList);
        }        
        else if(type == 'pdf')
        {
            this.toastr.info("Functionaity In Progress");
        }
    }

    changeReportType(currentReportType) : void{
        this.router.navigateByUrl('/user-report?type='+currentReportType);
    }

    sort(key : any) : void {
        this.key = key;
        this.reverse = !this.reverse;
    }
    
    getUserDetails(): void {
        this.loading = true;
        this._userReportService.getUserDetails(this.paginationModel,this.currentReportType,this.noOfDays).subscribe(( result: any ) => {
            this.userDataModelList = [];
            this.userDataModelList = new Array<UserDataModel>();
            this.loading = false;
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {                        
                this.toastr.success(result.SuccessMessage);
                this.paginationModel.TotalRecords = result.Data.TotalRecords;
                for(let i=0;i<result.Data.length;i++)
                {
                    let userDataModel = new UserDataModel();
                    userDataModel.Name = result.Data[i].Name ? result.Data[i].Name : 'N/A';
                    userDataModel.Region = result.Data[i].Region ? result.Data[i].Region : 'N/A';
                    userDataModel.ResignationDate = result.Data[i].ResignationDate ? result.Data[i].ResignationDate : 'N/A';
                    userDataModel.ResignationRemarks = result.Data[i].ResignationRemarks ? result.Data[i].ResignationRemarks : 'N/A';
                    userDataModel.RmName = result.Data[i].RMName ? result.Data[i].RMName : 'N/A';
                    userDataModel.Role = result.Data[i].Role ? result.Data[i].Role : 'N/A';
                    userDataModel.SrNo = result.Data[i].SrNo ? result.Data[i].SrNo : 'N/A';
                    this.userDataModelList.push(userDataModel);
                }                
                let userSummeryModel = new UserSummeryModel();                
                userSummeryModel.RoleWiseCountModelList = new Array<RoleWiseCountModel>();
                userSummeryModel.TotalCount = result.RoleWiseCountModelList.TotalCount ? result.RoleWiseCountModelList.TotalCount : 'N/A';
                for(let i = 0;i < result.RoleWiseCountModelList.Data.length;i++)
                {                                                            
                    let roleWiseCountModel = new RoleWiseCountModel();
                    roleWiseCountModel.InActiveCount = result.RoleWiseCountModelList.Data[i].RoleCount ? result.RoleWiseCountModelList.Data[i].RoleCount : 'N/A';
                    roleWiseCountModel.Role = result.RoleWiseCountModelList.Data[i].Role ? result.RoleWiseCountModelList.Data[i].Role : 'N/A';
                    userSummeryModel.RoleWiseCountModelList.push(roleWiseCountModel);
                }                
                this.userSummeryModel = userSummeryModel;                
            }
        });
    }
}