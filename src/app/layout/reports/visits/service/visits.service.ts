import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../../../../shared/constants/constants';
import 'rxjs/Rx';
import { PaginationModel } from '../../../../shared/model/pagination.model';

@Injectable()
export class VisitsService {
    private getVisitsDetailsUrl: string;
    private loggedInEmployeeId : string;
    private loggedInUserRole : string;        
    constructor( private http: Http ) {
        this.getVisitsDetailsUrl = Constants.ServerUrl + 'VisitReport/fetchVisitReport';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }

    public getVisitsDetails(fromDate : string,toDate: string,isExcel : boolean,searchVisitsReport: string,_paginationModel : PaginationModel,currentMonth: string,importance :string): any {
        let url = this.getVisitsDetailsUrl;
        let selectedUser = sessionStorage.getItem("selectedUser") ? sessionStorage.getItem("selectedUser") : null;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole},
                    {"CurrentPage":_paginationModel.CurrentPage},
                    {"PerPage":_paginationModel.PerPage},
                    {"selectedUserID": selectedUser},
                    {"currentMonth":currentMonth},
                    {"SearchText":searchVisitsReport},
                    {"fromDate":fromDate},
                    {"toDate":toDate},
                    {"excel":isExcel},
                    {"selectedUser":selectedUser},
                    {"importance":importance}];
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