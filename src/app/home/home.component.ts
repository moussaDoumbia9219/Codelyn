import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { query } from "@angular/core/src/render3";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  dataPhotos: any = [];
  constructor(private api: ApiService, private route: Router) {}

  ngOnInit() {
    this.api.allPhotos().subscribe(data => {
      this.dataPhotos = data;
    });
  }

  // goToDetail(id) {
  //   this.route.navigate(["/detail"], { queryParams: id });
  // }
}
