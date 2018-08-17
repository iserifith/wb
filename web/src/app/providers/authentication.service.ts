import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.authState;
  }

  googleLogin(): Promise<any> {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
