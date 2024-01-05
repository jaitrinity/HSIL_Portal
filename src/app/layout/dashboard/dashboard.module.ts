import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'toastr-ng2';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PageHeaderModule } from '../../shared';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
//import { FunnelModule } from "../../shared/components/funnel/funnel.module";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),        
        DashboardRoutingModule,
        Ng2Charts,
        LoadingModule,
        FormsModule,
        NgbModule.forRoot(),     
        ReactiveFormsModule,          
        ToastrModule.forRoot(), // ToastrModule added                    
        PageHeaderModule
    ],
    declarations: [
        DashboardComponent
    ]
})

export class DashboardModule { }