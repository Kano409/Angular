import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

export class testdata implements InMemoryDbService {
  createDb() {
    // 1. crearting api
    let bookDetails = [
      {
        id: 101,
        name: 'web application',
        category: 'computer',
      },
      {
        id: 102,
        name: 'ancient india',
        category: 'history',
      },
      {
        id: 103,
        name: 'fundamental of machine',
        category: 'mechanics',
      },
      {
        id: 104,
        name: 'road construction',
        category: 'civil',
      },
    ];
    return { books: bookDetails };
  }
}
