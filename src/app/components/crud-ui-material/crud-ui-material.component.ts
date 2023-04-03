import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user-services';
import { User } from '../models/User-model';



@Component({
  selector: 'app-crud-ui-material',
  templateUrl: './crud-ui-material.component.html',
  styleUrls: ['./crud-ui-material.component.css']
})
export class CrudUiMaterialComponent implements OnInit {

  selectedItem: any;
  isEditMode: boolean = false;
  User: User = { Id: 0, Name: '', Position: '', Company: '' };
  UserForm: FormGroup;
  userId: number = 0;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.UserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      position: [''],
      company: ['', Validators.required]
    });

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['name']) {
        this.isEditMode = true;
        this.userId = params['id'];
        this.UserForm.patchValue({
          firstName: params['name'],
          position: params['position'],
          company: params['company']
        });
      }
    });
  }

  addUser() {
    if (this.UserForm.status === 'VALID') {
      this.User.Name = this.UserForm.value.firstName;
      this.User.Position = this.UserForm.value.position;
      this.User.Company = this.UserForm.value.company;
      // this.userService.createUser(this.User).pipe().subscribe(_id => {
      //   id = _id
      //   if (id != 0) this.nagivate('grid');
      // }, (err) => {
      //   console.group('Error Adding user:', err);
      // }).unsubscribe();
      this.userService.createUser(this.User).pipe().subscribe(
        {
          next: (id) => {
            if (id != 0) this.nagivate('grid');
          },
          error: (err) => {
            console.group('Error Adding user:', err);
          }
        }
      );
    }
  }

  updateUser() {
    if (this.UserForm.status === 'VALID') {
      this.User.Id = this.userId;
      this.User.Name = this.UserForm.value.firstName;
      this.User.Position = this.UserForm.value.position;
      this.User.Company = this.UserForm.value.company;
      this.userService.updateUser(this.User).subscribe({
        next: (res) => {
          console.log('update response', res);
          this.router.navigate(['/item-list']);
        },
        error: (err) => {
          console.log('error updating user:', err);
        }
      });
    }
    this.isEditMode = false;
  }

  nagivate(page: string) {
    switch (page) {
      case 'grid':
        this.router.navigate(['/item-list']);
        break;
    }
  }
}
