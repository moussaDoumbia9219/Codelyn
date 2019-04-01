import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl = "https://jsonplaceholder.typicode.com/photos";
  constructor(private http: HttpClient) {}

  allPhotos() {
    return this.http.get(this.baseUrl);
  }

  getPhoto(id) {
    return this.http.get(this.baseUrl + "/" + id);
  }
}
