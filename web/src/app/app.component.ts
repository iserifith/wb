import { Component } from '@angular/core';
import { NbSidebarService, NbMenuItem, NbMenuService } from '@nebular/theme';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NbMenuService, NbMenuInternalService],
})
export class AppComponent {
  title = 'app';

  constructor(private sidebarService: NbSidebarService) {}
}
