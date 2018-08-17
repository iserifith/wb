import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from '../../../providers/document.service';
import { IDevices } from '../../../interfaces/user-document';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  NavigationEnd,
} from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit, OnDestroy {
  device: IDevices;
  loading = true;
  id: string;
  status: boolean;

  private deviceSubs: Subscription;

  constructor(
    private _doc: DocumentService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.deviceSubs = this._doc.deviceCollection
      .doc<IDevices>(this.id)
      .valueChanges()
      .subscribe(data => {
        this.device = data;
        this.loading = false;
      });
  }

  url(id, args: string) {
    return `http://localhost:4450/${id}/${args}`;
  }

  ngOnDestroy() {
    this.deviceSubs.unsubscribe();
  }

  onDevice() {
    this.http.post(this.url(this.id, 'init'), {}).subscribe(res => {
      console.log(res);
    });
  }

  deviceState() {
    this.http.post(this.url(this.id, 'status'), {}).subscribe((res: any) => {
      // this.status = res.status;
      console.log(res);
    });
    // window.open(this.url(this.id, 'status'), '_blank');
  }
}
