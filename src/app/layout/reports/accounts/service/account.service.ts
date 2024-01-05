import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../../../../shared/constants/constants';
import 'rxjs/Rx';
import { PaginationModel } from '../../../../shared/model/pagination.model';

@Injectable()
export class AccountsService {
    private getAccountsDetailsUrl: string;
    private getClientsUrl: string;
    private getAccountTypeListUrl : string;
    private loggedInEmployeeId : string;
    private loggedInUserRole : string;
    constructor( private http: Http ) {
        this.getAccountsDetailsUrl = Constants.ServerUrl + 'AccountReport/fetchAccountReport';
        this.getAccountTypeListUrl = Constants.ServerUrl + 'AccountReport/fetchAccountType';
        this.getClientsUrl = Constants.ServerUrl + 'AccountReport/getClients';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }

    public getAccountTypeList() {
        let selectedUser = sessionStorage.getItem("selectedUser") ? sessionStorage.getItem("selectedUser") : null;
        let url = this.getAccountTypeListUrl;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"selectedUser":selectedUser},
                    {"LoggedInUserRole":this.loggedInUserRole}];
        let headers = new Headers({ 'Content-Type': 'application/json','Cache-Control':'no-cache','Pragma':'no-cache' });
        let options = new RequestOptions({ headers: headers });    
        return this.http.post(url, data, options)
        .map(res => this.extractData(res))
        .share();        
    }

    public getAccountsDetails(fromDate : string,toDate: string,isExcel : boolean,searchText: string,importance: string,currentAccountType : any,currentReport : any,_paginationModel : PaginationModel): any {
        let url = this.getAccountsDetailsUrl;
        let selectedUser = sessionStorage.getItem("selectedUser") ? sessionStorage.getItem("selectedUser") : null;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole},
                    {"CurrentAccountType":currentAccountType},
                    {"CurrentReport":currentReport},
                    {"CurrentPage":_paginationModel.CurrentPage},
                    {"PerPage":_paginationModel.PerPage},
                    {"fromDate":fromDate},
                    {"toDate":toDate},
                    {"searchText":searchText},
                    {"excel":isExcel},
                    {"selectedUser":selectedUser},
                    {"selectedUserID": selectedUser},
                    {"importance":importance}];
        console.log(data);            
        let headers = new Headers({ 'Content-Type': 'application/json','Cache-Control':'no-cache','Pragma':'no-cache' });
        let options = new RequestOptions({ headers: headers });    
        return this.http.post(url, data, options)
        .map(res => this.extractData(res))
        .share();
    }

    public getClients(mappingId : string): any {
        let url = this.getClientsUrl;
        let selectedUser = sessionStorage.getItem("selectedUser") ? sessionStorage.getItem("selectedUser") : null;
        
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole},
                    {"MappingId":mappingId}];
        let headers = new Headers({ 'Content-Type': 'application/json','Cache-Control':'no-cache','Pragma':'no-cache' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, data, options)
        .map(res => this.extractData(res))
        .share();
    }    

    private extractData( res: Response ) {        
        let body = res.json();
        return body || {};
    }
}