import { IPelis } from "./../models/IPelis.interface";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PeliService {
  private url: string;
  private apiKey: string = "e04c60b4";
  constructor(private http: HttpClient) {}

  searchMovies(title: string, type: string) {
    this.url = `http://www.omdbapi.com/?s=${encodeURI(
      title
    )}&type=${type}&apikey=${this.apiKey}`;
    return this.http
      .get<IPelis>(this.url)
      .pipe(map(result => result["Search"]));
  }

  getDetails(id: string) {
    return this.http.get<IPelis>(
      `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`
    );
  }
}
