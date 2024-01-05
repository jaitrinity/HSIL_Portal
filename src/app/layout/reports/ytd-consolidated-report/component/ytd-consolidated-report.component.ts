import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { YTDConsolidatedReportService } from '../service/ytd-consolidated-report.service';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { ToastrService } from 'toastr-ng2';
import { YTDConsolidatedReport } from '../model/ytd-consolidated-report.model';
import { CommonService } from '../../../../shared/services/common.service';
import { BrandModel } from '../../../../shared/model/brand.model';
import { CurrencyPipe } from '@angular/common';
import { PaginationModel } from '../../../../shared/model/pagination.model';

@Component( {
    selector: 'app-ytd-consolidated-report',
    templateUrl: '../template/ytd-consolidated-report.component.html',
    styleUrls: ['../styles/ytd-consolidated-report.component.scss'],
    animations: [routerTransition()],
    providers: [YTDConsolidatedReportService,AuthenticationService,CommonService,CurrencyPipe]
})
export class YTDConsolidatedReportComponent implements OnInit {
    public currentBrand: string;
    public currentReport : string;
    public ytdConsolidatedReportList : Array<YTDConsolidatedReport>;
    public brandList : Array<BrandModel>;
    public loading = false;    
    public searchYTDConsolidatedReport : string;
    public key: string; //set default
    public reverse: boolean = false;
    public currentEmployeeRole : string;
    public paginationModel : PaginationModel;
    constructor( private router: Router,
        private _currencyPipe : CurrencyPipe,
        private route: ActivatedRoute,
        private titleService: Title,
        private _authenticationService : AuthenticationService,
        private _commonService : CommonService,
        private reportService: YTDConsolidatedReportService,
        private toastr: ToastrService ) {  
            this.ytdConsolidatedReportList = new Array<YTDConsolidatedReport>();  
            this.brandList = new Array<BrandModel>();               
            this.searchYTDConsolidatedReport = '';  
            this.currentEmployeeRole = '';   
            this.paginationModel = new PaginationModel();            
    }

    ngOnInit() {
        this.currentEmployeeRole = sessionStorage.getItem("UserRole");
        this.getBrandList();
        this.route.queryParams.forEach(( params: Params ) => {
            this.currentBrand = params['type'];
            window.scrollTo( 0, 0 );
            this.currentReport = this.currentBrand ? this.currentBrand : '' + ' YTD Consolidated Report ';
            this.titleService.setTitle( this.currentReport);     
            this.paginationModel.CurrentPage = 1;
            this.paginationModel.PerPage = 10;
            this.paginationModel.TotalRecords = 100;
            if(this.currentBrand){
                this.getytdConsolidatedReport();
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
            let fileName = "YTDConsolidatedReport.xlsx";            
            this._authenticationService.exportFunction(fileName,this.ytdConsolidatedReportList);
        }        
        else if(type == 'pdf')
        {
            this.toastr.info("Functionaity In Progress");
        }
    }

    getytdConsolidatedReport() : void {        
        this.loading = true;
        this.reportService.getYTDConsolidatedReport(this.paginationModel,this.currentBrand).subscribe(( result: any ) => {
            this.loading = false;
            if ( !result ) {
                this.toastr.error('Something went wrong!!! Please try after sometime.');
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {                
                this.ytdConsolidatedReportList = [];
                this.ytdConsolidatedReportList = new Array<YTDConsolidatedReport>();
                this.paginationModel.TotalRecords = result.Data.TotalRecords;
                for(let i=0;i<result.Data.length;i++){
                    let ytdConsolidated = new YTDConsolidatedReport();                    
                    ytdConsolidated.SrNo = result.Data[i].SrNo;
                    ytdConsolidated.Zone = result.Data[i].Zone ? result.Data[i].Zone : null;
                    ytdConsolidated.EmployeeName = result.Data[i].EmployeeName ? result.Data[i].EmployeeName : null;
                    ytdConsolidated.PipelineHotValue = this._currencyPipe.transform(result.Data[i].PipelineHotValue,'INR',false,'1.0-0');
                    ytdConsolidated.PipelineWarmValue = this._currencyPipe.transform(result.Data[i].PipelineWarmValue,'INR',false,'1.0-0');
                    ytdConsolidated.PipelineTotalValue = this._currencyPipe.transform(result.Data[i].PipelineTotalValue,'INR',false,'1.0-0');
                    ytdConsolidated.PipelineTotalNos = result.Data[i].PipelineTotalNos;
                    ytdConsolidated.PipelineColdValue = this._currencyPipe.transform(result.Data[i].PipelineColdValue,'INR',false,'1.0-0');
                    ytdConsolidated.PipelineBudgetaryValue = this._currencyPipe.transform(result.Data[i].PipelineBudgetaryValue,'INR',false,'1.0-0');
                    ytdConsolidated.PercentPipelineToConversion = this._currencyPipe.transform(result.Data[i].PercentPipelineToConversion,'INR',false,'1.0-0');
                    ytdConsolidated.PercentEnquiriesToPipeline = this._currencyPipe.transform(result.Data[i].PercentEnquiriesToPipeline,'INR',false,'1.0-0');
                    ytdConsolidated.PercentEnquiriesToConversion = this._currencyPipe.transform(result.Data[i].PercentEnquiriesToConversion,'INR',false,'1.0-0');
                    ytdConsolidated.LostYTDValue = this._currencyPipe.transform(result.Data[i].LostYTDValue,'INR',false,'1.0-0');
                    ytdConsolidated.LostYTDNos = result.Data[i].LostYTDNos;
                    ytdConsolidated.EnquiriesYTDValue = this._currencyPipe.transform(result.Data[i].EnquiriesYTDValue,'INR',false,'1.0-0');
                    ytdConsolidated.EnquiriesYTDNos = result.Data[i].EnquiriesYTDNos;
                    ytdConsolidated.ConversionYTDValue = this._currencyPipe.transform(result.Data[i].ConversionYTDValue,'INR',false,'1.0-0');
                    ytdConsolidated.ConversionYTDNos = result.Data[i].ConversionYTDNos;
                    this.ytdConsolidatedReportList.push(ytdConsolidated);
                }
                this.toastr.success(result.SuccessMessage);                 
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
