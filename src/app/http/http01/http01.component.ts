import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import {PostService} from './post.service';

@Component({
  selector: 'app-http01',
  templateUrl: './http01.component.html',
  styleUrls: ['./http01.component.css']
})
export class Http01Component implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postService: PostService) {
  }

  ngOnInit() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content)
      .subscribe(responseData => {
        console.log(responseData);
        this.onFetchPosts();
      });
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onClearPosts() {
    this.isFetching = true;
    this.postService.deleteAllPosts().subscribe(() => {
      this.loadedPosts = [];
      this.isFetching = false;
    });
  }

}
