
import { Component, OnInit } from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";

@Component({
  selector: "app-checkStatus",
  templateUrl: "./checkStatus.component.html",
  styleUrls: ["./checkStatus.component.scss"],
  animations: matxAnimations,
})
export class CheckStatusComponent implements OnInit {
  ngOnInit() {}
}