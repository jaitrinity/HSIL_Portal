import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router,Routes,ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationModel } from '../authentication/authentication.model';
import { AuthenticationService } from '../authentication/authentication.service';
import { FormsModule, ReactiveFormsModule , NgForm }   from '@angular/forms';
import { ToastrService } from 'toastr-ng2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers:[AuthenticationService,ToastrService]
})

export class LoginComponent implements OnInit {
    public authenticationModel : AuthenticationModel;
    public userNameList = [];
    public virtualCityList = [];
    public zoneList = [];
    public isLoginWait : Boolean;
    constructor(public router: Router,            
            public toastr:ToastrService,
            private authenticationService :AuthenticationService) {            
            this.authenticationModel = new AuthenticationModel();   
            this.isLoginWait = false;          
    }

    ngOnInit() {          
        if(this.authenticationService.checkUserLoggedIn())
        {            
            this.router.navigate(['dashboard']);
        }
    }

    userLogin(userLoginForm) : void {
        this.authenticationService.markFormDirty(userLoginForm);
        if(!userLoginForm.valid)
        {
            this.toastr.error("Please provide all required and valid details.");
        }
        else
        {
            this.isLoginWait = true;
            this.authenticationService.userLogin(this.authenticationModel).subscribe((result : any) => {
                this.isLoginWait = false;
                if(result.Error)
                {
                    this.toastr.error(result.ErrorMessage);
                }
                else
                {
                    this.toastr.success(result.SuccessMessage);                       
                    this.authenticationModel.UserRole = result.UserRole ? result.UserRole : 'N/A';
                    this.authenticationModel.EmployeeName = result.EmployeeName ? result.EmployeeName : 'N/A';
                    this.authenticationService.setUserLoginsessionStorage (this.authenticationModel);
                    localStorage.setItem(btoa("hsilPrivateKey"),btoa(this.authenticationModel.Password));    
                    this.userNameList =   result.UserList;
                    this.virtualCityList = result.VIRTUAL_CITY;
                    this.zoneList = result.zone;
                    localStorage.setItem("userList",JSON.stringify(this.userNameList)); 
                    localStorage.setItem("virtualStateList",JSON.stringify(this.virtualCityList));  
                    localStorage.setItem("zoneList",JSON.stringify(this.zoneList));        
                    this.router.navigate(['dashboard']);
                }
            });
        }
    }

    public 
}
