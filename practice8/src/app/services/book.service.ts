import { Injectable } from '@angular/core';
import { Book } from 'src/models/user';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private ubook: Book[] = [];

  constructor() {}

  getBooksFromData() {
    return this.ubook;
  }

  insertBook(book: Book) {
    book.id = this.ubook.length + 1;
    return this.ubook.push(book);
  }

  updateBook(book: Book) {
    const index = this.ubook.findIndex((b) => book.id == b.id);
    this.ubook[index] = book;
  }

  deleteBook(book: Book) {
    this.ubook.splice(this.ubook.indexOf(book), 1);
  }
}
