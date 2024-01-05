import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { NgForm } from '@angular/forms';
import { UserDetailsService } from '../service/user-details.service';
import { UserDetailsModel } from '../model/user-details.model';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'toastr-ng2';

@Component({
    selector: 'app-user-details',
    templateUrl: '../template/user-details.component.html',
    animations: [routerTransition()],
    providers:[UserDetailsService]
})
export class UserDetailsComponent implements OnInit {    
    public userDetailsModel : UserDetailsModel;    
    constructor(private userDetailsService : UserDetailsService,
        private toastrService : ToastrService,
        private titleService: Title) {        
        this.userDetailsModel = new UserDetailsModel();
    }

    ngOnInit() {
        this.titleService.setTitle("User Details");
        this.getUserDetails();
    }    

    getUserDetails(): void{        
        this.userDetailsService.getUserDetails().subscribe( result => {
            if(result.Error){                    
                this.toastrService.error(result.ErrorMessage);
            }
            else
            {
                this.userDetailsModel.AssignedSubMenu = result.Data.ASSIGNED_SUB_MEU;
                this.userDetailsModel.Brand = result.Data.BRAND;
                this.userDetailsModel.Department = result.Data.DEPT;
                this.userDetailsModel.Email = result.Data.EMAIL;
                this.userDetailsModel.EmployeeId = result.Data.EMP_ID;
                this.userDetailsModel.EmployeeName = result.Data.EMP_NAME;
                this.userDetailsModel.Hub = result.Data.HUB;
                this.userDetailsModel.Location = result.Data.LOCATION;
                this.userDetailsModel.Mobile = result.Data.MOBILE;
                this.userDetailsModel.RegrastrationDate = result.Data.REG_DATE;
                this.userDetailsModel.Role = result.Data.ROLE;
                this.userDetailsModel.Zone = result.Data.ZONE;    
                this.toastrService.success(result.SuccessMessage);
            }
        });
    }
}