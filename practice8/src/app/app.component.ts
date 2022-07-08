import { Component } from '@angular/core';
import { Book } from 'src/models/user';
import { BookService } from './services/book.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice8';

  loginForm!: FormGroup;
  books: Book[] | any;
  bookForm: boolean | any;
  isNewBook: boolean | any;
  newBook: any = {};
  editBookForm: boolean | any;
  editedBook: any = {};

  fileToUpload: any;
  imageUrl: any;

  constructor(private bookService: BookService, public fb: FormBuilder) {
    this.loginForm = this.fb.group({
      avatar: [null],
      name: [''],
    });
  }

  ngOnInit() {
    this.books = this.getBooks();
  }

  getBooks(): Book[] {
    return this.bookService.getBooksFromData();
  }

  showEditBookForm(book: Book) {
    if (!book) {
      this.bookForm = false;
      return;
    }
    this.editBookForm = true;
    this.editedBook = book;
  }

  showAddBookForm() {
    if (this.books.length) {
      this, (this.newBook = {});
    }
    this.bookForm = true;
    this.isNewBook = true;
  }

  saveBook(book: Book) {
    if (this.isNewBook) {
      this.bookService.insertBook(book);
    }
    this.bookForm = false;
  }

  updateBook() {
    this.bookService.updateBook(this.editedBook);
    this.editBookForm = false;
    this.editedBook = {};
  }

  removeBook(book: Book) {
    return this.bookService.deleteBook(book);
  }

  cancelEdited() {
    this.editedBook = {};
    this.bookForm = false;
  }

  cancelNewBook() {
    this.newBook = {};
    this.bookForm = false;
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}
