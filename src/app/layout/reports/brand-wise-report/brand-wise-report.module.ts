import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbPaginationConfig, NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrandWiseReportRoutingModule } from './brand-wise-report-routing.module';
import { BrandWiseReportComponent } from './component/brand-wise-report.component';
import { PageHeaderModule } from '../../../shared';
import { BrandWiseReportService } from './service/brand-wise-report.service';
import { ToastrModule } from 'toastr-ng2';
import { LoadingModule } from 'ngx-loading';
import { CommonService } from '../../../shared/services/common.service';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
    imports: [
        CommonModule,
        NgbPaginationModule,
        NgbCarouselModule.forRoot(),             
        NgbAlertModule.forRoot(),        
        BrandWiseReportRoutingModule,
        ToastrModule.forRoot(), // ToastrModule added     
        PageHeaderModule,
        Ng2OrderModule,
        LoadingModule,
        FormsModule
    ],
    declarations: [
        BrandWiseReportComponent
    ],
    providers: [CommonService,NgbPaginationConfig]
})
export class BrandWiseReportModule { }