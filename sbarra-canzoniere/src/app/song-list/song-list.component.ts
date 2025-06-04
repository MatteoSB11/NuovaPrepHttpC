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

}
