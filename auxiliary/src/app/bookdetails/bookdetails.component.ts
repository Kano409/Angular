import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css'],
})
export class BookdetailsComponent implements OnInit {
  // data binding
  books!: Observable<Book[]>;

  // inject service
  constructor(
    private bookserviceService: BookserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // data receive in books
    this.books = this.bookserviceService.getBooks();
  }

  close() {
    this.router.navigate([{ outlets: { bookList: null } }]);
  }
}
