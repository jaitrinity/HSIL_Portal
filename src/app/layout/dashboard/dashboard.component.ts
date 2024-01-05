import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Title }     from '@angular/platform-browser';
import { DashboardService } from './dashboard.service';
import { ToastrService } from 'toastr-ng2';
import { DashboarDataModel } from './dashboar-data.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()],
    providers: [DashboardService,ToastrService,DecimalPipe]
})
export class DashboardComponent implements OnInit { 
    public loading : Boolean;
    closeResult: string;
    public dashboarDataModel : DashboarDataModel;
    public currentHeader : String;    
    public currentDataColumnList : Array<any>;
    public currentDataRowList : Array<any>;
    public currentValueCount : any;
    public currentNoCount : any;
    public chart : any;
    
    public barChartColors:Array<any> = [
        { // green
          backgroundColor: 'rgb(91,181,91)',
          borderColor: 'rgb(91,181,91)',
          pointBackgroundColor: 'rgb(91,181,91)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(91,181,91)'
        },
        { // red
          backgroundColor: 'rgb(255,121,122)',
          borderColor: 'rgb(255,121,122)',
          pointBackgroundColor: 'rgb(255,,121,122)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255,121,122)'
        }
      ];
      public pipelineChartColors:Array<any> = [
        {
            backgroundColor: [
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(81, 163, 81, 0.5)"
              ],
            borderColor: [
                "#ffffff",
                "#ffffff",
                "#ffffff"
              ],
            pointBackgroundColor: [                
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(81, 163, 81, 0.5)"
              ],
            pointBorderColor: [                
                "#ffffff",
                "#ffffff",
                "#ffffff"
              ],
            pointHoverBackgroundColor: [                
                "#36A2EB",
                "#FFCE56",
                "#51A351"
              ],
            pointHoverBorderColor: [                
                "#ffffff",
                "#ffffff",
                "#ffffff"
              ]
        }
      ];

    constructor(private titleService: Title,
        private _dashboardService : DashboardService,
        private modalService: NgbModal,
        private _currencyPipe : DecimalPipe,
        private _toastrService : ToastrService) {
            this.dashboarDataModel = new DashboarDataModel();              
            this.dashboarDataModel.AccountDataRowList = [];
            this.dashboarDataModel.ConversionDataRowList = [];
            this.dashboarDataModel.PipelineDataRowList = [];
            this.dashboarDataModel.OrderLostDataRowList = [];
            this.dashboarDataModel.EnquiryDataRowList = [];
            this.currentHeader = '';                                                
            this.loading = false;
            this.currentValueCount = 0;  
            this.currentNoCount = 0;
    }

    ngOnInit() {    
        this.titleService.setTitle( 'HSIL: Dashboard' );  
        this.getDashboardDetails();               
        var ctx = document.getElementById("chart-area");              
    }                

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

    openInformationModel(type: string){
        if(type == 'Account'){
            this.currentHeader = "Account Information";
            this.currentDataColumnList = this.dashboarDataModel.AccountDataColumnList;
            this.currentDataRowList = this.dashboarDataModel.AccountDataRowList;            
            this.currentValueCount = this._currencyPipe.transform(this.dashboarDataModel.AccountsNoCount,'1.0-0');
        }else if(type == 'Pipeline'){
            this.currentHeader = "Pipeline Information";
            this.currentDataColumnList = this.dashboarDataModel.GeneraDataColumnList;
            this.currentDataRowList = this.dashboarDataModel.PipelineDataRowList;
            this.currentValueCount = this._currencyPipe.transform(this.dashboarDataModel.PipelineValueCount,'1.0-0');
            this.currentNoCount = this._currencyPipe.transform(this.dashboarDataModel.PipelineNoCount,'1.0-0');
        } else if(type == 'Conversion'){
            this.currentHeader = "Conversion Information";
            this.currentDataColumnList = this.dashboarDataModel.GeneraDataColumnList;
            this.currentDataRowList = this.dashboarDataModel.ConversionDataRowList;
            this.currentValueCount = this._currencyPipe.transform(this.dashboarDataModel.ConversionValueCount,'1.0-0');
            this.currentNoCount = this._currencyPipe.transform(this.dashboarDataModel.ConversionNoCount,'1.0-0');
        } else if(type == 'Enquiry'){
            this.currentHeader = "Enquiry Information";
            this.currentDataColumnList = this.dashboarDataModel.GeneraDataColumnList;
            this.currentDataRowList = this.dashboarDataModel.EnquiryDataRowList;
            this.currentValueCount = this._currencyPipe.transform(this.dashboarDataModel.EnquiryValueCount,'1.0-0');
            this.currentNoCount = this._currencyPipe.transform(this.dashboarDataModel.EnquiryNoCount,'1.0-0');
        }else if(type == 'Order Lost'){
            this.currentHeader = "Order Lost Information";
            this.currentDataColumnList = this.dashboarDataModel.GeneraDataColumnList;
            this.currentDataRowList = this.dashboarDataModel.OrderLostDataRowList;
            this.currentValueCount = this._currencyPipe.transform(this.dashboarDataModel.OrderLostValueCount,'1.0-0');
            this.currentNoCount = this._currencyPipe.transform(this.dashboarDataModel.OrderLostNoCount,'1.0-0');
        }
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

    getDashboardDetails(){
        this.loading = true;
        this._dashboardService.getDashboardDetails().subscribe((result: any) => {
            this.loading = false;
            if(result.Error)
            {   
                this._toastrService.error(result.ErrorMessage);
            }
            else
            {                
                this._toastrService.success(result.SuccessMessage);                  

                let item = [result.PipelineFunnelLabels.Enquiry,
                    result.PipelineFunnelLabels.Pipeline,
                    result.PipelineFunnelLabels.Conversion]
                this.dashboarDataModel.PipelineFunnelData.push(item);

                this.dashboarDataModel.DoughnutChartLabels = result.DoughnutChartLabels;
                this.dashboarDataModel.DoughnutChartData = result.DoughnutChartData;
                
                this.dashboarDataModel.BarChartConversionData = result.BarChartConversionData;
                this.dashboarDataModel.BarChartLabels = result.BarChartLabels;
                this.dashboarDataModel.BarChartOrderLostData = result.BarChartOrderLostData;

                this.dashboarDataModel.BarChartData = [
                    {data: this.dashboarDataModel.BarChartConversionData, label: 'Conversion'},
                    {data: this.dashboarDataModel.BarChartOrderLostData, label: 'Lost'}
                ];
                
                this.dashboarDataModel.AccountsNoCount = 0;                 
                for(let i=0;i<result.AccountInformationData.Data.length;i++){
                    let item = [result.AccountInformationData.Data[i].Accounts,
                                result.AccountInformationData.Data[i].Tagged,
                                result.AccountInformationData.Data[i].PendingToTag,
                                result.AccountInformationData.Data[i].Total];                    
                    this.dashboarDataModel.AccountsNoCount = this.dashboarDataModel.AccountsNoCount + parseInt(result.AccountInformationData.Data[i].Total);                    
                    this.dashboarDataModel.AccountDataRowList.push(item);
                }

                this.dashboarDataModel.ConversionNoCount = 0;
                this.dashboarDataModel.ConversionValueCount = 0;                
                for(let i=0;i<result.ConversionInformationData.length;i++){                    
                    this.dashboarDataModel.ConversionNoCount = result.ConversionInformationData[i].TypeNo;//this.dashboarDataModel.ConversionNoCount + parseInt(result.ConversionInformationData[i].TypeNo);
                    this.dashboarDataModel.ConversionValueCount = this.dashboarDataModel.ConversionValueCount + parseInt(result.ConversionInformationData[i].TotalValue);
                    let totalValue : any = this._currencyPipe.transform(result.ConversionInformationData[i].TotalValue,'1.2-2'); 
                    let item = [result.ConversionInformationData[i].TypeName,
                                result.ConversionInformationData[i].TypeNo,totalValue];                    
                    this.dashboarDataModel.ConversionDataRowList.push(item);
                }                

                this.dashboarDataModel.PipelineNoCount = result.PipelineInformationData[4].TypeNo;
                this.dashboarDataModel.PipelineValueCount = 0;
                for(let i=0;i<result.PipelineInformationData.length;i++){
                    //this.dashboarDataModel.PipelineNoCount = result.PipelineInformationData[i].TypeNo;//this.dashboarDataModel.PipelineNoCount + parseInt(result.PipelineInformationData[i].TypeNo);
                    this.dashboarDataModel.PipelineValueCount = this.dashboarDataModel.PipelineValueCount + parseInt(result.PipelineInformationData[i].TotalValue);
                    let totalValue : any = this._currencyPipe.transform(result.PipelineInformationData[i].TotalValue,'1.2-2'); 
                    let item = [result.PipelineInformationData[i].TypeName,
                    result.PipelineInformationData[i].TypeNo,totalValue];                    
                    this.dashboarDataModel.PipelineDataRowList.push(item);
                }

                this.dashboarDataModel.OrderLostNoCount = 0;
                this.dashboarDataModel.OrderLostValueCount = 0;
                for(let i=0;i<result.LostInformationData.length;i++){
                    this.dashboarDataModel.OrderLostNoCount = result.LostInformationData[i].TypeNo;//this.dashboarDataModel.OrderLostNoCount + parseInt(result.LostInformationData[i].TypeNo);
                    this.dashboarDataModel.OrderLostValueCount = this.dashboarDataModel.OrderLostNoCount + parseInt(result.LostInformationData[i].TotalValue);
                    let totalValue : any = this._currencyPipe.transform(result.LostInformationData[i].TotalValue,'1.2-2'); 
                    let item = [result.LostInformationData[i].TypeName,
                    result.LostInformationData[i].TypeNo,totalValue];                    
                    this.dashboarDataModel.OrderLostDataRowList.push(item);
                }
                
                this.dashboarDataModel.EnquiryNoCount = 0;
                this.dashboarDataModel.EnquiryValueCount = 0;
                for(let i=0;i<result.EnquiryInformationData.length;i++){
                    this.dashboarDataModel.EnquiryNoCount = result.EnquiryInformationData[i].TypeNo;//this.dashboarDataModel.EnquiryNoCount + parseInt(result.EnquiryInformationData[i].TypeNo);
                    this.dashboarDataModel.EnquiryValueCount = this.dashboarDataModel.EnquiryValueCount + parseInt(result.EnquiryInformationData[i].TotalValue);
                    let totalValue : any = this._currencyPipe.transform(result.EnquiryInformationData[i].TotalValue,'1.2-2'); 
                    let item = [result.EnquiryInformationData[i].TypeName,
                    result.EnquiryInformationData[i].TypeNo,totalValue];                    
                    this.dashboarDataModel.EnquiryDataRowList.push(item);
                }
            }
        });
    }

    checkArrayContainAllZero(arrayElement : Array<any>){
        return arrayElement ? arrayElement.every(element => element == 0 || element == '0') : true;
    }
    
}