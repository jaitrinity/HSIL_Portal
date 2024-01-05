import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Constants } from 'app/shared/constants/constants';

@Injectable()
export class QuotationManagementService {
    private quotationManagementUrl: string;
    private loggedInEmployeeId : string;
    private loggedInUserRole : string;

    constructor( private http: Http ) {                
        // this.getQuotationManagementUrl = Constants.serviceUrl + 'QuotationManagement/fetchProjectReportUsingStage';
        this.quotationManagementUrl = Constants.serviceUrl;
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }

    public getProjectReportDetails(currentQuotationType : any){
        // let url = this.getQuotationManagementUrl;
        let url = this.quotationManagementUrl+"viewProjectDetails.php";
        // let data = [
        //     {"LoggedInEmployeeId":this.loggedInEmployeeId},
        //             {"LoggedInUserRole":this.loggedInUserRole},
        //             {"currentQuotationType":currentQuotationType},
        // ]
        let data = {"empid":this.loggedInEmployeeId};
        // console.log(data); 
            
        return this.http.post(url, data)
        .map(res =>  this.extractData(res)
         )
        .share();

    }



    private extractData( res: Response ) {
        // console.log( "Response:",res );
        let body = res.json();
        return body || {};
    }

    public getDataByAnyPostRequest(apiName : string, jsonData : any){
        let url = this.quotationManagementUrl+apiName+".php";
        return this.http.post(url, jsonData)
        .map(res =>  this.extractData(res)
         )
        .share();
    }

    public getAllListBySelectType(jsonData:any,selectType:string){
        let url = this.quotationManagementUrl+"getAllList.php?selectType="+selectType;
        return this.http.post(url, jsonData)
        .map(res =>  this.extractData(res)
         )
        .share();
    }

}