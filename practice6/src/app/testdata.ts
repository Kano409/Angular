import { InMemoryDbService } from 'angular-in-memory-web-api';
export class testdata implements InMemoryDbService {
  createDb() {
    let bookDetails = [
      {
        id: 1,
        title: 'Java',
        author: 'King',
        pageno: 100,
        picture:
          'https://images-na.ssl-images-amazon.com/images/I/61+jPzV1gyL.jpg',
      },
      {
        id: 2,
        title: 'Python',
        author: 'Kano',
        pageno: 500,
        picture: 'https://www.guru99.com/images/1/python-crash-course.jpg',
      },
    ];
    return { books: bookDetails };
  }
}
