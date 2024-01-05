import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './component/user-details.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,  
        FormsModule,  
        UserDetailsRoutingModule,
        PageHeaderModule
    ],
    declarations: [UserDetailsComponent]
})
export class UserDetailsModule { }