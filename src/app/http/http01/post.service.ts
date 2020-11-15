import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post} from './post.model';
import {map, catchError, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content};
    return this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-9da49.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      );
  }

  deleteAllPosts() {
    return this.http
      .delete(
        'https://ng-complete-guide-9da49.firebaseio.com/posts.json',
        {
          observe: 'events',
          responseType: 'json'
        }
      )
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Sent) {
            console.log('Request Sent');
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
          console.log(event);
        })
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('new', 'ok');
    const headers = new HttpHeaders({
      'Custom-Header' : 'Hello',
      'ETA': '10'
    });
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-9da49.firebaseio.com/posts.json',
        {
          headers,
          params: searchParams
        }
      )
      .pipe(map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }
}
