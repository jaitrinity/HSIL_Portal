import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserPerfromanceReportService } from '../service/user-perfromance-report.service';
import { ToastrService } from 'toastr-ng2';
import { UserPerformanceReportModel } from '../model/user-performance-report.model';
import { AuthenticationModel } from '../../../../authentication/authentication.model';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CurrencyPipe } from '@angular/common';
import { CommonService } from '../../../../shared/services/common.service';
import { PaginationModel } from '../../../../shared/model/pagination.model';

@Component({
    selector: 'app-user-performance-report',
    templateUrl: '../template/user-perfromance-report.component.html',
    styleUrls: ['../styles/user-perfromance-report.component.scss'],
    animations: [routerTransition()],
    providers: [UserPerfromanceReportService,ToastrService,AuthenticationService,CurrencyPipe,CommonService]
})

export class UserPerfromanceReportComponent implements OnInit {
    public currentReport: string;
    public currentType: string;    
    public userPerformanceReportModelList : Array<UserPerformanceReportModel>;    
    public userList : AuthenticationModel;
    public currentFinancialYear : string;
    public currentTypeUser : string;
    public financialYearList : Array<any>;
    public brandList : Array<any>;
    public loading = false;        
    public key: string;
    public reverse: boolean = false;   
    public paginationModel : PaginationModel; 
    constructor( private router: Router,
        private _commonService : CommonService,
        private _currencyPipe : CurrencyPipe,
        private route: ActivatedRoute,
        private _authenticationService : AuthenticationService,
        private titleService: Title,
        private reportService: UserPerfromanceReportService,
        private toastr: ToastrService) {                
        this.userList = new AuthenticationModel();
        this.brandList = [];
        this.paginationModel = new PaginationModel();
    }

    ngOnInit() {    
        this.getBrandList();
        this.route.queryParams.forEach(( params: Params ) => {
            this.currentType = params['type'];            
            this.currentReport = 'User Perfromance Report: ' + this.currentType;
            this.titleService.setTitle(this.currentReport);
            window.scrollTo( 0, 0 );
            this.getFinancialYearList();
            this.currentFinancialYear = '-1';
            this.currentTypeUser = '-1';
            this.userPerformanceReportModelList = new Array<UserPerformanceReportModel>();
            if(this.currentType)
            {
                this.getUserPerfromanceUsersList();                
            }
        });
    }   

    sort(key : any) : void {
        this.key = key;
        this.reverse = !this.reverse;
    }    
    
    callMethod(type) : void{
        if(type == 'excel')
        {
            let fileName = "UserPerformanceReport.xlsx";            
            this._authenticationService.exportFunction(fileName,this.userPerformanceReportModelList);
        }        
        else if(type == 'pdf')
        {
            this.toastr.info("Functionaity In Progress");
        }
    }

    getUserPerfromanceReport() : void {
        if(this.currentType != '-1'){
            this.loading = true;
            this.reportService.getUserPerfromanceReport(this.currentType,this.currentFinancialYear,this.currentTypeUser).subscribe(( result: any ) => {
                this.loading = false;
                if ( !result ) {
                    this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
                } else if ( result.Error ) {
                    this.toastr.error(result.ErrorMessage);
                } else {                
                    this.toastr.success(result.SuccessMessage);                    
                    this.userPerformanceReportModelList = [];
                    this.userPerformanceReportModelList = new Array<UserPerformanceReportModel>();                    
                    for(let i=0;i<result.Data.length;i++){
                        let _userPerformanceReportModel = new UserPerformanceReportModel();                        
                        _userPerformanceReportModel.Username = result.Username;
                        _userPerformanceReportModel.Month = result.Data[i].Month;
                        _userPerformanceReportModel.NewPipelineNo = result.Data[i].NewPipelineNo;                        
                        _userPerformanceReportModel.NewPipelineValue = this._currencyPipe.transform(result.Data[i].NewPipelineValue,'INR',false,'1.0-0');
                        _userPerformanceReportModel.OpeningPipelineNo = result.Data[i].OpeningPipelineNo;
                        _userPerformanceReportModel.OpeningPipelineValue = this._currencyPipe.transform(result.Data[i].OpeningPipelineValue,'INR',false,'1.0-0');
                        _userPerformanceReportModel.LostNo = result.Data[i].LostNo;
                        _userPerformanceReportModel.LostValue = this._currencyPipe.transform(result.Data[i].LostValue,'INR',false,'1.0-0');
                        _userPerformanceReportModel.EnquiryNo = result.Data[i].EnquiryNo;
                        _userPerformanceReportModel.EnquiryValue = this._currencyPipe.transform(result.Data[i].EnquiryValue,'INR',false,'1.0-0');
                        _userPerformanceReportModel.FromNewValue = this._currencyPipe.transform(result.Data[i].FromNewValue,'INR',false,'1.0-0');
                        _userPerformanceReportModel.FromNewNo = result.Data[i].FromNewNo;
                        _userPerformanceReportModel.FromOldValue = this._currencyPipe.transform(result.Data[i].FromOldValue,'INR',false,'1.0-0');
                        _userPerformanceReportModel.FromOldNo = result.Data[i].FromOldNo;
                        _userPerformanceReportModel.PipelineBankValue = this._currencyPipe.transform(result.Data[i].PipelineBankValue,'INR',false,'1.0-0');
                        _userPerformanceReportModel.CummBalanceValue = this._currencyPipe.transform(result.Data[i].CummBalanceValue,'INR',false,'1.0-0');
                        this.userPerformanceReportModelList.push(_userPerformanceReportModel);
                    }                    
                }
            });        
        }
    }

    getUserPerfromanceUsersList() : void {
        this.reportService.getUserPerformanceReportUserList(this.currentType).subscribe(( result: any ) => {                        
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {                                
                this.userList = result.Data;
            }
        });        
    }

    getFinancialYearList() : void {
        this.reportService.getFinancialYearList().subscribe(( result: any ) => {                        
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {                                                
                this.financialYearList = result.Data;
            }
        });
    }    
    
    getBrandList() : void {
        this._commonService.getBrandList().subscribe(( result: any ) => {                        
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {                                
                this.brandList = result.Data;
            }
        });
    }
}