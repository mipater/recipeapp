import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import {PostService} from './post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-http01',
  templateUrl: './http01.component.html',
  styleUrls: ['./http01.component.css']
})
export class Http01Component implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(error => {
      this.error = error;
    });

    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    });
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content)
      .subscribe(responseData => {
        console.log(responseData);
        this.onFetchPosts();
      }, error => {
        this.postService.error.next(error.message);
      });
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  onClearPosts() {
    this.isFetching = true;
    this.postService.deleteAllPosts().subscribe(() => {
      this.loadedPosts = [];
      this.isFetching = false;
    });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onHandleError() {
    this.error = null;
  }
}
