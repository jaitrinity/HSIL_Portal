import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbModule, NgbPaginationConfig, NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { VisitsRoutingModule } from './visits-routing.module';
import { VisitsComponent } from './component/visits.component';
import { PageHeaderModule } from '../../../shared';
import { VisitsService } from './service/visits.service';
import { ToastrModule } from 'toastr-ng2';
import { LoadingModule } from 'ngx-loading';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),        
        VisitsRoutingModule,
        NgbPaginationModule,             
        ToastrModule.forRoot(), // ToastrModule added 
        LoadingModule,        
        Ng2OrderModule,
        FormsModule,        
        PageHeaderModule,
        MyDatePickerModule
    ],
    declarations: [
        VisitsComponent
    ],
    providers:[NgbPaginationConfig]
})
export class VisitsModule { }