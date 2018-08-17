import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { DocumentService } from '../../providers/document.service';
import { IUser } from '../../interfaces/user-document';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: IUser;
  items: NbMenuItem[] = [
    {
      title: 'DASHBOARD',
      link: '/dashboard',
      icon: 'fa fa-th',
    },
    {
      title: 'DEVICES',
      link: '/devices',
      icon: 'fa fa-mobile',
    },
    {
      title: 'MESSAGES',
      link: '/messages',
      icon: 'fa fa-comments-o',
    },
    {
      title: 'MOBILE NUMBERS',
      link: '/mobiles',
      icon: 'fa fa-th-list',
    },
    {
      title: 'LOG OUT',
      link: '/',
      icon: 'fa fa-sign-out',
    },
  ];
  constructor(
    private sidebarService: NbSidebarService,
    private _doc: DocumentService,
  ) {}

  ngOnInit() {}

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
