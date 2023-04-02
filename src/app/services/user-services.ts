import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Endpoints } from './endpoints';
import { User } from '../components/models/User-model';
import { environment } from 'src/environment/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<User[]>(`${environment.baseUrl}${Endpoints.user.getUser.path()}`);
    }

    createUser(user: User) {
        return this.http.post<number>(`${environment.baseUrl}${Endpoints.user.createUser.path()}`, user);
    }

    updateUser(user: User) {
        return this.http.put(`${environment.baseUrl}${Endpoints.user.updateUser.path()}`, user);
    }

    deleteUser(userId: any) {
        return this.http.delete(`${environment.baseUrl}${Endpoints.user.updateUser.path()}?Id=${userId}`);
    }

}