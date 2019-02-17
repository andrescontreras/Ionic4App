import { PeliService } from "./../../../services/peli.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"]
})
export class DetailsPage implements OnInit {
  content: any = null;
  constructor(
    private peliService: PeliService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.activateRoute.snapshot.paramMap.get("id");
    this.peliService.getDetails(id).subscribe(result => {
      this.content = result;
    });
  }
}
