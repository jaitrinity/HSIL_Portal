import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../../../../shared/constants/constants';
import 'rxjs/Rx';

@Injectable()
export class UserPerfromanceReportService {
    private getReportsUrl: string;
    private getUserPerformanceReportUserListUrl : string;
    private getFinancialYearListUrl : string;    
    private loggedInUserRole : string;
    private loggedInEmployeeId : string;

    constructor( private http: Http ) {
        this.getReportsUrl = Constants.ServerUrl + 'UserPerformanceReport/fetchUserPerformanceData';
        this.getUserPerformanceReportUserListUrl = Constants.ServerUrl + 'UserPerformanceReport/getUserPerformanceReportUserList';
        this.getFinancialYearListUrl = Constants.ServerUrl + 'Commmonfunctions/getYearDetails';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");        
        this.loggedInUserRole = sessionStorage.getItem("UserRole");        
    }

    public getUserPerfromanceReport(brandName : string,currentFinancialYear : string,currentUser : string): Observable<any> {         
        let url = this.getReportsUrl;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole},
                    {"BrandName":brandName},
                    {"financialYear":currentFinancialYear},
                    {"UserId":currentUser}];                    
        let headers = new Headers({ 'Content-Type': 'application/json','Cache-Control':'no-cache','Pragma':'no-cache' });
        let options = new RequestOptions({ headers: headers });    
        return this.http.post(url, data, options)
        .map(res => this.extractData(res))
        .share();
    }
    
    public getFinancialYearList(): Observable<any> {         
        let url = this.getFinancialYearListUrl;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole}];                    
        let headers = new Headers({ 'Content-Type': 'application/json','Cache-Control':'no-cache','Pragma':'no-cache' });
        let options = new RequestOptions({ headers: headers });    
        return this.http.post(url, data, options)
        .map(res => this.extractData(res))
        .share();
    }    

    public getUserPerformanceReportUserList(brandName : string): Observable<any> {        
        let url = this.getUserPerformanceReportUserListUrl;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole},
                    {"BrandName":brandName}];                    
        let headers = new Headers({ 'Content-Type': 'application/json','Cache-Control':'no-cache','Pragma':'no-cache' });
        let options = new RequestOptions({ headers: headers });    
        return this.http.post(url, data, options)
        .map(res => this.extractData(res))
        .share();
    }    

    private extractData( res: Response ) {
        console.log( res );
        let body = res.json();
        return body || {};
    }
}