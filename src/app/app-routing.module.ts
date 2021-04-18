import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [{path:'',component:HomeComponent},{path:'users',component:SampleComponent},
{path:'products',component:TestComponent}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



