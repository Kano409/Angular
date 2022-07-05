import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookUrl = '/api/books';

  constructor(private http: HttpClient) {}

  createBook(book: Book): Observable<Book> {
    let httpHeader = new HttpHeaders().set('Content-Type', 'application/Json');
    let options = {
      headers: httpHeader,
    };
    return this.http.post<Book>(this.bookUrl, book, options);
  }

  getBooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }
}
