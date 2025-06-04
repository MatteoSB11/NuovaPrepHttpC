import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Song } from './models/song.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'sbarra-canzoniere';
  data! : Object;
  loading! : boolean;
  obs! : Observable<Object>
  http : HttpClient

  constructor(http : HttpClient){
    this.http = http
  }

  makeChiamata(){
    this.loading = true
    this.obs = this.http.get<Song[]>('https://my-json-server.typicode.com/malizia-g/hotel/short-songlist')
    this.obs.subscribe(this.getData)
  }

  getData = (d : Object) => {
    this.data = d
    this.loading = false
    console.log(this.data)
  }
  ngOnInit(): void {
    this.makeChiamata()
  }

}
