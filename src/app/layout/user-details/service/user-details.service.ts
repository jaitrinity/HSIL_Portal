import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../../../shared/constants/constants';
import 'rxjs/Rx';

@Injectable()
export class UserDetailsService {
    private getUserDetailsUrl: string;
    private loggedInEmployeeId : string;
    private loggedInUserRole : string;
    
    constructor( private http: Http ) {        
        this.getUserDetailsUrl = Constants.ServerUrl + 'dashboard/getUserDetails';        
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }

    public getUserDetails(): Observable<any> {
        let url = this.getUserDetailsUrl;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole}];
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