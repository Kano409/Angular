import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { AddBookComponent } from './add-book/add-book.component';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  [x: string]: any;
  bookUrl = '/api/books';

  constructor(private http: HttpClient) {}

  getBooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }

  createBookFromStore(book: Book): Observable<Book> {
    let httpHeader = new HttpHeaders().set('Content-Type', 'application/Json');
    let options = {
      headers: httpHeader,
    };
    return this.http.post<Book>(this.bookUrl, book, options);
  }

  deleteBooksFromStore(bookid: number): Observable<number> {
    let httpHeader = new HttpHeaders().set('Content-Type', 'applicatioJson');
    let option = {
      header: httpHeader,
    };
    return this.http.delete<number>(this.bookUrl + '/' + bookid);
  }
}
