import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Book } from './book';
import { BookService } from './book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookComponent } from './book/book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice6';
  softBook: Book[] | any;

  ngOnInit() {
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

  
}
