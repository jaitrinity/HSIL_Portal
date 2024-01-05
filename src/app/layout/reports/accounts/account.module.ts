import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbPaginationConfig, NgbCarouselModule, NgbAlertModule,NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountsRoutingModule } from './account-routing.module';
import { AccountsComponent } from './component/account.component';
import { PageHeaderModule } from '../../../shared';
import { AccountsService } from './service/account.service';
import { DataTableModule } from "angular2-datatable";
import { ToastrModule } from 'toastr-ng2';
import { FormsModule }    from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { CommonService } from '../../../shared/services/common.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports: [
        CommonModule,
        MyDatePickerModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),  
        NgbModule.forRoot(),      
        AccountsRoutingModule,
        NgbPaginationModule,
        ToastrModule.forRoot(), // ToastrModule added 
        DataTableModule,
        PageHeaderModule,
        FormsModule,
        LoadingModule,
        Ng2OrderModule,
    ],
    declarations: [
        AccountsComponent
    ],
    providers:[
        AccountsService,
        CommonService,
        NgbPaginationConfig
    ]
})
export class AccountsModule { }