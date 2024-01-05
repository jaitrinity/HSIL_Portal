import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbPaginationConfig, NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { UserReportRoutingModule } from './user-report-routing.module';
import { UserReportComponent } from './component/user-report.component';
import { PageHeaderModule } from '../../../shared';
import { UserReportService } from './service/user-report.service';
import { DataTableModule } from "angular2-datatable";
import { ToastrModule } from 'toastr-ng2';
import { FormsModule }    from '@angular/forms';
import { CommonService } from '../../../shared/services/common.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { LoadingModule } from 'ngx-loading';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        UserReportRoutingModule,
        ToastrModule.forRoot(), // ToastrModule added 
        DataTableModule,
        LoadingModule,
        PageHeaderModule,
        Ng2OrderModule,
        NgbPaginationModule,
        FormsModule
    ],
    declarations: [
        UserReportComponent
    ],
    providers:[
        CommonService,
        NgbPaginationConfig
    ]
})
export class UserReportModule { }