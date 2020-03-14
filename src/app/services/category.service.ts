import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http: HttpClient) { }
  apiKey = "06f8dd459e9747c4a55df53ec6eff4d6";

 
  getCategoryNews(categoryName){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=tr&category=' + categoryName +'&apiKey='+this.apiKey
    )
    .pipe(map((data: any) => data.articles));
    
  }
}
