import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  users: { id: string; name: string };
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.users = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"],
    };

    this.paramSubscription = this.route.params.subscribe((params: Params) => {
      this.users.id = params["id"];
      this.users.name = params["name"];
    });
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
