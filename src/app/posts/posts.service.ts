import { Injectable } from "@angular/core";
import uuid from "uuidv4";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";

function createPost(body: string = "<empty post>"): Post {
  return {
    timestamp: Date.now(),
    createdAt: Date.now(),
    author: "users/XeyxEcLvEGMQ4cy1E0mHHhpexk32",
    body
  };
}

@Injectable({
  providedIn: "root"
})
export class PostsService {
  posts: Observable<any>;

  add(body: string) {
    console.error("adding posts not yet implemented");
  }

  constructor(db: AngularFirestore) {
    this.posts = db.collection("posts").valueChanges();
  }
}

export interface Post {
  body: string;
  timestamp: number;
  createdAt: number;
  id: string;
  author: string;
}
