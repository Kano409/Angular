import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  constructor(private router: Router, private bookService: BookService) {}

  // @ViewChild(BookComponent) bookComponent!: BookComponent;

  // datasaved = this.bookComponent.datasaved;
  // softBook = this.bookComponent.softBook;
  // bookFrom = this.bookComponent.bookFrom;

  // getOfBook() {
  //   this.bookComponent.getBooksFromStore();
  // }
  // datasaved = false;
  // softBook: Book[] | any;
  // bookFrom: any = FormGroup;

  ngOnInit(): void {}

  // createBook(book: Book) {
  //   this.bookService.createBook(book).subscribe((book) => {
  //     this.datasaved = true;
  //     this.getOfBook();
  //   });
  // }

  // getOfBook() {
  //   this.bookService
  //     .getBooksFromStore()
  //     .subscribe((books) => (this.softBook = books));
  // }

  getRedirect() {
    this.router.navigate(['book']);
  }

  onFormSubmit() {
    // this.datasaved = false;
    // let book = this.bookFrom.value;
    // this.createBook(book);
    // this.bookFrom.reset();
    console.log('clicked on add book button');
  }
}
