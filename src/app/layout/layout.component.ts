import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    
    public isSidebarInActive : Boolean = false;
    constructor(public router: Router) { }

    ngOnInit() {        
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
    }

    getSidebarEvent(event){
        if(event == "false")
        {
            this.isSidebarInActive = false;
        }        
        else{
            this.isSidebarInActive = true;
        }
    }    
}