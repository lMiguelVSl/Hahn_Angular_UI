import { Component } from '@angular/core';

class Employee {
  constructor(public id: number, public name: string, public position: string, public department: string) { }
}

@Component({
  selector: 'app-crud-ui-material',
  templateUrl: './crud-ui-material.component.html',
  styleUrls: ['./crud-ui-material.component.css']
})
export class CrudUiMaterialComponent {

  dataSource: Employee[] = [
    new Employee(1, 'Miguel', 'Full Stack Developer', 'Engineering')
  ];
  selectedItem: any;
  displayedColumns: any[] = ['id', 'name', 'position', 'department', 'actions'];
  isEditMode: boolean = false;

  addEmployee() {

  }

  editEmployee(item: any) {

  }

  deleteEmployee(item: any) {

  }

  updateEmployee() {

  }
}
