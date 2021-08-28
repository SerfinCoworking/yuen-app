import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { AuthService } from '@core/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarHideEvent = new EventEmitter();
  @ViewChild('toggleButton', {static: true}) toggleButton: any;

  faUser = faUser; 
  faBars = faBars; 
  faBell = faBell; 
  hideSidebar = false;
  userBtnDropdownShow: boolean = false;
  profile: any;

  
  constructor( public auth: AuthService) { }
  
  ngOnInit(): void {
    this.auth.profile.subscribe((profile) => {
      this.profile = profile;
    });
  }

  toggleSidebarHide():void{
    this.hideSidebar = !this.hideSidebar;
    this.toggleSidebarHideEvent.emit(this.hideSidebar);
  }
  
  toggleMenu():void{
    this.userBtnDropdownShow = !this.userBtnDropdownShow;
  }

  hideMenu(e: any):void{
    if(e !== this.toggleButton.nativeElement && this.userBtnDropdownShow) {
      this.userBtnDropdownShow = !this.userBtnDropdownShow;
    }
  }
    
  logout():void {
    this.auth.logout();
  }

}
