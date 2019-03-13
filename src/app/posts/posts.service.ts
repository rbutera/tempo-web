import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  posts: Post[];

  add(body: string) {
    const post = {
      timestamp: Date.now(),
      createdAt: Date.now(),
      id: uuid(),
      author: "rai",
      body
    };
    this.posts.push(post);
  }

  clear() {
    this.posts = [];
  }

  constructor() {}
}

interface Post {
  body: string[];
  timestamp: Date;
  createdAt: Date;
  id: string;
  author: string;
}
