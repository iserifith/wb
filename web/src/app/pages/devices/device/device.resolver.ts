import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { IDevices } from '../../../interfaces/user-document';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DocumentService } from '../../../providers/document.service';

@Injectable()
export class DeviceResolver implements Resolve<any> {
  device: IDevices;
  constructor(private _doc: DocumentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): IDevices | any {
    const id = route.params['id'];
    // return this._doc.deviceCollection
    //   .doc<IDevices>(id)
    //   .valueChanges()
    //   .subscribe((res: IDevices) => {
    //     return res;
    //   });

    return this.device;
  }
}
