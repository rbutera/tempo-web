import { Injectable } from '@angular/core'
import uuid from 'uuidv4'
import { Observable } from 'rxjs'
import { AngularFirestore } from '@angular/fire/firestore'

export interface PostBody {
  body: string
  tags: string[]
  timestamp: Date
}

/**
 * creates a post object with prefilled metadata
 * @param postBody
 */

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  createPost(
    postBody: PostBody = {
      body: '<empty post>',
      tags: [''],
      timestamp: new Date()
    }
  ) {
    const { body, timestamp, tags } = postBody
    const post = {
      timestamp,
      createdAt: new Date(),
      author: 'user/XeyxEcLvEGMQ4cy1E0mHHhpexk32',
      tags,
      body
    }
    console.error('adding posts not yet implemented')
    return this.db.collection('posts').add(post)
  }

  getPosts() {
    return this.db
      .collection('posts', ref => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
  }

  updatePost(post: Post) {
    const id = post.id
    delete post.id
    return this.db.doc(`posts/${id}`).update(post)
  }

  deletePost(post: Post) {
    return this.db.doc(`posts/${post.id}`).delete()
  }

  constructor(private db: AngularFirestore) {}
}

export interface Post {
  id: string
  body: string
  timestamp: Date
  createdAt: Date
  author: string
  tags: string[]
}
