import { Injectable } from '@angular/core';
import { Book } from './book';

//Book store service which manages books
@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  bookList:Book[] = [
    new Book("Half Girlfriend",200),
    new Book("Two States",300)
  ];

  addBook(book:Book):void{
    this.bookList.push(book);
  }

  constructor() { }
}
