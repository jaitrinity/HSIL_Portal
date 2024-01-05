import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { ToastrModule } from 'toastr-ng2';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbDropdownModule.forRoot(),        
        LayoutRoutingModule,
        ToastrModule.forRoot()
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent
    ]
})
export class LayoutModule { }
