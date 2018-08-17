import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentData,
} from 'angularfire2/firestore';
import { IUser, IDevices } from '../interfaces/user-document';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  user: Observable<firebase.User>;
  userDoc: AngularFirestoreDocument;
  uid = 'JPbyCEA1GfQRHgURY77WmipB6kP2';

  deviceCollection: AngularFirestoreCollection<DocumentData>;
  messageCollection: AngularFirestoreCollection<DocumentData>;
  mobileCollection: AngularFirestoreCollection<DocumentData>;

  constructor(
    private auth: AuthenticationService,
    private afs: AngularFirestore,
  ) {
    this.user = this.auth.user;
    // this.user.subscribe(res => {
    //   this.uid = res.uid;
    // });
    this.userDoc = this.afs.doc<IUser>('users/' + this.uid);
    this.deviceCollection = this.userDoc.collection('/devices');
    this.mobileCollection = this.userDoc.collection('/mobiles');
    this.messageCollection = this.userDoc.collection('/messages');
  }
}
