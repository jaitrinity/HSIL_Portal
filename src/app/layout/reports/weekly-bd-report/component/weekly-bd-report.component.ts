import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { WeeklyBDReportService } from '../service/weekly-bd-report.service';
import { ToastrService } from 'toastr-ng2';
import {WeeklyBDReportModel} from '../model/weekly-bd-report.model';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CurrencyPipe } from '@angular/common';
import { PaginationModel } from '../../../../shared/model/pagination.model';

@Component( {
    selector: 'app-weekly-report',
    templateUrl: '../template/weekly-bd-report.component.html',
    styleUrls: ['../styles/weekly-bd-report.component.scss'],
    animations: [routerTransition()],
    providers: [WeeklyBDReportService,ToastrService,AuthenticationService,CurrencyPipe]
} )
export class WeeklyBDReportComponent implements OnInit {
    public currentReport: string;
    public currentReportName: string;
    public currentWeek : any;
    public weeklyBDReportModelList : Array<WeeklyBDReportModel>;
    public loading = false;
    public paginationModel : PaginationModel;
    public searchUserReportReport : string;
    public key: string; //set default
    public reverse: boolean = false;    
    constructor( private router: Router,
        private _currencyPipe : CurrencyPipe,
        private route: ActivatedRoute,
        private titleService: Title,
        private reportService: WeeklyBDReportService,
        private _authenticationService : AuthenticationService,
        private toastr: ToastrService) {               
            this.weeklyBDReportModelList = new Array<WeeklyBDReportModel>();
            this.paginationModel = new PaginationModel();
    }

    ngOnInit() {
        this.titleService.setTitle( 'Weekly Report' ); 
        this.paginationModel.CurrentPage = 1;
        this.paginationModel.PerPage = 10;
        this.paginationModel.TotalRecords = 100;  
        this.getWeeklyBdReport();  
        this.currentWeek = this.getCurrentWeek();           
    }    
    
    callMethod(type) : void{
        if(type == 'excel')
        {
            let fileName = "weekly-report.xlsx";            
            this._authenticationService.exportFunction(fileName,this.weeklyBDReportModelList);
        }        
        else if(type == 'pdf')
        {
            this.toastr.info("Functionaity In Progress");
        }
    }

    sort(key : any) : void {
        this.key = key;
        this.reverse = !this.reverse;
    }

    getWeeklyBdReport() : void {
        this.loading = true;
        this.reportService.getWeekluBDReport(this.paginationModel).subscribe(( result: any ) => {
            this.weeklyBDReportModelList = [];
            this.weeklyBDReportModelList = new Array<WeeklyBDReportModel>();
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {                
                //this.toastr.success(result.SuccessMessage);                                
                this.paginationModel.TotalRecords = result.Data.TotalRecords;
                for(let i=0;i<result.Data.length;i++){
                    let _weeklyBDReportModel = new WeeklyBDReportModel();
                    _weeklyBDReportModel.BusinessDevelopement = result.Data[i].BusinessDevelopement;

                    _weeklyBDReportModel.ConversionNoMTD = result.Data[i].ConversionNoMTD;
                    _weeklyBDReportModel.ConversionNoWeek = result.Data[i].ConversionNoWeek;
                    _weeklyBDReportModel.ConversionNoYTD = result.Data[i].ConversionNoYTD;
                    _weeklyBDReportModel.ConversionValueMTD = this._currencyPipe.transform(result.Data[i].ConversionValueMTD,'INR',false,'1.0-0');
                    _weeklyBDReportModel.ConversionValueWeek = this._currencyPipe.transform(result.Data[i].ConversionValueWeek,'INR',false,'1.0-0');
                    _weeklyBDReportModel.ConversionValueYTD = this._currencyPipe.transform(result.Data[i].ConversionValueYTD,'INR',false,'1.0-0');

                    _weeklyBDReportModel.NewEnquiriesNoMTD = result.Data[i].NewEnquiriesNoMTD;
                    _weeklyBDReportModel.NewEnquiriesNoWeek = result.Data[i].NewEnquiriesNoWeek;
                    _weeklyBDReportModel.NewEnquiriesNoYTD = result.Data[i].NewEnquiriesNoYTD;
                    _weeklyBDReportModel.NewEnquiriesValueMTD = this._currencyPipe.transform(result.Data[i].NewEnquiriesValueMTD,'INR',false,'1.0-0');
                    _weeklyBDReportModel.NewEnquiriesValueWeek = this._currencyPipe.transform(result.Data[i].NewEnquiriesValueWeek,'INR',false,'1.0-0');
                    _weeklyBDReportModel.NewEnquiriesValueYTD = this._currencyPipe.transform(result.Data[i].NewEnquiriesValueYTD,'INR',false,'1.0-0');

                    _weeklyBDReportModel.VisitsCompletedNoMTD = result.Data[i].VisitsCompletedNoMTD;
                    _weeklyBDReportModel.VisitsCompletedNoYTD = result.Data[i].VisitsCompletedNoYTD;
                    _weeklyBDReportModel.VisitsCompletedNoWeek = result.Data[i].VisitsCompletedNoWeek;

                    _weeklyBDReportModel.OrderLostNoMTD = result.Data[i].OrderLostNoMTD;
                    _weeklyBDReportModel.OrderLostNoWeek = result.Data[i].OrderLostNoWeek;
                    _weeklyBDReportModel.OrderLostNoYTD = result.Data[i].OrderLostNoYTD;
                    _weeklyBDReportModel.OrderLostValueMTD = this._currencyPipe.transform(result.Data[i].OrderLostValueMTD,'INR',false,'1.0-0');
                    _weeklyBDReportModel.OrderLostValueWeek = this._currencyPipe.transform(result.Data[i].OrderLostValueWeek,'INR',false,'1.0-0');
                    _weeklyBDReportModel.OrderLostValueYTD = this._currencyPipe.transform(result.Data[i].OrderLostValueYTD,'INR',false,'1.0-0');

                    _weeklyBDReportModel.NewPipelineNoMTD = result.Data[i].NewPipelineNoMTD;
                    _weeklyBDReportModel.NewPipelineNoWeek = result.Data[i].NewPipelineNoWeek;
                    _weeklyBDReportModel.NewPipelineNoYTD = result.Data[i].NewPipelineNoYTD;
                    _weeklyBDReportModel.NewPipelineValueMTD = this._currencyPipe.transform(result.Data[i].NewPipelineValueMTD,'INR',false,'1.0-0');
                    _weeklyBDReportModel.NewPipelineValueWeek = this._currencyPipe.transform(result.Data[i].NewPipelineValueWeek,'INR',false,'1.0-0');
                    _weeklyBDReportModel.NewPipelineValueYTD = this._currencyPipe.transform(result.Data[i].NewPipelineValueYTD,'INR',false,'1.0-0');

                    this.weeklyBDReportModelList.push(_weeklyBDReportModel);
                }                    
            }
            this.loading = false;
        });
    }

    getCurrentWeek() {
        let today : any = new Date();
        let onejan : any = new Date(today.getFullYear(), 0, 1);
        return Math.ceil((((today - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    }            
}