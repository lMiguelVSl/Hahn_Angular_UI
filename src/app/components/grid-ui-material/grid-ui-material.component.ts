import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from 'src/app/services/user-services';
import { User } from '../models/User-model';

@Component({
  selector: 'app-grid-ui-material',
  templateUrl: './grid-ui-material.component.html',
  styleUrls: ['./grid-ui-material.component.css']
})
export class GridUiMaterialComponent implements OnInit {

  displayedColumns: any[] = ['name', 'position', 'department', 'actions'];
  dataSource: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadData();
    console.log('data', this.dataSource);
  }

  async loadData() {
    await this.userService.getUsers()
      .pipe()
      .subscribe(data => this.dataSource = data)
      .unsubscribe();
  }

  editEmployee(element: any) {

  }

  deleteEmployee(element: any) {

  }
}
