import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-services';
import { User } from '../models/User-model';



@Component({
  selector: 'app-crud-ui-material',
  templateUrl: './crud-ui-material.component.html',
  styleUrls: ['./crud-ui-material.component.css']
})
export class CrudUiMaterialComponent {

  selectedItem: any;
  isEditMode: boolean = false;
  User: User = new User('', '', '');
  UserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.UserForm = this.formBuilder.group({
      name: ['', Validators.required],
      position: [''],
      company: ['', Validators.required]
    });

  }

  addUser() {
    if (this.UserForm.status === 'VALID') {
      let id = 0;
      this.userService.createUser(this.User).pipe().subscribe(_id => _id = id);
      if (id != 0) this.nagivate('grid');
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

  nagivate(page: string) {
    switch (page) {
      case 'grid':
        this.router.navigate(['/item-list']);
        break;
    }
  }
}
