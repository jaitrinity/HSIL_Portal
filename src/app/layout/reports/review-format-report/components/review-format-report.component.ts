import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ReviewFormatReportService } from '../service/review-format-report.service';
import { ToastrService } from 'toastr-ng2';
import { ReviewFormatReportModel } from '../model/review-format-report.model';
import { ReviewFormatWeekwiseReportModel } from '../model/review-format-weekwise-report.model';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { PaginationModel } from '../../../../shared/model/pagination.model';
import { CommonService } from '../../../../shared/services/common.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';

@Component( {
    selector: 'app-review-format-report',
    templateUrl: '../template/review-format-report.component.html',
    animations: [routerTransition()],
    providers: [ReviewFormatReportService,ToastrService,AuthenticationService,CommonService,DecimalPipe]
})

export class ReviewFormatReportComponent implements OnInit { 
    public showFilters : boolean = false;
    public showReviewFormatReport : boolean = true;
    public showCurrentWeek : boolean = false;
    public showLastWeek : boolean = false;
    public reviewReportSrNo : number = 0;
    public currentWeekSrNo : number = 1;
    public lastWeekSrNo : number = 1;
    public importance : string = 'All';
    public p : any;
    public paginationModel : PaginationModel;
    public paginationModelCurrentWeek : PaginationModel;
    public paginationModelLastWeek : PaginationModel;
    public reviewFormatReportModelList : Array<ReviewFormatReportModel> =  new Array<ReviewFormatReportModel>();
    public reviewFormatWeekwiseReportModelCurrentWeekList : Array<ReviewFormatWeekwiseReportModel> = new Array<ReviewFormatWeekwiseReportModel>();
    public reviewFormatWeekwiseReportModelLastWeekList : Array<ReviewFormatWeekwiseReportModel> = new Array<ReviewFormatWeekwiseReportModel>();    
    public currentMonth : string;
    public weekType : number;//Last week type = 0; Current Week Type = 1 ; Last Month type = 2; Current Month Type = 3;
    public excel : boolean = false;
    public isPDF : boolean = false;
    public isLoading : boolean = false;
    public currentReport : string;
    public paginationModelCurrentPerPage : number = 10;
    public paginationModelLastPerPage : number = 10;
    public segmentTypeList : Array<string> = [];
    public brandsList : Array<string> = [];
    public brands : string = 'All';
    public segment : string = 'All';
    public visitsMonths = [];
    monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    d = new Date();
    public currentMonthName : string = this.monthNames[this.d.getMonth()];    
    public lastMonthName : string = this.monthNames[( (this.d.getMonth()-1) == -1) ? 11 :  (this.d.getMonth()-1)];
    constructor(private titleService : Title,
        private _commonService : CommonService,
        private _authenticationService : AuthenticationService,
        private toastr: ToastrService,
        private decimalPipe : DecimalPipe,
        private route: ActivatedRoute,
        private reviewFormatReportService : ReviewFormatReportService,
        private vcr: ViewContainerRef) {
            this.paginationModel = new PaginationModel();
            this.paginationModel.CurrentPage = 1;
            this.paginationModel.PerPage = 10;
            this.paginationModel.TotalRecords = 0;            
    }

    ngOnInit(){
        this.route.queryParams.forEach(( params: Params ) => {
            this.currentReport = params['type'];
            window.scrollTo( 0, 0 );
            this.currentReport = this.currentReport ? this.currentReport : '';
            this.titleService.setTitle("Review Format Report:"+ this.currentReport); 
            this.showCurrentWeek = false;
            this.showLastWeek = false;
        });
        this.resetCurrentWeekReportPagination();
        this.resetLastWeekReportPagination(); 
        this.getMonthsList(); 
        if(this.showReviewFormatReport){
            this.getReviewFormatReport();
        }
        this.getSegmentDetails();
        this.getBrandsDetails();
    }    

    callMethod(reviewFormatWeekList) : void {
        let fileName = '';
        if(this.excel)
        {
            fileName = (this.weekType == 1 || this.weekType == 3) ? "ReviewFormatCurrent"+this.currentReport+"Report.xlsx" : "ReviewFormatLast"+this.currentReport+"Report.xlsx";
            this._authenticationService.exportFunction(fileName,reviewFormatWeekList);
            this.excel = false;
        }
        else if(this.isPDF)
        {
            this.toastr.info("Functionaity In Progress");
            this.isPDF = false;
        }        
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

    getBrandsDetails() : void {
        this._commonService.getBrandList().subscribe( result =>{
            if(result.Error){
                this.toastr.error(result.ErrorMessage);
            }
            else{                
                this.brandsList = result.Data;
            }
        });
    }

    getSegmentDetails() : void {
        this.reviewFormatReportService.getSegmentDetails().subscribe( result =>{
            if(result.Error){
                this.toastr.error(result.ErrorMessage);
            }
            else{                
                this.segmentTypeList = result.Data;
            }
        });
    }

    getExcelPDF(weekType) : void {
        this.excel = true;
        if(weekType == 1){
            if(this.currentReport == 'Month'){
                this.weekType = 3;
            }
            else{
                this.weekType = 1;
            }            
        }else if(weekType == 0){
            if(this.currentReport == 'Month'){
                this.weekType = 2;
            }
            else{
                this.weekType = 0;
            }
        }
        this.getReviewFormatWeekwiseReport();
    }

    getReviewFormatReport() : void {
        this.isLoading = true;
        this.reviewFormatReportService.getReviewFormatReportDetails(this.currentMonth,this.paginationModel).subscribe(result =>{
            if(result.Error){
                this.toastr.error(result.ErrorMessage);
                this.isLoading = false;
            }else{
                this.toastr.success(result.SuccessMessage);
                this.reviewFormatReportModelList = [];                
                for(let i=0;i<result.Data.length;i++){                    
                    this.reviewFormatReportModelList.push(result.Data[i]);
                }                
                this.paginationModel.TotalRecords = result.Data.TotalRecords;                                                
                this.isLoading = false;
            }
        });
    }

    public getCurrentWeekReport(event : number) : void{        
        this.weekType = this.currentReport == 'Month' ? 3 : 1;
        this.excel = false;
        this.paginationModelCurrentWeek.CurrentPage = event;
        this.getReviewFormatWeekwiseReport();
    }

    getLastWeekReport(event : number) : void{
        this.weekType = this.currentReport == 'Week' ? 0 : 2;
        this.excel = false;
        this.paginationModelLastWeek.CurrentPage = event;
        this.getReviewFormatWeekwiseReport();
    }

    getWeekWiseReport(isCurrent : number) : void {
        if(isCurrent == 1 && this.currentReport == 'Month'){
            this.weekType = 3;   
        } else if(isCurrent == 1 && this.currentReport == 'Week'){
            this.weekType = 1;   
        } else if(isCurrent == 0 && this.currentReport == 'Month'){
            this.weekType = 2;   
        } else if(isCurrent == 0 && this.currentReport == 'Week'){
            this.weekType = 0;
        }
        if(this.weekType == 1 || this.weekType == 3) {
            this.resetCurrentWeekReportPagination();
        }
        else{
            this.resetLastWeekReportPagination();
        }
        this.excel = false;
        this.getReviewFormatWeekwiseReport();
    }

    resetCurrentWeekReportPagination(){
        this.paginationModelCurrentWeek = new PaginationModel();
        this.paginationModelCurrentWeek.CurrentPage = 1;
        this.paginationModelCurrentWeek.PerPage = this.paginationModelCurrentPerPage;
        this.paginationModelCurrentWeek.TotalRecords = 0;
    }

    resetLastWeekReportPagination(){
        this.paginationModelLastWeek = new PaginationModel();
        this.paginationModelLastWeek.CurrentPage = 1;
        this.paginationModelLastWeek.PerPage = this.paginationModelLastPerPage;
        this.paginationModelLastWeek.TotalRecords = 0;
    }

    updateLastMonth(){                
        this.lastMonthName = this.monthNames[( (this.monthNames.indexOf(this.currentMonthName) - 1) == -1) ? 11 :  (this.monthNames.indexOf(this.currentMonthName) - 1)];        
    }

    getReviewFormatWeekwiseReport() : void {
        this.isLoading = true;
        let paginationTemp = null;
        paginationTemp = (this.weekType == 1 || this.weekType == 3) ? this.paginationModelCurrentWeek : this.paginationModelLastWeek;
        this.reviewFormatReportService.getReviewFormatWeekwiseReport(this.currentMonthName,this.lastMonthName,this.brands,this.segment,this.excel,this.importance,this.weekType,paginationTemp).subscribe(result =>{
            if(result.Error){
                this.toastr.error(result.ErrorMessage);
                this.isLoading = false;
            }else{
                this.toastr.success(result.SuccessMessage);                
                if(this.excel || this.isPDF){
                    this.callMethod(result.Data);
                }
                else{
                    if(this.weekType == 1 || this.weekType == 3){
                        this.reviewFormatWeekwiseReportModelCurrentWeekList = [];
                        this.reviewFormatWeekwiseReportModelCurrentWeekList = new Array<ReviewFormatWeekwiseReportModel>();
                        result.Data.forEach( data => {
                            let reviewFormatReport: ReviewFormatWeekwiseReportModel = new ReviewFormatWeekwiseReportModel();
                            reviewFormatReport.UserName = data.UserName;
                            reviewFormatReport.TerritoryCode = data.TERRITORY_CODE;
                            reviewFormatReport.Brand = data.Brand;
                            reviewFormatReport.Importance = data.Importance;

                            console.log("Current Report",this.currentReport);                                
                            if(this.currentReport == 'Week'){                                
                                reviewFormatReport.NoOfCallsMadeInTheWeek = +data.NoOfCallsMadeInTheWeek;

                                reviewFormatReport.NoOfEnquiryThisWeek = +data.NoOfEnquiryThisWeek;
                                reviewFormatReport.EnquiryValueThisWeek = +data.EnquiryValueThisWeek;
                                reviewFormatReport.PercentChangeFromLastWeekEnquiry = +data.PercentChangeFromLastWeekEnquiry;

                                reviewFormatReport.NoOfPipelineThisWeek = +data.NoOfPipelineThisWeek;
                                reviewFormatReport.PipelineValueThisWeek = +data.PipelineValueThisWeek;
                                reviewFormatReport.PercentageChangeFromLastWeekPipeline = +data.PercentageChangeFromLastWeekPipeline;

                                reviewFormatReport.TotalNoOfOpenPipeline = +data.TotalNoOfOpenPipeline;
                                reviewFormatReport.TotalValueOfOpenPipeline = +data.TotalValueOfOpenPipeline;
                                reviewFormatReport.PercentageChangeFromLastWeekOpenPipeline = +data.PercentageChangeFromLastWeekOpenPipeline;
                        
                                reviewFormatReport.ConversionValueYTD = +data.ConversionValueYTD;
                                reviewFormatReport.PercentageChangeFromLastWeekConversionValueYTD = +data.PercentageChangeFromLastWeekConversionValueYTD;

                                // reviewFormatReport.BillingDoneYTD = +data.BillingDoneYTD;
                                // reviewFormatReport.PercentageChangeFromLastWeekBillingDoneYTD = +data.PercentageChangeFromLastWeekBillingDoneYTD;
                            }else{
                                console.log("Current Report m",this.currentReport);
                                reviewFormatReport.NoOfCallsMadeInTheWeek = +data.NoOfCallsMadeInTheMonth;

                                reviewFormatReport.NoOfEnquiryThisWeek = +data.NoOfEnquiryThisMonth;
                                reviewFormatReport.EnquiryValueThisWeek = +data.EnquiryValueThisMonth;
                                reviewFormatReport.PercentChangeFromLastWeekEnquiry = +data.PercentChangeFromLastMonthEnquiry;

                                reviewFormatReport.NoOfPipelineThisWeek = +data.NoOfPipelineThisMonth;
                                reviewFormatReport.PipelineValueThisWeek = +data.PipelineValueThisMonth;
                                reviewFormatReport.PercentageChangeFromLastWeekPipeline = +data.PercentageChangeFromLastMonthPipeline;

                                reviewFormatReport.TotalNoOfOpenPipeline = +data.TotalNoOfOpenPipeline;
                                reviewFormatReport.TotalValueOfOpenPipeline = +data.TotalValueOfOpenPipeline;
                                reviewFormatReport.PercentageChangeFromLastWeekOpenPipeline = +data.PercentageChangeFromLastMonthOpenPipeline;
                        
                                reviewFormatReport.ConversionValueYTD = +data.ConversionValueYTD;
                                reviewFormatReport.PercentageChangeFromLastWeekConversionValueYTD = +data.PercentageChangeFromLastMonthConversionValueYTD;

                                // reviewFormatReport.BillingDoneYTD = +data.BillingDoneYTD;
                                // reviewFormatReport.PercentageChangeFromLastWeekBillingDoneYTD = +data.PercentageChangeFromLastMonthBillingDoneYTD;
                            }
                            
                            this.reviewFormatWeekwiseReportModelCurrentWeekList.push(reviewFormatReport);
                        });
                        if(this.excel || this.isPDF){
                            this.callMethod(this.reviewFormatWeekwiseReportModelCurrentWeekList);
                        }
                        this.paginationModelCurrentWeek.TotalRecords = result.TotalRecords;                         
                        this.currentWeekSrNo = ((this.paginationModelCurrentWeek.CurrentPage - 1 ) * this.paginationModelCurrentWeek.PerPage);                        
                    }   
                    else if(this.weekType == 0 || this.weekType == 2){
                        this.reviewFormatWeekwiseReportModelLastWeekList = [];
                        this.reviewFormatWeekwiseReportModelLastWeekList = new Array<ReviewFormatWeekwiseReportModel>();
                        this.paginationModelLastWeek.TotalRecords = result.TotalRecords;                        
                                            
                        result.Data.forEach( data => {
                            let reviewFormatReport: ReviewFormatWeekwiseReportModel = new ReviewFormatWeekwiseReportModel();
                            reviewFormatReport.UserName = data.UserName;
                            reviewFormatReport.TerritoryCode = data.TERRITORY_CODE;
                            reviewFormatReport.Brand = data.Brand;
                            reviewFormatReport.Importance = data.Importance;
                            
                            if(this.currentReport == 'Week'){                                
                                reviewFormatReport.NoOfCallsMadeInTheWeek = +data.NoOfCallsMadeInTheWeek;

                                reviewFormatReport.NoOfEnquiryThisWeek = +data.NoOfEnquiryThisWeek;
                                reviewFormatReport.EnquiryValueThisWeek = +data.EnquiryValueThisWeek;
                                reviewFormatReport.PercentChangeFromLastWeekEnquiry = +data.PercentChangeFromLastWeekEnquiry;

                                reviewFormatReport.NoOfPipelineThisWeek = +data.NoOfPipelineThisWeek;
                                reviewFormatReport.PipelineValueThisWeek = +data.PipelineValueThisWeek;
                                reviewFormatReport.PercentageChangeFromLastWeekPipeline = +data.PercentageChangeFromLastWeekPipeline;

                                reviewFormatReport.TotalNoOfOpenPipeline = +data.TotalNoOfOpenPipeline;
                                reviewFormatReport.TotalValueOfOpenPipeline = +data.TotalValueOfOpenPipeline;
                                reviewFormatReport.PercentageChangeFromLastWeekOpenPipeline = +data.PercentageChangeFromLastWeekOpenPipeline;
                        
                                reviewFormatReport.ConversionValueYTD = +data.ConversionValueYTD;
                                reviewFormatReport.PercentageChangeFromLastWeekConversionValueYTD = +data.PercentageChangeFromLastWeekConversionValueYTD;

                                // reviewFormatReport.BillingDoneYTD = +data.BillingDoneYTD;
                                // reviewFormatReport.PercentageChangeFromLastWeekBillingDoneYTD = +data.PercentageChangeFromLastWeekBillingDoneYTD;
                            }else{
                                console.log("Current Report m",this.currentReport);
                                reviewFormatReport.NoOfCallsMadeInTheWeek = +data.NoOfCallsMadeInTheMonth;

                                reviewFormatReport.NoOfEnquiryThisWeek = +data.NoOfEnquiryThisMonth;
                                reviewFormatReport.EnquiryValueThisWeek = +data.EnquiryValueThisMonth;
                                reviewFormatReport.PercentChangeFromLastWeekEnquiry = +data.PercentChangeFromLastMonthEnquiry;

                                reviewFormatReport.NoOfPipelineThisWeek = +data.NoOfPipelineThisMonth;
                                reviewFormatReport.PipelineValueThisWeek = +data.PipelineValueThisMonth;
                                reviewFormatReport.PercentageChangeFromLastWeekPipeline = +data.PercentageChangeFromLastMonthPipeline;

                                reviewFormatReport.TotalNoOfOpenPipeline = +data.TotalNoOfOpenPipeline;
                                reviewFormatReport.TotalValueOfOpenPipeline = +data.TotalValueOfOpenPipeline;
                                reviewFormatReport.PercentageChangeFromLastWeekOpenPipeline = +data.PercentageChangeFromLastMonthOpenPipeline;
                        
                                reviewFormatReport.ConversionValueYTD = +data.ConversionValueYTD;
                                reviewFormatReport.PercentageChangeFromLastWeekConversionValueYTD = +data.PercentageChangeFromLastMonthConversionValueYTD;

                                // reviewFormatReport.BillingDoneYTD = +data.BillingDoneYTD;
                                // reviewFormatReport.PercentageChangeFromLastWeekBillingDoneYTD = +data.PercentageChangeFromLastMonthBillingDoneYTD;
                            }
                            
                            this.reviewFormatWeekwiseReportModelLastWeekList.push(reviewFormatReport);
                        });

                        this.lastWeekSrNo = ((this.paginationModelCurrentWeek.CurrentPage - 1 ) * this.paginationModelCurrentWeek.PerPage);                        
                    }
                }
                this.isLoading = false;                                         
            }
        });
    }

    // precisionRound(number, precision) {
    //     var factor = Math.pow(10, precision);
    //     return Math.round(number * factor) / factor;
    // }
}
