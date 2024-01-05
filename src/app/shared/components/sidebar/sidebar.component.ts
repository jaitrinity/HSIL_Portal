import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SidebarMenuShowHideModel } from './sidebar-menu-show-hide.model';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit  {
    isActive = false;
    showMenu = '';
    public sidebarMenuShowHideModel : SidebarMenuShowHideModel;
    isAdmin : boolean = false;
    constructor(private router: Router,
            private route: ActivatedRoute) {
                this.sidebarMenuShowHideModel = new SidebarMenuShowHideModel();	                
    }
    
    ngOnInit() {
        let userRole = sessionStorage.getItem('UserRole');
        if(userRole == "Admin" || userRole == "Administrator" || userRole == 'administrator' || userRole == "ADMINISTRATOR")
        {
            this.isAdmin = true;
        }
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }            
}
