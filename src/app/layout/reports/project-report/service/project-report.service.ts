import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../../../../shared/constants/constants';
import 'rxjs/Rx';
import { PaginationModel } from '../../../../shared/model/pagination.model';

@Injectable()
export class ProjectReportService {
    private getProjectReportUrl: string;
    private loggedInEmployeeId : string;
    private loggedInUserRole : string;
    constructor( private http: Http ) {                
        this.getProjectReportUrl = Constants.ServerUrl + 'ProjectReport/fetchProjectReportUsingStage';
        this.loggedInEmployeeId = sessionStorage.getItem("EmployeeId");
        this.loggedInUserRole = sessionStorage.getItem("UserRole");
    }

    public getProjectReportDetails(fromDate : string,toDate: string,excel,taggedProject,virtualState,zone,monthOfClosure,sortkey,sortOrder,searchText,reportSectionType,currentMonth : string,currentReportType : any,_paginationModel: PaginationModel): any {
        let url = this.getProjectReportUrl;
        let selectedUser = sessionStorage.getItem("selectedUser") ? sessionStorage.getItem("selectedUser") : null;
        let data = [{"LoggedInEmployeeId":this.loggedInEmployeeId},
                    {"LoggedInUserRole":this.loggedInUserRole},
                    {"CurrentReportType":currentReportType},
                    {"CurrentPage":_paginationModel.CurrentPage},
                    {"PerPage":_paginationModel.PerPage},
                    {"currentMonth":currentMonth},
                    {"searchText":searchText},
                    {"selectedUser":selectedUser},
                    {"selectedUserID": selectedUser},
                    {"fromDate":fromDate},
                    {"toDate":toDate},
                    {"Sortkey":sortkey},
                    {"excel":excel},
                    {"TaggedProject":taggedProject},
                    {"virtual_city":virtualState},
                    {"zone":zone},
                    {"month_of_closure":monthOfClosure},
                    {"sortOrder":sortOrder},
                    {"reportSectionType":reportSectionType}]; 
        
        console.log(data);            
                    
        let headers = null;        
        headers = new Headers({ 'Content-Type': 'application/json','Cache-Control':'no-cache','Pragma':'no-cache' });        
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