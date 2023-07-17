import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  /** GET users from the server */
  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.postsUrl);
  }

  getAlbums(): Observable<any> {
    return this.http.get<any>(this.albumsUrl);
  }
}
