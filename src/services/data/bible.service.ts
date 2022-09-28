import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  baseUrl = 'https://api.scripture.api.bible'

  constructor(private http: HttpClient) { }

  getAllBible(){
    return this.http.get<any>(`${this.baseUrl}/v1/bibles`)
  }
  getBibleBooks(bibleId: any){
    return this.http.get<any>(`${this.baseUrl}/v1/bibles/${bibleId}/books?include-chapters=${true}&include-chapters-and-sections=${true}`)
  }
  getAllAudioBible(){
    return this.http.get<any>(`${this.baseUrl}/v1/audio-bibles`)
  }
  getAudioBibleBooks(audioBibleId: any){
    return this.http.get<any>(`${this.baseUrl}/v1/audio-bibles/${audioBibleId}`)
  }
  getChapters(bibleId: any, bookId: any){
    return this.http.get<any>(`${this.baseUrl}/v1/bibles/${bibleId}/books/${bookId}?include-chapters=${true}`)
  }
  getVerses(bibleId: any, chapterId: any){
    return this.http.get<any>(`${this.baseUrl}/v1/bibles/${bibleId}/chapters/${chapterId}/verses`)
  }
  getVerseContent(bibleId: any, verseId: any){
    return this.http.get<any>(`${this.baseUrl}/v1/bibles/${bibleId}/verses/${verseId}?content-type=html&include-notes=true&include-titles=${true}&include-chapter-numbers=${true}&include-verse-numbers=${true}&include-verse-spans=true&use-org-id=${true}`)
  }
}
