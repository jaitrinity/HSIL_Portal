import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'toastr-ng2';
import { PageHeaderModule } from '../../shared';
import { FormsModule }    from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { LoadingModule } from 'ngx-loading';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { QuotationManagementRoutingModule } from './quotation-management-routing.module';
import { QuotationManagementComponent } from './quotation-management.component';
import { OnlyNumber } from 'app/shared/Validations/OnlyNumber';
import { OnlyNumberWithDecimal } from 'app/shared/Validations/OnlyNumberWithDecimal';
import { LengthValidater } from 'app/shared/validations/LengthValidater';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),        
        QuotationManagementRoutingModule,
        NgxPaginationModule,
        Ng2OrderModule,
        LoadingModule,
        FormsModule,
        ToastrModule.forRoot(), // ToastrModule added            
        PageHeaderModule
    ],
    declarations: [
      QuotationManagementComponent,
      OnlyNumber,
      OnlyNumberWithDecimal,
      LengthValidater
    ]
})

export class QuotationManagementModule { }