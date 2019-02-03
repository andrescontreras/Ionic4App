import { IPelis } from "./../../models/IPelis.interface";
import { PeliService } from "./../../services/peli.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-pelis",
  templateUrl: "./pelis.page.html",
  styleUrls: ["./pelis.page.scss"]
})
export class PelisPage implements OnInit {
  results: Observable<IPelis>;
  term: string = "";
  type: string = "";
  constructor(private peliService: PeliService) {}

  ngOnInit() {}
  searchChanged(): void {
    this.results = this.peliService.searchMovies(this.term, this.type);
  }
}
