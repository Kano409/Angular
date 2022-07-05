import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice5';
  softBooks: Book[] | any;
  bookForm: any = FormGroup;
  allBooks: Observable<Book[]> | undefined;
  datasaved = false;
  constructor(
    private formBuilder: FormGroup,
    private bookService: BookService
  ) {}

  createBook(book: Book) {
    this.bookService.createBook(book).subscribe((book) => {
      this.datasaved = true;
      this.getSoftBooks();
    });
  }

  ngOnInit() {
    this.getSoftBooks();
  }
  getSoftBooks() {
    // this.bookService
    //   .getBooksFromStore()
    //   .subscribe((books) => (this.softBooks = books));
    //   .map(books => books.name)

    this.allBooks = this.bookService.getBooksFromStore();
  }

  onFormSubmit() {
    this.datasaved = false;
    let book = this.bookForm.value;
    this.createBook(book);
    this.bookForm.reset();
  }
}
