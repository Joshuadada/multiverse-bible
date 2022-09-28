import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibleService } from 'src/services/data/bible.service'

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  bibleId!: string;
  bookId!: string;
  chapters!: any;
  constructor(private route: ActivatedRoute, private bibleService: BibleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.bibleId = params.get('id')
      this.bookId = params.get('id1')
    })

    this.bibleService.getChapters(this.bibleId, this.bookId).subscribe((res) => {
      this.chapters = res.data.chapters;
    })
  }

}
