import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../constants/constants';
import { BrandModel } from '../model/brand.model';
import 'rxjs/Rx';

@Injectable()
export class CommonService {
    private getBrandListUrl: string;
    private getMonthsListUrl: string;    
    private loggedInUserRole : string;
    private loggedInEmployeeId : string;
    private getUsersListUrl : string;
    public isSidebarInActive : boolean = false;

    constructor( private http: Http ) {
        this.getBrandListUrl = Constants.ServerUrl + 'Dashboard/fetchBrandNames';
        this.getMonthsListUrl = Constants.ServerUrl + 'Commmonfunctions/getUptoMonthList';
        this.getUsersListUrl =  Constants.ServerUrl + 'Commmonfunctions/fetchEmpList';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");        
        this.loggedInUserRole = sessionStorage.getItem("UserRole");        
    }

    /* get all roles info */
    public getBrandList(): any {
        let timeStamp = +new Date(); 
        let url = this.getBrandListUrl+ '/'+ timeStamp;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole}];                    
        let headers = new Headers({ 'Content-Type': 'application/json','Cache-Control':'no-cache','Pragma':'no-cache' });
        let options = new RequestOptions({ headers: headers });    
        return this.http.post(url, data, options)
        .map(res => this.extractData(res))
        .share();
    }    

    public getUsersList(): any {       
        let timeStamp = +new Date(); 
        let url = this.getUsersListUrl+ '/'+ timeStamp;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole}]; 
        let headers = new Headers({ 'Content-Type': 'application/json','Cache-Control':'no-cache','Pragma':'no-cache' });
        let options = new RequestOptions({ headers: headers });    
        return this.http.post(url, data, options)
        .map(res => this.extractData(res))
        .share();
    }    

    public getMonthsList(): any {
        let timeStamp = +new Date(); 
        let year = '';
        let url = this.getMonthsListUrl+ '/'+ timeStamp;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole},
                    {"year":year}];                    
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