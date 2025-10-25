import { Component, OnInit } from '@angular/core';
import { matxAnimations } from "app/shared/animations/matx-animations";

@Component({
	selector: 'app-enrollment',
	templateUrl: './enrollment.component.html',
 	 styleUrls: ["./enrollment.component.scss"],
  animations: matxAnimations
})

export class EnrollmentComponent implements OnInit {

	ngOnInit() { }
}