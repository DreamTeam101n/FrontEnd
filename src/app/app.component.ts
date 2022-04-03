import { Component, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ScreensizeService } from './services/screensize.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private screensize: ScreensizeService,
    private platform: Platform
    ) {
      this.initializeApp();
    }
  initializeApp(){
    this.screensize.onResize(this.platform.width());
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('window:resize', ['$event'])
  private onResize(event){
    this.screensize.onResize(event.target.innerWidth);
  }
}
