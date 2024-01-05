import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbModule, NgbPaginationConfig, NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReviewFormatReportRoutingModule } from './review-format-report-routing.module';
import { ReviewFormatReportComponent } from './components/review-format-report.component';
import { PageHeaderModule } from '../../../shared';
import { ReviewFormatReportService } from './service/review-format-report.service';
import { ToastrModule } from 'toastr-ng2';
import { LoadingModule } from 'ngx-loading';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(), 
        NgxPaginationModule,       
        ReviewFormatReportRoutingModule,
        ToastrModule.forRoot(), // ToastrModule added 
        LoadingModule,       
        NgbModule.forRoot(), 
        NgbPaginationModule,         
        FormsModule,        
        Ng2OrderModule,        
        PageHeaderModule
    ],
    declarations: [
        ReviewFormatReportComponent
    ],
    providers:[NgbPaginationConfig,ReviewFormatReportService]
})

export class ReviewFormatReportModule { }