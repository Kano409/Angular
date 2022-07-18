import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        "https://me-bhi-chowkidar-default-rtdb.firebaseio.com/posts.json",
        postData,
        {
          observe: "response",
        }
      )
      .subscribe(
        (responceData) => {
          console.log(responceData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    let serachParams = new HttpParams();
    serachParams = serachParams.append("school", "sbmvs");
    serachParams = serachParams.append("college", "cbpcc");

    return this.http
      .get<{ [key: string]: Post }>(
        "https://me-bhi-chowkidar-default-rtdb.firebaseio.com/posts.json",
        {
          headers: new HttpHeaders({ "Custom-Header": "Hello" }),
          //params: new HttpParams().set("print", "king"),
          params: serachParams,
          responseType: "json",
        }
      )
      .pipe(
        map(
          (
            responceData
            //{ [key: string]: Post }
          ) => {
            const postsArray: Post[] = [];
            for (const key in responceData) {
              if (responceData.hasOwnProperty(key)) {
                postsArray.push({ ...responceData[key], id: key });
              }
            }
            return postsArray;
          }
        ),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(
        "https://me-bhi-chowkidar-default-rtdb.firebaseio.com/posts.json",
        {
          observe: "events",
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // can't access the body
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.type);
          }
        })
      );
  }
}
