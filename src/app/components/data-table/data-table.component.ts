import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Post } from '../../models';
import { MatDialog } from '@angular/material/dialog';
import { DialogMapComponent } from '../dialog-map/dialog-map.component';
import { ImageCityComponent } from '../image-city/image-city.component';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';
import { DialogCreateComponent } from '../dialog-create/dialog-create.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [ImageCityComponent],
})
export class DataTableComponent implements OnInit {
  title = 'docker-angular';
  displayedColumns: string[] = ['name', 'content', 'map', 'edit', 'remove'];

  constructor(
    public apiService: ApiService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.apiService.getPosts();
  }
  openMap(lat: number, long: number) {
    this.dialog.open(DialogMapComponent, {
      data: { lat, long },
      minWidth: '100%',
      minHeight: '50%',
    });
  }
  editPost(editedPost: Post) {
    this.dialog.open(DialogEditComponent, {
      data: editedPost,
      minWidth: '50%',
    });
  }

  createPost() {
    this.dialog.open(DialogCreateComponent, {
      minWidth: '50%',
    });
  }
  removePost(idToRemove: number, post: Post) {
    const confirmDelete = confirm(
      'Are you sure you want to delete ' + post.title + ' ?'
    );
    confirmDelete && this.apiService.removePost(idToRemove);
    let snackBarRef = this.snackBar.open(post.title + ' was removed', 'Undo', {
      duration: 5000,
    });
    snackBarRef.onAction().subscribe(() => {
      this.apiService.createNewPost(post);
    });
  }
}
