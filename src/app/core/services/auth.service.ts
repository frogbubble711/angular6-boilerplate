import {Injectable} from '@angular/core';
import {distinctUntilChanged} from 'rxjs/operators';
import {BehaviorSubject, ReplaySubject} from 'rxjs';

import {UserModel} from '../models';

@Injectable()
export class AuthService {
  public currentUserSubject = new BehaviorSubject<UserModel>({} as UserModel);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  public isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor() {
  }

  public getCurrentUser(): UserModel {
    return this.currentUserSubject.value;
  }
}
