import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'; 

// String urlString = "https://www.googleapis.com/customsearch/v1?q=tribal+News&key=" + key + "&cx=" + cx + "&alt=json";
@Injectable({
  providedIn: 'root',
})
export class GoogleSearchService {
  apiUrl = 'https://www.googleapis.com/customsearch/v1';

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const params = new HttpParams()
      .set('key', 'AIzaSyDSwE0aDW-X5WaXcKhYIl-NAMss9Ig1ik4')
      .set('cx', '60ac6dd04dad64e86')
      .set('q', query);

    return this.http.get(this.apiUrl, { params });
  }
}
