import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../../../../shared/constants/constants';
import 'rxjs/Rx';
import { PaginationModel } from '../../../../shared/model/pagination.model';

@Injectable()
export class ReviewFormatReportService {
    private getReviewFormatReportUrl: string;
    private getReviewFormatCurrentWeekReportUrl: string;
    private getReviewFormatLastWeekReportUrl: string;
    private loggedInEmployeeId : string;
    private loggedInUserRole : string;
    private getSegmentDetailsUrl : string;
    private dataString : any;
    constructor( private http: Http ) {                
        this.getReviewFormatReportUrl = Constants.ServerUrl + 'ReviewFormatReport/fetchReviewFormatReport';
        this.getReviewFormatLastWeekReportUrl = Constants.ServerUrl + 'ReviewFormatReport/fetchReviewFormatWeekWiseReport';
        this.getSegmentDetailsUrl = Constants.ServerUrl + 'Dashboard/getSegmentDetails';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }



    public getReviewFormatReportDetails(currentMonth : string,_paginationModel: PaginationModel): any {
        let url = this.getReviewFormatReportUrl;
        //let selectedUser = sessionStorage.getItem("selectedUser") ? sessionStorage.getItem("selectedUser") : null;
        let selectUserId = sessionStorage.getItem("selectedUser");
        this.dataString = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
        {"LoggedInUserRole":this.loggedInUserRole},
        {"CurrentPage":_paginationModel.CurrentPage},
        {"PerPage":_paginationModel.PerPage},
        {"currentMonth":currentMonth},
        {"selectedUserID": selectUserId}];

        let headers = null;
        let excel = false;
        console.log(this.dataString);
        if(excel){
            headers = new Headers({ 'Content-Type': 'application/json','accept':'application/vnd.ms-excel','Cache-Control':'no-cache','Pragma':'no-cache' });
        }
        else{
            headers = new Headers({ 'Content-Type': 'application/json','Cache-Control':'no-cache','Pragma':'no-cache' });
        }
        let options = new RequestOptions({ headers: headers });    
        return this.http.post(url, this.dataString, options)
        .map(res =>  this.extractData(res)
         )
        .share();
    }

    getSegmentDetails(){
        let url = this.getSegmentDetailsUrl;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole}];
        let headers = new Headers({ 'Content-Type': 'application/json','Cache-Control':'no-cache','Pragma':'no-cache' });        
        let options = new RequestOptions({ headers: headers });    
        return this.http.post(url, data, options)
        .map(res =>  this.extractData(res)
         )
        .share();
    }

    public getReviewFormatWeekwiseReport(currentMonthName : string,lastMonthName : string,brands,segment,excel,importance : string,weekType : number,_paginationModel: PaginationModel): any {
        let url = this.getReviewFormatLastWeekReportUrl;
        console.log(excel);
        let selectedUser = sessionStorage.getItem("selectedUser") ? sessionStorage.getItem("selectedUser") : null;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole},
                    {"CurrentPage":_paginationModel.CurrentPage},
                    {"selectedUserID": selectedUser},
                    {"WeekType":weekType},
                    {"excel":excel? 1 : 0},
                    {"brands":brands},
                    {"segment":segment},                    
                    {"currentMonthName":currentMonthName},
                    {"lastMonthName":lastMonthName},
                    {"importance":importance},                    
                    {"PerPage":_paginationModel.PerPage}];
        let headers = null;
        //let excel = false;
        // if(excel){
        //     headers = new Headers({ 'Content-Type': 'application/json','accept':'application/vnd.ms-excel','Cache-Control':'no-cache','Pragma':'no-cache' });
        // }
        // else{
            headers = new Headers({ 'Content-Type': 'application/json','Cache-Control':'no-cache','Pragma':'no-cache' });
        //}
        let options = new RequestOptions({ headers: headers });    
        return this.http.post(url, data, options)
        .map(res =>  this.extractData(res)
         )
        .share();
    }    

    private extractData( res: Response ) {
        console.log( "Response:",res );
        let body = res.json();
        return body || {};
    }
    
    downloadFile(data: any){
        var blob = new Blob([data], { type: 'application/vnd.ms-excel' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    }
}