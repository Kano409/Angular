import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let bookDetails = [
      {id:1, name: 'java', author: 'king', price:100 },
      {id:2, name: 'python', author: 'kano',price:500 },
    ];
    return { books: bookDetails };
  }
}
