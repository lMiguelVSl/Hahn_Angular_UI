import { Component } from '@angular/core';
import { User } from '../models/User-model';

@Component({
  selector: 'app-grid-ui-material',
  templateUrl: './grid-ui-material.component.html',
  styleUrls: ['./grid-ui-material.component.css']
})
export class GridUiMaterialComponent {

  displayedColumns: any[] = ['name', 'position', 'department', 'actions'];
  dataSource: User[] = [
    new User('Miguel', 'Full Stack Developer', 'Engineering')
  ];

  editEmployee(element: any) {

  }

  deleteEmployee(element: any) {

  }
}
