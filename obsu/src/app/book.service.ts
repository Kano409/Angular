//2. use api in service using url
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  //3. create url
  bookUrl = '/api/books';
  constructor(private http: HttpClient) {}
  //Book[] -> type of observable
  getBooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }
}
