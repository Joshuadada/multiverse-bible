import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibleService } from 'src/services/data/bible.service'

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.scss']
})
export class VerseComponent implements OnInit {

  bibleId!: string;
  chapterId!: string;
  verses!: any;
  showVerse: boolean = true;
  verseContent!: string;

  constructor(private route: ActivatedRoute, private bibleService: BibleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.bibleId = params.get('id')
      this.chapterId = params.get('id1')
    })

    this.bibleService.getVerses(this.bibleId, this.chapterId).subscribe((res: any) => {
      this.verses = res.data;
      
    })
  }

  loadVerseContent(verseId: any){
    this.bibleService.getVerseContent(this.bibleId, verseId).subscribe((response: any) => {
      this.verseContent = response.data.content
    })
  }

}
