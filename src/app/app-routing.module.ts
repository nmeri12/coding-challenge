import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from "./components/task-list/task-list.component";

const routes: Routes = [
  {path:'',redirectTo:'tariff-list',pathMatch:'full'},
  {path:'tariff-list',component:TaskListComponent},
  // { path: '**', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
