import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import {map} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content};
    return this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-9da49.firebaseio.com/posts.json',
        postData
      );
  }

  deleteAllPosts() {
    return this.http
      .delete('https://ng-complete-guide-9da49.firebaseio.com/posts.json');
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-9da49.firebaseio.com/posts.json')
      .pipe(map((responseData) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key});
          }
        }
        return postsArray;
      }));
  }
}