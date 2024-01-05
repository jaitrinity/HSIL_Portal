import { Component, OnInit , Input,EventEmitter,Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { ToastrService } from 'toastr-ng2';
import { CommonService } from '../../services/common.service';
import { UserDetailsModel } from 'app/layout/user-details/model/user-details.model';
import { DashboardService } from '../../../layout/dashboard/dashboard.service';
import { DashboardComponent } from '../../../layout/dashboard/dashboard.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [AuthenticationService,ToastrService,CommonService,DashboardService]
})
export class HeaderComponent implements OnInit {

    @Input()
    public isSidebarInActive : boolean;

    @Output()     
    public sidebarEvent : EventEmitter<string> = new EventEmitter<string>();

    public usersList : Array<UserDetailsModel>;
    public employeeName: string;
    public employeeId:string;
    public employeePassword:string;
    public selectedUser : string = '';
    public isLoginWait : Boolean;
    public selectedUserName :string;
    public userLists = [];
    constructor(public router: Router,            
            private _toastrService : ToastrService,
            private _commonService : CommonService,
            private authenticationService : AuthenticationService,
            private dashboardService:DashboardService) {
            this.router.events.subscribe((val) => {
                if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
                }
            });
            this.usersList = new Array<UserDetailsModel>();
    }

    ngOnInit() {
        this.employeeName = sessionStorage.getItem("EmployeeName");  
        this.employeeId = sessionStorage.getItem("EmployeeId");
        this.employeePassword = localStorage.getItem(btoa("hsilPrivateKey"));
        console.log("Header",this.isSidebarInActive); 
        this.userLists = JSON.parse(localStorage.getItem("userList"));
        var selectedUser = sessionStorage.getItem("selectedUser");
        for(var i=0;i<this.userLists.length;i++){
            if(selectedUser === this.userLists[i].EMP_ID){
                this.selectedUserName = this.userLists[i].EMP_NAME;
            }
        }
        //this.getUsersList();     
    }    

    toggleSidebar() {        
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');        
    }

    inActiveSidebar() {        
        if(this.isSidebarInActive){
            this.sidebarEvent.emit("false");
            this.isSidebarInActive = false;            
        }
        else {
            this.sidebarEvent.emit("true");
            this.isSidebarInActive = true;                                    
        }                
    }

    changeSelectedEmployee(event) {
        console.log(event.target.value);
        sessionStorage.removeItem("selectedUser");
        sessionStorage.setItem("selectedUser",this.selectedUser);
        
        location.reload();
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    
    onLoggedout() : void {     
        localStorage.clear();
        sessionStorage.clear();          
        if(this.authenticationService.logOutLoggedInUser()){
            this._toastrService.success("Successfully logged out.");
            this.router.navigateByUrl('login');
        }
    }   

    public navigateToMap(){
        window.open("https://fast.org.in/HSIL_Portal/mapview/index.php/auth/login_HSIL/"+this.employeeId+"/"+this.employeePassword+"");
    }

    getUsersList(){
        this._commonService.getUsersList().subscribe( result => {
            if(result.Error){
                this._toastrService.error(result.ErrorMessage);
            }
            else{
                this._toastrService.success(result.SuccessMessage);
                result.Data.forEach(element => {
                    let userDetailsModel = new UserDetailsModel();
                    userDetailsModel.EmployeeId = element.EMP_ID;
                    userDetailsModel.EmployeeName = element.EMP_NAME;
                    this.usersList.push(userDetailsModel);
                });                
            }

        });
    }

}
