import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookStoreService } from '../book-store.service';
import { Book } from '../book';
import { CanComponentDeactivate } from '../can-deactivate.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit, CanComponentDeactivate {

  constructor(private bookStoreService:BookStoreService) { }

  newBook:Book;
  canNavigate:boolean = true;

  isValidFormSubmitted:boolean = null;
  isFormSubmitted:boolean = false;

  bookForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required)
  });

  onFormSubmitted(){
    this.isValidFormSubmitted = false;
    this.canNavigate = false;
    if(this.bookForm.invalid){
      return;
    }
    this.isValidFormSubmitted = null;
    this.canNavigate = true;
    this.isFormSubmitted = true;

    this.bookStoreService.addBook(new Book(this.name.value, this.price.value));
    this.bookForm.reset();
  }

  get name(){
    return this.bookForm.get('name');
  }
  
  get price(){
    return this.bookForm.get('price');
  }
  
  onNameChange(){
    this.canNavigate = false;
    this.isFormSubmitted = false;
  }
  
  onPriceChange(){
    this.canNavigate = false;
    this.isFormSubmitted = false;
  }

  ngOnInit(): void {
  }

}
