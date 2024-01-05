import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BrandWiseReportService } from '../service/brand-wise-report.service';
import { ToastrService } from 'toastr-ng2';
import { BrandWiseReportModel } from '../model/brand-wise-report.model';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { CommonService } from '../../../../shared/services/common.service';
import { CurrencyPipe } from '@angular/common';
import { PaginationModel } from '../../../../shared/model/pagination.model';

@Component( {
    selector: 'app-brand-wise-report',
    templateUrl: '../template/brand-wise-report.component.html',
    styleUrls: ['../styles/brand-wise-report.component.scss'],
    animations: [routerTransition()],
    providers: [BrandWiseReportService,ToastrService,AuthenticationService,CommonService,CurrencyPipe]
})
export class BrandWiseReportComponent implements OnInit {
    public currentBrand : string;    
    public currentReport : string;    
    public brandWiseReportModelList : Array<BrandWiseReportModel>;
    public brandList : Array<string>;
    public loading = false;
    public p : any;
    public searchBrandwiseReport : string;
    public key: string; //set default
    public reverse: boolean = false;    
    public paginationModel : PaginationModel;      
    public currentUserRole : string;    
    constructor( private router: Router,
        private _currencyPipe : CurrencyPipe,
        private route: ActivatedRoute,
        private titleService: Title,
        private reportService: BrandWiseReportService,
        private _authenticationService : AuthenticationService,
        private _commonService : CommonService,
        private toastr: ToastrService ) {                    
        this.brandWiseReportModelList = new Array<BrandWiseReportModel>();    
        this.paginationModel = new PaginationModel();   
        this.currentUserRole = '';        
    }

    ngOnInit() {  
        this.currentUserRole = sessionStorage.getItem("UserRole");
        this.getBrandList();                              
            this.route.queryParams.forEach(( params: Params ) => {
                this.currentBrand = params['type'];                
                window.scrollTo( 0, 0 );
                this.currentReport = 'BrandWise Report: ' + this.currentBrand ? this.currentBrand : '';
                this.titleService.setTitle(this.currentReport);
                this.paginationModel.TotalRecords = 500;
                this.paginationModel.CurrentPage = 1;
                this.paginationModel.PerPage = 10;
                if(this.currentBrand){
                    this.getBrandWiseReports();
                }
            });
    }

    callMethod(type) : void{
        if(type == 'excel')
        {
            let fileName = "BrandWiseReport.xlsx";            
            let data : any = this.brandWiseReportModelList;
            this._authenticationService.exportFunction(fileName,data);
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

    getBrandWiseReports(): void {
        this.loading = true;
        this.reportService.getBrandWiseReports(this.paginationModel,this.currentBrand).subscribe(( result: any ) => {            
            this.brandWiseReportModelList = [];
            this.brandWiseReportModelList = new Array<BrandWiseReportModel>();
            if ( !result ) {
                this.toastr.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this.toastr.error(result.ErrorMessage);
            } else {
                this.toastr.success(result.SuccessMessage);
                this.paginationModel.TotalRecords = result.Data.TotalRecords;
                for(let i=0;i<result.Data.length;i++){
                    let _brandWiseReportModel = new BrandWiseReportModel();
                    _brandWiseReportModel.SrNo = result.Data[i].SrNo ? result.Data[i].SrNo : null;
                    _brandWiseReportModel.Zone = result.Data[i].Zone ? result.Data[i].Zone : null;
                    _brandWiseReportModel.EmployeeName = result.Data[i].EmployeeName ? result.Data[i].EmployeeName : null;

                    if(this.currentBrand == 'Hindware'){
                        _brandWiseReportModel.VirtualState = result.Data[i].VirtualState ? result.Data[i].VirtualState : '0';

                        _brandWiseReportModel.HWItalianValue = result.Data[i].HWItalianValue ? result.Data[i].HWItalianValue : '0'
                        _brandWiseReportModel.HWItalianValue = this._currencyPipe.transform(_brandWiseReportModel.HWItalianValue,'INR',false,'1.0-0');

                        _brandWiseReportModel.HWFaucetsValue = result.Data[i].HWFaucetsValue ? result.Data[i].HWFaucetsValue : '0';
                        _brandWiseReportModel.HWFaucetsValue = this._currencyPipe.transform(_brandWiseReportModel.HWFaucetsValue,'INR',false,'1.0-0');

                        _brandWiseReportModel.PVCCisternsValue = result.Data[i].PVCCisternsValue ? result.Data[i].PVCCisternsValue : '0'
                        _brandWiseReportModel.PVCCisternsValue = this._currencyPipe.transform(_brandWiseReportModel.PVCCisternsValue,'INR',false,'1.0-0');

                        _brandWiseReportModel.ConcealoValue = result.Data[i].ConcealoValue ? result.Data[i].ConcealoValue : '0';
                        _brandWiseReportModel.ConcealoValue = this._currencyPipe.transform(_brandWiseReportModel.ConcealoValue,'INR',false,'1.0-0');
                    }

                    if(this.currentBrand == 'Lifestyle'){
                        _brandWiseReportModel.QueoSwValue = result.Data[i].QueoSwValue ? result.Data[i].QueoSwValue : '0';
                        _brandWiseReportModel.QueoSwValue = this._currencyPipe.transform(_brandWiseReportModel.QueoSwValue,'INR',false,'1.0-0');

                        _brandWiseReportModel.QueoFaucetsValue = result.Data[i].QueoFaucetsValue ? result.Data[i].QueoFaucetsValue : '0';                        
                        _brandWiseReportModel.QueoFaucetsValue = this._currencyPipe.transform(_brandWiseReportModel.QueoFaucetsValue,'INR',false,'1.0-0');

                        _brandWiseReportModel.AmoreValue = result.Data[i].AmoreValue ? result.Data[i].AmoreValue : '0';
                        _brandWiseReportModel.AmoreValue = this._currencyPipe.transform(_brandWiseReportModel.AmoreValue,'INR',false,'1.0-0');
                    }
                    
                    if(this.currentBrand == 'Benelave'){
                        _brandWiseReportModel.BenelaveSwValue = result.Data[i].BenelaveSwValue ? result.Data[i].BenelaveSwValue : '0';
                        _brandWiseReportModel.BenelaveSwValue = this._currencyPipe.transform(_brandWiseReportModel.BenelaveSwValue,'INR',false,'1.0-0');

                        _brandWiseReportModel.BenelaveFaucetsValue = result.Data[i].BenelaveFaucetsValue ? result.Data[i].BenelaveFaucetsValue : '0';
                        _brandWiseReportModel.BenelaveFaucetsValue = this._currencyPipe.transform(_brandWiseReportModel.BenelaveFaucetsValue,'INR',false,'1.0-0');
                    }                    

                    _brandWiseReportModel.HotValue = result.Data[i].HotValue ? result.Data[i].HotValue : '0'
                    _brandWiseReportModel.HotValue = this._currencyPipe.transform(_brandWiseReportModel.HotValue,'INR',false,'1.0-0');

                    _brandWiseReportModel.WarmValue = result.Data[i].WarmValue ? result.Data[i].WarmValue : '0'
                    _brandWiseReportModel.WarmValue = this._currencyPipe.transform(_brandWiseReportModel.WarmValue,'INR',false,'1.0-0');

                    _brandWiseReportModel.ColdValue = result.Data[i].ColdValue ? result.Data[i].ColdValue : '0'
                    _brandWiseReportModel.ColdValue = this._currencyPipe.transform(_brandWiseReportModel.ColdValue,'INR',false,'1.0-0');

                    _brandWiseReportModel.BudgetaryValue = result.Data[i].BudgetaryValue ? result.Data[i].BudgetaryValue : '0';
                    _brandWiseReportModel.BudgetaryValue = this._currencyPipe.transform(_brandWiseReportModel.BudgetaryValue,'INR',false,'1.0-0');

                    _brandWiseReportModel.TotalValue = result.Data[i].TotalValue ? result.Data[i].TotalValue : '0';                    
                    _brandWiseReportModel.TotalValue = this._currencyPipe.transform(_brandWiseReportModel.TotalValue,'INR',false,'1.0-0');

                    this.brandWiseReportModelList.push(_brandWiseReportModel);
                }                                                
            }
            this.loading = false;
        });
    }
}