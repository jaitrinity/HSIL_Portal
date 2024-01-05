import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { NgForm } from '@angular/forms';
import { ChangePasswordService } from '../service/change-password.service';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'toastr-ng2';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-change-password',
    templateUrl: '../template/change-password.component.html',
    styleUrls:['../styles/change-password.component.scss'],
    animations: [routerTransition()],
    providers:[ChangePasswordService,ToastrService]
})
export class ChangePasswordComponent implements OnInit {    
    public currentPassword : string;
    public newPassword : string;
    public newPasswordCopy : string;
    constructor(private changePasswordService : ChangePasswordService,
    private toastrService : ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title) {        
    }

    ngOnInit() {
        this.titleService.setTitle("Change Password");
    }

    disabledButton() : boolean {
        if(this.newPassword && this.newPasswordCopy && this.newPassword != '' && this.newPasswordCopy != '' && this.newPassword == this.newPasswordCopy)
        {
            return false;
        }
        else{
            return true;
        }
    }

    changePassword(changePasswordForm : NgForm): void{
        if(changePasswordForm.valid){
            this.changePasswordService.changePassword(this.newPassword).subscribe( result => {
                if(result.Error){   
                    this.toastrService.error(result.ErrorMessage);                 
                }
                else
                {
                    this.toastrService.success(result.SuccessMessage);  
                    this.router.navigate(['/user-details']);             
                }
            });
        }
        else
        {
            this.toastrService.error("Please provide required and valid details.");                 
        }
    }
}
