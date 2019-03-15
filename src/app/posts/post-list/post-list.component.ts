import { Component, OnInit } from '@angular/core'
import { PostsService, Post, PostBody } from '../posts.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  subscription: Subscription
  posts: Post[]

  constructor(public postsService: PostsService) {}

  create(postBody: PostBody) {
    return this.postsService.createPost(postBody)
  }

  update(postBody: PostBody) {
    return this.postsService.createPost(postBody)
  }

  ngOnInit() {
    this.subscription = this.postsService.getPosts().subscribe(data => {
      this.posts = data.map(e => {
        const docData = e.payload.doc.data()
        console.debug('e.payload.doc.data()', docData)
        return {
          id: e.payload.doc.id,
          timestamp: docData.timestamp.toDate(),
          createdAt: docData.createdAt.toDate(),
          ...e.payload.doc.data()
        } as Post
      })
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
