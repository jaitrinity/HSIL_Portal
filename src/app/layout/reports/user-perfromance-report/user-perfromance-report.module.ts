import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbPaginationConfig, NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserPerfromanceReportRoutingModule } from './user-perfromance-report-routing.module';
import { UserPerfromanceReportComponent } from './component/user-perfromance-report.component';
import { PageHeaderModule } from '../../../shared';
import { UserPerfromanceReportService } from './service/user-perfromance-report.service';
import { ToastrModule } from 'toastr-ng2';
import { LoadingModule } from 'ngx-loading';
import { CommonService } from '../../../shared/services/common.service';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),        
        UserPerfromanceReportRoutingModule,
        ToastrModule.forRoot(), // ToastrModule added         
        PageHeaderModule,
        FormsModule,
        LoadingModule,
        Ng2OrderModule,
        NgbPaginationModule
    ],
    declarations: [
        UserPerfromanceReportComponent
    ],
    providers: [
            CommonService,
            NgbPaginationConfig
        ]
})
export class UserPerfromanceReportModule { }