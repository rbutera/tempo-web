import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"]
})
export class AddPostComponent {
  addPostForm = this.fb.group({
    body: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private postsService: PostsService) {}

  onSubmit() {
    this.postsService.add(this.addPostForm.value.body);
    this.addPostForm.reset();
  }
}
