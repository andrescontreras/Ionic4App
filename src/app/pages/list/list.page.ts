import { Component, OnInit } from '@angular/core';
import { PeliService } from 'src/app/services/peli.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private srv: PeliService) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {}
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  startRequest() {
    console.log('click');
    this.srv.request().subscribe(response => {
      console.log('response 1');
      this.srv.request().subscribe(response => {
        console.log('reponse 2');
        this.srv.request().subscribe(response => {
          console.log('response 3');
        });
      });
    });
  }
}
