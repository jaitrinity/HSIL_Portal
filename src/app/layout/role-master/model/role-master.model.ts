export class RoleMasterModel {
    public Id : string;
    public Name : string;
    public Parent : string = '0';
    public ParentName : string;
    public BrandName : string = '-1';
    public Status : string;
    public StatusName : string;
    public CreatedBy : string;
    public CreatedDate : string;
    public ModifiedDate : string;
    public ModifiedBy : string;
}