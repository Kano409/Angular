import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./post.module";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPost();
  }

  onCreatePost(postData: Post) {
    // Send Http request

    this.http
      .post<{ name: string }>(
        "https://me-bhi-chowkidar-default-rtdb.firebaseio.com/myData.json",
        postData
      )
      .subscribe((responceData) => {
        console.log(responceData);
      });
    // subscribe(responce)
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPost();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPost() {
    this.http
      .get<{ [key: string]: Post }>(
        "https://me-bhi-chowkidar-default-rtdb.firebaseio.com/myData.json"
      )
      .pipe(
        map((responceData) => {
          const postArray: Post[] = [];
          for (const key in responceData) {
            if (responceData.hasOwnProperty(key)) {
              postArray.push({ ...responceData[key], id: key });
            }
          }
          return postArray;
        })
      )
      .subscribe((posts) => {
        console.log(posts);
      });
  }
}
