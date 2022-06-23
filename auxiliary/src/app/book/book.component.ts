import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  // data binding
  books!: Observable<Book[]>;

  // inject service
  constructor(
    private bookserviceService: BookserviceService
  ) {}

  ngOnInit(): void {
    // data receive in books
    this.books = this.bookserviceService.getBooks();
  }


}
