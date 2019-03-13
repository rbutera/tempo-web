import { Injectable } from "@angular/core";
import uuid from "uuidv4";

function createPost(body: string = ""): Post {
  return {
    timestamp: Date.now(),
    createdAt: Date.now(),
    id: uuid(),
    author: "rai",
    body
  };
}
@Injectable({
  providedIn: "root"
})
export class PostsService {
  posts: Post[] = [createPost("hello world")];

  add(body: string) {
    this.posts.push(createPost(body));
  }

  clear() {
    this.posts = [];
  }

  constructor() {}
}

interface Post {
  body: string;
  timestamp: number;
  createdAt: number;
  id: string;
  author: string;
}
