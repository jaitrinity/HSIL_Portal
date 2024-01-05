import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SegmentWiseReportService } from '../service/segment-wise-report.service';
import { ToastrService } from 'toastr-ng2';
import { SegmentWiseReportModel } from '../model/Segment-wise-report.model';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CurrencyPipe } from '@angular/common';
import { PaginationModel } from '../../../../shared/model/pagination.model';

@Component( {
    selector: 'app-segment-wise-report',
    templateUrl: '../template/segment-wise-report.component.html',
    styleUrls: ['../styles/segment-wise-report.component.scss'],
    animations: [routerTransition()],
    providers: [SegmentWiseReportService,ToastrService,AuthenticationService,CurrencyPipe]
} )
export class SegmentWiseReportComponent implements OnInit {
    public currentSegment: string;  
    public currentReport : string;    
    public segmentWiseReportModelList : Array<SegmentWiseReportModel>;
    public loading = false;
    public paginationModel : PaginationModel;
    public searchYTDConsolidatedReport : string;
    public key: string; //set default
    public reverse: boolean = false;  
    public currentUserRole : string; 
    constructor( private router: Router,
        private _currencyPipe : CurrencyPipe,
        private route: ActivatedRoute,
        private titleService: Title,
        private reportService: SegmentWiseReportService,
        private _authenticationService : AuthenticationService,
        private toastr: ToastrService) {    
            this.segmentWiseReportModelList = new Array<SegmentWiseReportModel>();
            this.currentUserRole = '';
            this.paginationModel = new PaginationModel();            
    }

    ngOnInit() {        
        this.titleService.setTitle(this.currentReport);
        this.currentUserRole = sessionStorage.getItem("UserRole");
        this.paginationModel.CurrentPage = 1;
        this.paginationModel.TotalRecords = 100;
        this.paginationModel.PerPage = 10;
        this.getSegmentwiseReport();        
    }

    sort(key : any) : void {
        this.key = key;
        this.reverse = !this.reverse;
    }
    
    callMethod(type) : void{
        if(type == 'excel')
        {
            let fileName = "SegmentWiseReport.xlsx";            
            this._authenticationService.exportFunction(fileName,this.segmentWiseReportModelList);
        }        
        else if(type == 'pdf')
        {
            this.toastr.info("Functionaity In Progress");
        }
    }

    getSegmentwiseReport(): void {
        this.loading = true;
        this.reportService.getSegmentWiseReports(this.paginationModel).subscribe(( result: any ) => {
            this.segmentWiseReportModelList = [];
            this.segmentWiseReportModelList = new Array<SegmentWiseReportModel>();            
            this.loading = false;
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {                             
                this.paginationModel.TotalRecords = result.Data.TotalRecords;
                for(let i=0;i<result.Data.length;i++){
                    let _segmentWiseReportModel = new SegmentWiseReportModel();
                    _segmentWiseReportModel.SrNo = result.Data[i].SrNo;
                    _segmentWiseReportModel.Zone = result.Data[i].Zone ? result.Data[i].Zone : null;
                    _segmentWiseReportModel.EmployeeName = result.Data[i].EmployeeName ? result.Data[i].EmployeeName : null;
                    _segmentWiseReportModel.ResidentialNo = result.Data[i].ResidentialNo;
                    _segmentWiseReportModel.ResidentialValue = this._currencyPipe.transform(result.Data[i].ResidentialValue,'INR',false,'1.0-0');
                    _segmentWiseReportModel.CommercialNo = result.Data[i].CommercialNo;
                    _segmentWiseReportModel.CommercialValue = this._currencyPipe.transform(result.Data[i].CommercialValue,'INR',false,'1.0-0');
                    _segmentWiseReportModel.GovernmentNo = result.Data[i].GovernmentNo;
                    _segmentWiseReportModel.GovernmentValue = this._currencyPipe.transform(result.Data[i].GovernmentValue,'INR',false,'1.0-0');
                    _segmentWiseReportModel.HospitalityNo = result.Data[i].HospitalityNo;
                    _segmentWiseReportModel.HospitalityValue = this._currencyPipe.transform(result.Data[i].HospitalityValue,'INR',false,'1.0-0');
                    this.segmentWiseReportModelList.push(_segmentWiseReportModel);
                }
                this.toastr.success(result.SuccessMessage);
            }
        });
    }
}