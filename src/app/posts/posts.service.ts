import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  posts: string[] = ["hello world"];

  add(post: string) {
    this.posts.push(post);
  }

  clear() {
    this.posts = [];
  }

  constructor() {}
}
