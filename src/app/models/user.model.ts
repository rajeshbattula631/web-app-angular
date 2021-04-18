export class User{
   public userId:number;
   public id:number;
   public title:string;
   public body:string;
   public roles:Role[] = new Array<Role>();

   constructor(){
       this.userId = null;
       this.id =null;
       this.title = '';
       this.body = '';
   }
}

export class Role{
   public id:number;
    public name:string;
    constructor(){
        this.id = null;
        this.name = '';
    }
}