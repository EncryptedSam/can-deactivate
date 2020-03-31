import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { CanDeactivateService } from './can-deactivate.service';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"add-book", component:AddBookComponent, canDeactivate:[CanDeactivateService]},
  {path:"books",component:BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
