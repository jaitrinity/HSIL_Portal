import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../../../shared/constants/constants';
import 'rxjs/Rx';

@Injectable()
export class ChangePasswordService {
    private changePasswordUrl: string;
    private loggedInEmployeeId : string;
    private loggedInUserRole : string;
    
    constructor( private http: Http ) {        
        this.changePasswordUrl = Constants.ServerUrl + 'dashboard/changeUserPassword';        
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }

    public changePassword(newPassword): Observable<any> {
        let url = this.changePasswordUrl;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole},
                    {"NewPassword":newPassword}];
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