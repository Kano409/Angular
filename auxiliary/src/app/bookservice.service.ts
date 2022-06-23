import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';

const BOOKS: Book[] = [
  {
    id: 1,
    name: 'web application',
    author: 'kano',
    status: 'submitted',
  },
  {
    id: 2,
    name: 'ancient india',
    author: 'abhu',
    status: 'not submitted',
  },
  {
    id: 3,
    name: 'road construction',
    author: 'rudra',
    status: 'submitted',
  },
  {
    id: 4,
    name: 'paryavaran',
    author: 'shvansh',
    status: 'not submitted',
  },
];

let bookobservables = Observable.of(BOOKS);

@Injectable({
  providedIn: 'root',
})
export class BookserviceService {
  
  // return book data win which component we call
  getBooks():Observable<Book[]>{
    return bookobservables;
  }
  constructor() {}
}
