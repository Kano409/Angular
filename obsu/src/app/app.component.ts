import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookService } from './book.service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'obsu';
  getInfo() {
    console.log('pressed on button');
  }
  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
    // for show on html page
    this.getOfBook();
  }

  //6. obseravle variable of Book

  softBook: Book[] | undefined;

  // 11. initialization
  datasaved = false;
  bookForm: any = FormGroup;
  allBooks: Observable<Book[]> | undefined;
  onFormSubmit() {
    this.datasaved = false;
    let book = this.bookForm.value;
    this.createBook(book);
    this.bookForm.reset();
  }

  createBook(book: Book) {
    this.bookService.createBook(book).subscribe((book) => {
      this.datasaved = true;
      this.getOfBook();
    });
  }

  //softBook: Observable<Book[]> | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {}

  //7. use subscribe for responce that come from observable -> call api
  getOfBook() {
    // this.bookService
    //   .getBooksFromStore()
    //   .subscribe((books) => (this.softBook = books));

    //this.softBook = this.bookService.getBooksFromStore();

    // 13. load data in allBooks
    this.allBooks = this.bookService.getBooksFromStore();
  }

  bookEdit() {}

  bookDelete(bookid: number) {
    this.bookService.deleteBooksFromStore(bookid).subscribe((book) => {
      this.getOfBook();
    });
  }
}
