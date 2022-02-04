import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy_loding';
  constructor(private viewcontainer:ViewContainerRef, private cfr:ComponentFactoryResolver){ }
  async adminListload(){
    this.viewcontainer.clear()
    const {AdminListComponent} = await import('./admin-list/admin-list.component');
    this.viewcontainer.createComponent(
      this.cfr.resolveComponentFactory(AdminListComponent)
    )
  }
  async userListload(){
    this.viewcontainer.clear()
    const {UserListComponent} = await import('./user-list/user-list.component');
    this.viewcontainer.createComponent(
      this.cfr.resolveComponentFactory(UserListComponent)
    )
  }
}
