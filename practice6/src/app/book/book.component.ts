import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
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
  allBooks: Observable<Book[]> | undefined;
  getBooksFromStore: any;

  ngOnInit(): void {
    this.getOfBook();
  }

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {}

  getOfBook() {
    // this.bookService
    //   .getBooksFromStore()
    //   .subscribe((books) => (this.softBook = books));
    this.allBooks = this.bookService.getBooksFromStore();
  }

  deleteOfBook(bookid: number) {
    this.bookService
      .deleteBooksFromStore(bookid)
      .subscribe((books) => this.getOfBook());
  }

  editOfBook() {}
}
