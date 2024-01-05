import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../../shared/constants/constants';
import 'rxjs/Rx';

@Injectable()
export class DashboardService {
    private getDashboardDetailsUrl: string;
    private loggedInEmployeeId : string;
    private loggedInUserRole : string;
    
    constructor( private http: Http ) {        
        this.getDashboardDetailsUrl = Constants.ServerUrl + 'dashboard/fetchDashboardContent';        
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }

    public getDashboardDetails(): Observable<any> {
        let selectedUser = sessionStorage.getItem("selectedUser") ? sessionStorage.getItem("selectedUser") : null;
        let url = this.getDashboardDetailsUrl;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"selectedUser":selectedUser},
                    {"selectedUserID":selectedUser},
                    {"LoggedInUserRole":this.loggedInUserRole},
                    ];
        console.log(data);            
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