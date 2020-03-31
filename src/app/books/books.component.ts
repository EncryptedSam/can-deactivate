import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BookStoreService } from '../book-store.service';
import { Book } from '../book';


// The puropose of the component is to display books
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookList:Book[];

  constructor(private bookStore:BookStoreService) { 
    this.bookList = this.bookStore.bookList;
  }

  ngOnInit(): void {
  }

}
