import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "", redirectTo: "/list", pathMatch: "full" },
  
  { path: "details/:id", component: DetailsComponent   },
  { path: "add"        , component: AddPersonComponent },
  { path: "**"         , component: NotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
