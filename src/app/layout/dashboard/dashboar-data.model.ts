export class DashboarDataModel {
    public AccountsNoCount : number;
    public EnquiryNoCount : number;
    public ConversionNoCount : number;
    public OrderLostNoCount : number;
    public PipelineNoCount : number;        
    
    public EnquiryValueCount : number;
    public ConversionValueCount : number;
    public OrderLostValueCount : number;
    public PipelineValueCount : number;        
    
    public DoughnutChartLabels: string[];
    public DoughnutChartData: number[];
    public DoughnutChartType: string = 'doughnut';    
    public BarChartOptions:any = {
        scaleShowVerticalLines: true,
        responsive: true
    };
    public BarChartLabels : Array<any>;
    public BarChartType : string = 'bar';
    public BarChartLegend : boolean = true;
    public BarChartConversionData : Array<any>;
    public BarChartOrderLostData : Array<any>; 

    public BarChartData:any[] = [];

    public AccountDataColumnList : Array<any> = ['Accounts','Tagged','Pending to tag','Total'];
    public AccountDataRowList : Array<any>;

    public GeneraDataColumnList : Array<any> = ['','No of Projects','Value(In Lacs)'];
    public EnquiryDataRowList : Array<any> = [];
    public ConversionDataRowList : Array<any> = [];
    public OrderLostDataRowList : Array<any> = [];
    public PipelineDataRowList : Array<any> = [];

    public PipelineFunnelData : Array<any> = [];
    public PipelineFunnelLabels : Array<any> = ['Enquiry','Pipeline','Conversion'];
    public PipelineFunnelLegend : boolean = true;
    public PolarAreaChartType: string = 'polarArea';
    
}