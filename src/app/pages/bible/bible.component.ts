import { Component, OnInit } from '@angular/core';
import { BibleService } from 'src/services/data/bible.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss']
})
export class BibleComponent implements OnInit {

  allBible!: any;
  allAudioBible!: any;
  constructor(private bibleService: BibleService, private router: Router) { }

  ngOnInit(): void {
    this.bibleService.getAllBible().subscribe((res: any) => {
      this.allBible = res.data;
    })
    this.bibleService.getAllAudioBible().subscribe((res: any) => {
      this.allAudioBible = res.data;
    })
  }

}
