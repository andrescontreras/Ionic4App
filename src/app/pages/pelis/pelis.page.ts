import { IPelis } from "./../../models/IPelis.interface";
import { PeliService } from "./../../services/peli.service";
import { Component, OnInit, Pipe, PipeTransform } from "@angular/core";
import { Observable } from "rxjs";
@Pipe({ name: "sicon" })
@Component({
  selector: "app-pelis",
  templateUrl: "./pelis.page.html",
  styleUrls: ["./pelis.page.scss"]
})
export class PelisPage implements OnInit, PipeTransform {
  results: Observable<IPelis>;
  term: string = "";
  type: string = "";
  constructor(private peliService: PeliService) {}

  public iconos = [
    {
      type: "movie",
      icon: "videocam"
    },
    {
      type: "series",
      icon: "ty"
    },
    {
      type: "episode",
      icon: "tablet-portrait"
    }
  ];

  ngOnInit() {}
  searchChanged(): void {
    this.results = this.peliService.searchMovies(this.term, this.type);
  }

  setIcon(type: string): string {
    this.iconos.forEach(element => {
      if (element.type === type) return element.icon;
    });
    return "";
  }
  transform(value: string): string {
    return this.setIcon(value);
    throw new Error("Method not implemented.");
  }
}
