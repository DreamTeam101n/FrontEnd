import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreensizeService } from 'src/app/services/screensize.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isDesktop: boolean;
  isLogged = false;
  constructor(private router: Router, private screensize: ScreensizeService, private token: TokenStorageService) {
    screensize.isDesktopView().subscribe((isDesktop) => {
      this.isDesktop = isDesktop;
    });
  }
  ngOnInit() {
    if(this.token.getUser()){
      this.isLogged = true;
    }
    console.log(this.isLogged);
  }
  home(){
    this.router.navigate(['home']);
  }
  stats(){
    this.router.navigate(['stats']);
  }
  profile(){
    this.router.navigate(['profile']);
  }
  login(){
    this.router.navigate(['login']);
  }
  register(){
    this.router.navigate(['register']);
  }
  logout(){
    this.token.signOut();
    window.location.reload();
  }
}
