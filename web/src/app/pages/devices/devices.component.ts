import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../providers/document.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  devices;
  url = 'http://localhost:4450/init';

  constructor(
    private _doc: DocumentService,
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit() {
    this._doc.deviceCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          }),
        ),
      )
      .subscribe(res => {
        this.devices = res;
      });
  }

  addDevice() {
    // this._doc.deviceCollection.add({
    //   message_sent: 1234,
    //   mobile_no: '0189047264',
    //   name: 'seri',
    //   status: false,
    // });
  }

  onDevice(id, index) {
    this.http
      .post('http://localhost:4450/' + id, {
        context: 'init',
        id: id,
      })
      .subscribe(res => {
        window.open('http://localhost:4450/scan/' + id, '_blank');
        this.router.navigate(['/devices', id]);
      });
  }

  offDevice(id) {
    console.log(id);
  }
}
