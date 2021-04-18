import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/models';
@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss'],
})
export class DialogEditComponent implements OnInit {
  formGroup = this.fb.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    content: ['', Validators.required],
    lat: ['', Validators.required],
    long: ['', Validators.required],
    image_url: ['', Validators.required],
    created_at: ['', Validators.required],
    updated_at: ['', Validators.required],
  });
  post: any;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Post
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.data &&
      this.formGroup.setValue({
        id: this.data.id,
        title: this.data.title,
        content: this.data.content,
        lat: this.data.lat,
        long: this.data.long,
        image_url: this.data.image_url,
        created_at: this.data.created_at,
        updated_at: this.data.updated_at,
      });
  }

  onSubmit(post: any) {
    console.log(post);
  }
}
