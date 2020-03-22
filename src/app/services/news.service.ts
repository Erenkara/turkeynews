import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  apiKey = "06f8dd459e9747c4a55df53ec6eff4d6";
  path = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + this.apiKey;

  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/top-headlines?country=tr&apiKey=' +
          this.apiKey
      )
      .pipe(map((data: any) => data.articles));
  }

  getArticlesJavaScript(): Observable<any> {
    return this.http
      .get(
        'https://newsapi.org/v2/everything?q=javascript&sortBy=latest&apiKey=' +
          this.apiKey
      )
      .pipe(map((data: any) => data.articles));
  }
}
