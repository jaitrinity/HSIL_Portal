export class ReviewFormatWeekwiseReportModel{
    public SrNo : number;
    public UserName : string;
    public TerritoryCode : string;
    public DealerClassification : string;
    public Brand: string;
    public Importance: string;
    public NoOfCallsMadeInTheWeek : number = 0;
    public NoOfEnquiryThisWeek : number = 0;
    public EnquiryValueThisWeek: number = 0.00;
    public PercentChangeFromLastWeekEnquiry : number = 0;

    public NoOfPipelineThisWeek : number = 0;
    public PipelineValueThisWeek : number = 0.00;
    public PercentageChangeFromLastWeekPipeline : number = 0;

    public TotalNoOfOpenPipeline : number = 0;
    public TotalValueOfOpenPipeline : number = 0.00;
    public PercentageChangeFromLastWeekOpenPipeline : number = 0;

    public ConversionValueYTD : number = 0.00;
    public PercentageChangeFromLastWeekConversionValueYTD : number = 0;
    public BillingDoneYTD : number;
    public PercentageChangeFromLastWeekBillingDoneYTD : number;
}