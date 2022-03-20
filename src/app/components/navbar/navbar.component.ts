import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScreensizeService } from 'src/app/services/screensize.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isDesktop: boolean;
  constructor(private router: Router, private screensize: ScreensizeService) {
    screensize.isDesktopView().subscribe((isDesktop) => {
      this.isDesktop = isDesktop;
    });
  }
  ngOnInit() {}
  home(){
    this.router.navigate(['home']);
  }
  stats(){
    this.router.navigate(['stats']);
  }
  profile(){
    this.router.navigate(['profile']);
  }
}
