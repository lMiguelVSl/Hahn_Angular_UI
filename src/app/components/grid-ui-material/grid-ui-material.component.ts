import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, firstValueFrom, map, take } from 'rxjs';
import { UserService } from 'src/app/services/user-services';
import { User } from '../models/User-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-ui-material',
  templateUrl: './grid-ui-material.component.html',
  styleUrls: ['./grid-ui-material.component.css']
})
export class GridUiMaterialComponent {

  displayedColumns: any[] = ['name', 'position', 'department', 'actions'];
  dataSource: User[] = [];


  constructor(private userService: UserService, private router: Router) {
    this.loadData();
  }

  loadData() {
    this.userService.getUsers().pipe(take(1)).subscribe(data => {
      this.dataSource = data;
    });
  }

  editUser(element: User) {
    this.router.navigate([`/actions`], { queryParams: element });
  }

  deleteUser(element: any) {
    this.userService.deleteUser(element.id).subscribe({
      next: (res) => {
        this.loadData();
        console.log('response delete user:', res);
      },
      error: (err) => {
        console.log('delete user error:', err);
      }
    });
  }
}
