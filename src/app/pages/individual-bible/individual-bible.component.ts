import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibleService } from 'src/services/data/bible.service'

@Component({
  selector: 'app-individual-bible',
  templateUrl: './individual-bible.component.html',
  styleUrls: ['./individual-bible.component.scss']
})
export class IndividualBibleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bibleService: BibleService) { }

  bibleId!: string;
  allBook!: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.bibleId = params.get('id')
    })

    this.bibleService.getBibleBooks(this.bibleId).subscribe((res: any) => {
      this.allBook = res.data
    })
  }

}
