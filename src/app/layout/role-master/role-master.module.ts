import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'toastr-ng2';
import { RoleMasterRoutingModule } from './role-master-routing.module';
import { RoleMasterComponent } from './component/role-master.component';
import { PageHeaderModule } from '../../shared';
import { FormsModule }    from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; 
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoadingModule } from 'ngx-loading';
import { Ng2OrderModule } from 'ng2-order-pipe';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),        
        RoleMasterRoutingModule,
        NgxPaginationModule,
        Ng2OrderModule,
        LoadingModule,
        FormsModule,
        ToastrModule.forRoot(), // ToastrModule added            
        PageHeaderModule
    ],
    declarations: [
      RoleMasterComponent
    ]
})

export class RoleMasterModule { }