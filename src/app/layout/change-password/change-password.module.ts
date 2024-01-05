import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './component/change-password.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,  
        FormsModule,  
        ChangePasswordRoutingModule,
        PageHeaderModule
    ],
    declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule { }