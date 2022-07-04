//2. use api in service using url
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
@Injectable({
  providedIn: 'root',
})
export class BookService {
  //3. create url -> take a bookUrl , pass it in observable and using get() return
  bookUrl = '/api/books';
  constructor(private http: HttpClient) {}
  //Book[] -> type of observable

  // fetch data from api (call api)
  getBooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }

  // 9. observable method that post data
  createBook(book: Book): Observable<Book> {
    let httpHeader = new HttpHeaders().set('Content-Type', 'application/Json');
    let options = {
      headers: httpHeader,
    };
    return this.http.post<Book>(this.bookUrl, book, options);
  }

  // 14. method that delete data
  deleteBooksFromStore(bookid: number): Observable<number> {
    let httpHeader = new HttpHeaders().set('Content-Type', 'application/Json');
    let options = {
      headers: httpHeader,
    };
    return this.http.delete<number>(this.bookUrl + '/' + bookid);
  }

  // 15. method that update data
  updateBooksFromStore(book: Book): Observable<number> {
    let httpHeader = new HttpHeaders().set('Content-Type', 'application/Json');
    let options = {
      headers: httpHeader,
    };
    return this.http.put<number>(this.bookUrl + '/' + book.id, book, options);
  }
}
