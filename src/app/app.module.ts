import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BibleComponent } from './pages/bible/bible.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiKeyInterceptor } from 'src/services/interceptors/api-key.interceptor'
import { BibleService } from '../services/data/bible.service';
import { IndividualBibleComponent } from './pages/individual-bible/individual-bible.component';
import { ChapterComponent } from './pages/chapter/chapter.component';
import { VerseComponent } from './pages/verse/verse.component';
import { SpaceAfterFirstPipe } from 'src/pipes/space-after-first.pipe';
import { PreloaderComponent } from './core/preloader/preloader.component'
import { PreloaderInterceptor } from '../services/interceptors/preloader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BibleComponent,
    IndividualBibleComponent,
    ChapterComponent,
    VerseComponent,
    SpaceAfterFirstPipe,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PreloaderInterceptor,
      multi: true
    },
    BibleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
