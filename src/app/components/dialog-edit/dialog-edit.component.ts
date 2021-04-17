import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from 'src/app/models';
@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss'],
})
export class DialogEditComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { editedPost: Post }) {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
