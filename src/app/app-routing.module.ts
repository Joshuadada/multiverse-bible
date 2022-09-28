import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BibleComponent } from './pages/bible/bible.component';
import { IndividualBibleComponent } from './pages/individual-bible/individual-bible.component';
import { ChapterComponent } from './pages/chapter/chapter.component';
import { VerseComponent } from './pages/verse/verse.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "bible",
    component: BibleComponent
  },
  {
    path: "bible-book/:id",
    component: IndividualBibleComponent
  },
  {
    path: "bible-chapter/:id/:id1",
    component: ChapterComponent
  },
  {
    path: "bible-verse/:id/:id1",
    component: VerseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
