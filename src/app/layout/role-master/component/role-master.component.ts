import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../.././router.animations';
import { Title }     from '@angular/platform-browser';
import { RoleMasterService } from '../service/role-master.service';
import { ToastrService } from 'toastr-ng2';
import { RoleMasterModel } from '../model/role-master.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Constants } from '../../../shared/constants/constants';
import { FormsModule, ReactiveFormsModule , NgForm }   from '@angular/forms';   
import { AuthenticationService } from '../../../authentication/authentication.service'
import { CommonService } from '../../../shared/services/common.service';

@Component({
    selector: 'app-role-master',
    templateUrl: '../template/role-master.component.html',
    styleUrls: ['../styles/role-master.component.scss'],
    animations: [routerTransition()],
    providers: [
            RoleMasterService,
            ToastrService,
            AuthenticationService,
            CommonService
        ]
})
export class RoleMasterComponent implements OnInit { 
    public roleMasterModel: RoleMasterModel;
    public roleMasterModelList: Array<RoleMasterModel>;
    public roleList: Array<RoleMasterModel>;
    public addNewRole : Boolean;
    public dateTimeFormatter : string;
    public currentParentId : any;
    public currentParent : String;
    public loading : Boolean = false;
    public p : any;
    public searchRoleDetails : string;
    public key: string = 'Id'; //set default
    public reverse: boolean = false;  
    public brandList : Array<any>;  
    constructor(private titleService: Title,
        private router: Router,
        private _commonService : CommonService,
        private route: ActivatedRoute,
        private _authenticationService : AuthenticationService,
        private _roleMasterService : RoleMasterService,
        private _toastrService : ToastrService) {
            this.roleMasterModel = new RoleMasterModel();
            this.roleMasterModelList = new Array<RoleMasterModel>();
            this.roleList = new Array<RoleMasterModel>();
            this.addNewRole = false;
            this.dateTimeFormatter = Constants.DateTimeFormatter;            
    }

    ngOnInit() {    
        this.titleService.setTitle( 'Role Master' );  
        this.route.queryParams.forEach(( params: Params ) => {
            let isAdd = params['type'];                
            this.roleMasterModel.Id = params['details'];
            this.currentParentId = params['parentId'] ? params['parentId'] : -1;
            window.scrollTo( 0, 0 );   
            this.getUserRolesList(); 
            if(isAdd == 'add')                    
            {
                this.addNewRole = true;  
                this.getBrandList();              
            }
            else if(this.roleMasterModel.Id)                    
            {                
                this.getRoleMasterDetails();
            }
            else
            {
                this.addNewRole = false;
                let item : RoleMasterModel;
                this.getRoleMasterDetails();
            }            
        });        
    }   

    sort(key : any) : void {
        this.key = key;
        this.reverse = !this.reverse;
    }

    getRoleDetails(): void{        
        this.router.navigateByUrl("/role-master?parentId="+this.currentParentId);
    }

    getBrandList() : void{
        this.loading = true;
        this._commonService.getBrandList().subscribe(( result: any ) => {                        
            this.loading = false;
            if ( !result ) {
                this._toastrService.error( 'Something went wrong!!! Please try after sometime.' );
            } else if ( result.Error ) {
                this._toastrService.error(result.ErrorMessage);
            } else {                                
                this.brandList = result.Data;
            }
        });
    }

    getRoleMasterDetails() : void {           
        this.loading = true;
        this._roleMasterService.getRoleMasterDetails(this.currentParentId).subscribe((result: any) => {
            this.loading = false;
            this.roleMasterModelList = [];
            this.roleMasterModelList = new Array<RoleMasterModel>();                                  
            if(result.Error)
            {
                this._toastrService.error(result.ErrorMessage);
            }
            else
            {
                this._toastrService.success(result.SuccessMessage);                    
                this.currentParent = result.CurrentParent;
                for(let i=0 ;i<result.Data.length;i++)
                {
                    let roleMasterModel = new RoleMasterModel();
                    roleMasterModel = result.Data[i];
                    if(result.Data[i].Status == 0){
                        roleMasterModel.StatusName = 'In-Active';
                    }
                    else
                    {
                        roleMasterModel.StatusName = 'Active';
                    }
                    this.roleMasterModelList.push(roleMasterModel);
                }
            }
        });
    }

    deleteRoleMasterDetails(itemId) : void {
        this.loading = true;
        this._roleMasterService.deleteRoleMasterDetails(itemId).subscribe((result: any) => {
            this.loading = false;
            if(result.Error)
            {
                this._toastrService.error(result.ErrorMessage);
            }
            else
            {
                this._toastrService.success(result.SuccessMessage);
                this.getRoleMasterDetails();
            }
        });
    }    

    getUserRolesList() : void {
        this.loading = true;
        this._roleMasterService.getUserRolesList().subscribe((result: any) => {
            this.loading = false;
            this.roleList = [];
            this.roleList = new Array<RoleMasterModel>();
            if(result.Error)
            {
                this._toastrService.error(result.ErrorMessage);
            }
            else
            {                                
                for(let i = 0;i<result.Data.length;i++)
                {
                    let role = new RoleMasterModel();
                    role.Id = result.Data[i].role_id;
                    role.Name = result.Data[i].role_name;
                    this.roleList.push(role);
                }
            }
        });
    }  
    
    saveRoleDetail(createRoleForm : NgForm): void{
        this._authenticationService.markFormDirty(createRoleForm);
        if(!createRoleForm.valid)
        {
            this._toastrService.error("Please provide all required and valid details.");
        }
        else
        {            
            this.loading = true;
            this._roleMasterService.addRoleMasterDetail(this.roleMasterModel).subscribe((result: any) => {
                this.loading = false;
                if(result.Error)
                {
                    this._toastrService.error(result.ErrorMessage);
                }
                else
                {                    
                    this.roleMasterModel = new RoleMasterModel();
                    this._toastrService.success(result.SuccessMessage);  
                    this.currentParentId = this.roleMasterModel.Parent;
                    this.getRoleDetails();
                }                
            });
        }
    }
}