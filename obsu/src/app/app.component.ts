import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookService } from './book.service';
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

  //6. obseravle variable of Book

  //softBook: Book[] | undefined;

  softBook: Observable<Book[]> | undefined;
  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.getOfBook();
  }

  //7. use subscribe for responce that come from observable -> call api
  getOfBook() {
    // this.bookService
    //   .getBooksFromStore()
    //   .subscribe((books) => (this.softBook = books));

    this.softBook = this.bookService.getBooksFromStore();
  }
}
