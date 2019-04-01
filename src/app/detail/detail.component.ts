import { ApiService } from "./../api.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  photoId: any;
  photoElement: any;
  constructor(private activateRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      if (data.id) {
        this.photoId = data.id;
        this.getPhoto(this.photoId);
      }
    });
  }

  getPhoto(id) {
    this.api.getPhoto(id).subscribe(data => {
      if (data) {
        this.photoElement = data;
      }
    });
  }
}
