import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../../../shared/constants/constants';
import { RoleMasterModel } from '../model/role-master.model';
import 'rxjs/Rx';

@Injectable()
export class RoleMasterService {
    private getRoleMasterDetailsUrl: string;
    private addRoleMasterDetailsUrl: string;
    private deleteRoleMasterDetailsUrl: string;
    private getRoleListUrl: string;

    constructor( private http: Http ) {
        this.getRoleMasterDetailsUrl = Constants.ServerUrl + 'RoleMaster/fetchUserRoles';
        this.addRoleMasterDetailsUrl = Constants.ServerUrl + 'RoleMaster/saveUserRoles';        
        this.deleteRoleMasterDetailsUrl = Constants.ServerUrl + 'RoleMaster/fetchDashboardContent';
        this.getRoleListUrl = Constants.ServerUrl + 'RoleMaster/fetchUserRolesList';
    }

    /* get all roles info */
    public getRoleMasterDetails(parentRoleId): Observable<any> {
        let timeStamp = +new Date();
        let url = this.getRoleMasterDetailsUrl + '/' + parentRoleId + '/'+ timeStamp;
        return this.http.get( url ).map(( res: Response ) => res.json() );
    }

    /* get single role info */
    public getUserRolesList(): Observable<any> {
        let timeStamp = +new Date();
        let url = this.getRoleListUrl+ '/'+ timeStamp;
        return this.http.get( url ).map(( res: Response ) => res.json() );
    }
    
    /* get delete role info */
    public deleteRoleMasterDetails(RoleId : any): Observable<any> {
        let timeStamp = +new Date();
        let url = this.deleteRoleMasterDetailsUrl + '/' + RoleId + '/'+ timeStamp;
        return this.http.get( url ).map(( res: Response ) => res.json() );
    }
    
    /* Add role info */
    public addRoleMasterDetail(roleMasterModel : RoleMasterModel): Observable<any> {
        let url = this.addRoleMasterDetailsUrl;
        let headers = new Headers({ 'Content-Type': 'application/json' ,'Cache-Control':'no-cache','Pragma':'no-cache'});        
        let options = new RequestOptions({ headers: headers });    
        return this.http.post(url, roleMasterModel, options)
        .map(res => this.extractData(res))
        .share();  
    }    

    private extractData( res: Response ) {
        console.log( res );
        let body = res.json();
        return body || {};
    }
}