import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  softBook: Book[] | any;
  datasaved = false;
  bookFrom: any = FormGroup;

  ngOnInit(): void {
    this.getOfBook();
  }

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {}

  getOfBook() {
    this.bookService
      .getBooksFromStore()
      .subscribe((books) => (this.softBook = books));
  }

  deleteOfBook(bookid: number) {
    this.bookService
      .deleteBooksFromStore(bookid)
      .subscribe((books) => this.getOfBook());
  }
}
