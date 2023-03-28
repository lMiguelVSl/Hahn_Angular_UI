import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User-model';



@Component({
  selector: 'app-crud-ui-material',
  templateUrl: './crud-ui-material.component.html',
  styleUrls: ['./crud-ui-material.component.css']
})
export class CrudUiMaterialComponent implements OnInit {

  selectedItem: any;
  isEditMode: boolean = false;
  User: User = new User('', '', '');
  UserForm: FormGroup;

  constructor() {
    this.UserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required)
    });

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    //TODO GET API WITH .NET
  }

  addUser() {
    if (this.UserForm.status === 'VALID') {
      //TODO CREATE API WITH .NET
    }
    console.log('add User:', this.UserForm);
  }

  editUser(item: any) {
    console.log('element edit:', item);
    //TODO UPDATE/PATCH API .NET
  }

  deleteUser(item: any) {
    console.log('element delete:', item);
    //TODO DELETE API .NET
  }

  updateUser() {
    //TODO UPDATE API .NET
  }
}
