import { Component, OnInit } from '@angular/core';
import { ScreensizeService } from 'src/app/services/screensize.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  isDesktop: boolean;
  constructor(
    private screensize: ScreensizeService
  ) {     
    screensize.isDesktopView().subscribe((isDesktop) => {
      this.isDesktop = isDesktop;
    });
  }

  ngOnInit() {
  }

}
