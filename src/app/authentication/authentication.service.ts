import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Constants } from '../shared/constants/constants';
import { AuthenticationModel } from './authentication.model';
import { NgForm, AbstractControl } from '@angular/forms';
import { utils, write, WorkBook } from 'xlsx';
import { saveAs } from 'file-saver';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
    private userLoginUrl: string;

    constructor( private http: Http) {
        this.userLoginUrl = Constants.ServerUrl + 'Authentication/getUserLogin';
    }

    public userLogin( authenticationModel: AuthenticationModel ): any {            
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });    
        return this.http.post(this.userLoginUrl, authenticationModel, options)
        .map(res => this.extractData(res))
        .share();  
    }

    private extractData( res: Response ) {        
        let body = res.json();
        return body || {};
    }

    public setUserLoginsessionStorage(authenticationModel: AuthenticationModel){        
        sessionStorage.setItem("EmployeeId",authenticationModel.Username);
        sessionStorage.setItem("AuthenticationString",authenticationModel.Password);
        sessionStorage.setItem("UserRole",authenticationModel.UserRole);      
        sessionStorage.setItem("EmployeeName",authenticationModel.EmployeeName);                             
    }

    public checkUserLoggedIn() : Boolean {        
        let EmployeeId = sessionStorage.getItem("EmployeeId");
        let AuthenticationString = sessionStorage.getItem("AuthenticationString");
        let UserRole = sessionStorage.getItem("UserRole");        
        let EmployeeName = sessionStorage.getItem("EmployeeName");
        if(EmployeeId && AuthenticationString && UserRole && EmployeeName)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    public logOutLoggedInUser() {  
        let EmployeeId = sessionStorage.removeItem("EmployeeId");        
        let AuthenticationString = sessionStorage.removeItem("AuthenticationString");        
        let UserRole = sessionStorage.removeItem("UserRole");                
        let EmployeeName = sessionStorage.removeItem("EmployeeName");        
        if(sessionStorage.length == 0)        
        {
            return true;
        }
        else
        {
          return false;
        }
    }    

    public markFormDirty(form: NgForm): void {
        for (let key in form.controls) {
            let control: AbstractControl = form.controls[key];
            if (control.invalid && control.enabled)
                control.markAsDirty();
        }
    }

    public markFormPristine(form: NgForm): void {
        for (let key in form.controls) {
            let control: AbstractControl = form.controls[key];
            if (control.invalid && control.enabled)
                control.markAsPristine();
        }
    }    

    exportFunction(filename : any,dataArray: any): void {
        const ws_name = 'Sheet';
        const wb: WorkBook = { SheetNames: [], Sheets: {} };
        console.log("dataArray",dataArray);
        const ws: any = utils.json_to_sheet(dataArray);
        wb.SheetNames.push(ws_name);
        wb.Sheets[ws_name] = ws;
        const wbout = write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });
    
        function s2ab(s) {
          const buf = new ArrayBuffer(s.length);
          const view = new Uint8Array(buf);
          for (let i = 0; i !== s.length; ++i) {
            view[i] = s.charCodeAt(i) & 0xFF;
          };
          return buf;
        }        
        saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), filename);
    }

    
    csvFunction(filename,data){
        var csvData = this.ConvertToCSV(data);
        this.download(filename,csvData);
        /*var blob = new Blob([csvData], { type: 'text/csv' });
        var url= window.URL.createObjectURL(blob);
        window.open(url);*/
    }

    ConvertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";

        for (var index in objArray[0]) {
            //Now convert each value to string and comma-separated
            row += index + ',';
        }
        row = row.slice(0, -1);
        //append Label row with line break
        str += row + '\r\n';

        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    }

    download(fileName,data) {
        let blob = new Blob(['\ufeff' + data], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  
            //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", fileName);
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }
}