import { Component, OnInit } from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";

@Component({
  selector: "app-user-transactions-log",
  templateUrl: "./user-transactions-log.component.html",
  styleUrls: ["./user-transactions-log.component.scss"],
  animations: matxAnimations,
})

export class UserTransactionsLogComponent implements OnInit {
  ngOnInit() {}
}
