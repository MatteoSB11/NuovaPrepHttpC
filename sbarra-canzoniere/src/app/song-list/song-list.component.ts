import { Component, Input } from '@angular/core';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  @Input() canz! : Song
  @Input() det! : Song[]

  dettagli(){
    this.det.push(new Song(this.canz.data_uscita, this.canz.durata, this.canz.title))
    console.log(" Titolo: " + this.canz.title + " Data Uscita: " + this.canz.data_uscita + " Durata: " + this.canz.durata)
  }

}
