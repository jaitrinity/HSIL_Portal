import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../../../../shared/constants/constants';
import 'rxjs/Rx';
import { PaginationModel } from '../../../../shared/model/pagination.model';

@Injectable()
export class ConsolidatedReportService {
    private getConsolidatedReportUrl: string;
    private loggedInEmployeeId : string;
    private loggedInUserRole : string;
    constructor( private http: Http ) {
        this.getConsolidatedReportUrl = Constants.ServerUrl + 'ConsolidatedReport/fetchConsolidatedData';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }

    public getConsolidatedReport(_paginationModel : PaginationModel,currentBrand : any): any {
        let url = this.getConsolidatedReportUrl;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole},
                    {"CurrentBrand":currentBrand},
                    {"CurrentPage":_paginationModel.CurrentPage},
                    {"PerPage":_paginationModel.PerPage}];
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