import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbModule, NgbPaginationConfig, NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ProjectReportRoutingModule } from './project-report-routing.module';
import { ProjectReportComponent } from './component/project-report.component';
import { PageHeaderModule } from '../../../shared';
import { ProjectReportService } from './service/project-report.service';
import { ToastrModule } from 'toastr-ng2';
import { LoadingModule } from 'ngx-loading';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),        
        ProjectReportRoutingModule,
        ToastrModule.forRoot(), // ToastrModule added 
        LoadingModule,       
        NgbModule.forRoot(), 
        NgbPaginationModule,         
        FormsModule,        
        Ng2OrderModule,        
        PageHeaderModule,
        MyDatePickerModule
    ],
    declarations: [
        ProjectReportComponent
    ],
    providers:[NgbPaginationConfig]
})

export class ProjectReportModule { }