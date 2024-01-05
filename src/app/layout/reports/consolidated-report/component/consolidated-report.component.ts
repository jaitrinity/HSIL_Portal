import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ConsolidatedReportService } from '../service/consolidated-report.service';
import { ToastrService } from 'toastr-ng2';
import { ConsolidatedReportModel } from '../model/consolidated-report.model';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CurrencyPipe } from '@angular/common';
import { CommonService } from '../../../../shared/services/common.service';
import { PaginationModel } from '../../../../shared/model/pagination.model';

@Component( {
    selector: 'app-consolidated-report',
    templateUrl: '../template/consolidated-report.component.html',
    styleUrls: ['../styles/consolidated-report.component.scss'],
    animations: [routerTransition()],
    providers: [ConsolidatedReportService,
            ToastrService,
            AuthenticationService,CurrencyPipe,CommonService]
} )
export class ConsolidatedReportComponent implements OnInit {
    public currentBrand: string;
    public currentReport: string;    
    public consolidatedReportModelList : Array<ConsolidatedReportModel>;
    public loading = false;    
    public SearchConsolidatedReport : string;
    public key: string; //set default
    public reverse: boolean = false;
    public brandList : Array<any>;
    public currentUserRole : string;
    public paginationModel : PaginationModel;
    constructor( private router: Router,
        private _commonService : CommonService,
        private _currencyPipe : CurrencyPipe,
        private route: ActivatedRoute,
        private titleService: Title,
        private reportService: ConsolidatedReportService,
        private _authenticationService : AuthenticationService,
        private toastr: ToastrService) {        
            this.consolidatedReportModelList = new Array<ConsolidatedReportModel>();
            this.brandList = [];
            this.currentUserRole = '';
            this.paginationModel = new PaginationModel();            
    }

    ngOnInit() {
        this.currentUserRole = sessionStorage.getItem("UserRole");
        this.getBrandList();
        this.route.queryParams.forEach(( params: Params ) => {
            this.currentBrand = params['type'];
            window.scrollTo( 0, 0 );
            this.currentReport = 'Consolidated Report: ' + this.currentBrand ? this.currentBrand : '';
            this.titleService.setTitle( this.currentReport );
            this.paginationModel.CurrentPage = 1;
            this.paginationModel.PerPage = 10;
            this.paginationModel.TotalRecords = 100;
            if(this.currentBrand){
                this.getConsolidatedReports();
            }
        });
    }

    sort(key : any) : void {
        this.key = key;
        this.reverse = !this.reverse;
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

    callMethod(type) : void{
        if(type == 'excel')
        {
            let fileName = "consolidatedReport.xlsx";            
            this._authenticationService.exportFunction(fileName,this.consolidatedReportModelList);
        }        
        else if(type == 'pdf')
        {
            this.toastr.info("Functionaity In Progress");
        }
    }

    getConsolidatedReports(): void {
        this.loading = true;
        this.reportService.getConsolidatedReport(this.paginationModel,this.currentBrand).subscribe(( result: any ) => {
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {                
                this.toastr.success(result.SuccessMessage);
                this.consolidatedReportModelList = [];
                this.consolidatedReportModelList = new Array<ConsolidatedReportModel>();
                this.paginationModel.TotalRecords = result.Data.TotalRecords;
                for(let i=0;i<result.Data.length;i++){
                    let _consolidatedReportModel = new ConsolidatedReportModel();
                    _consolidatedReportModel.SrNo = result.Data[i].SrNo;
                    _consolidatedReportModel.Zone = result.Data[i].Zone ? result.Data[i].Zone : null;
                    _consolidatedReportModel.EmployeeName = result.Data[i].EmployeeName ? result.Data[i].EmployeeName : null;
                    _consolidatedReportModel.PipelineYTDValue = this._currencyPipe.transform(result.Data[i].PipelineYTDValue,'INR',false,'1.0-0');
                    _consolidatedReportModel.PipelineYTDNos = result.Data[i].PipelineYTDNos;
                    _consolidatedReportModel.PercentPipelineToConversion = this._currencyPipe.transform(result.Data[i].PercentPipelineToConversion,'INR',false,'1.0-0');
                    _consolidatedReportModel.PercentEnquiriesToPipeline = this._currencyPipe.transform(result.Data[i].PercentEnquiriesToPipeline,'INR',false,'1.0-0');
                    _consolidatedReportModel.PercentEnquiriesToConversion = this._currencyPipe.transform(result.Data[i].PercentEnquiriesToConversion,'INR',false,'1.0-0');
                    _consolidatedReportModel.LostYTDValue = this._currencyPipe.transform(result.Data[i].LostYTDValue,'INR',false,'1.0-0');
                    _consolidatedReportModel.LostYTDNos = result.Data[i].LostYTDNos;
                    _consolidatedReportModel.EnquiriesYTDValue = this._currencyPipe.transform(result.Data[i].EnquiriesYTDValue,'INR',false,'1.0-0');
                    _consolidatedReportModel.EnquiriesYTDNos = result.Data[i].EnquiriesYTDNos;
                    _consolidatedReportModel.ConversionYTDValue = this._currencyPipe.transform(result.Data[i].ConversionYTDValue,'INR',false,'1.0-0');
                    _consolidatedReportModel.ConversionYTDNos = result.Data[i].ConversionYTDNos;
                    this.consolidatedReportModelList.push(_consolidatedReportModel);
                }                
            }
            this.loading = false;
        });        
    }
}
