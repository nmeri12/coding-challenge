import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from "./components/task-list/task-list.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {path:'',redirectTo:'tariff-list',pathMatch:'full'},
  {path:'tariff-list',component:TaskListComponent},
   { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
