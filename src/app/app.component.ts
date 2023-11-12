import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProgFlowManager.Angular';
  isDark: boolean = false;
  isShow: boolean = true;

  toggleDark(): void {
    this.isDark = !this.isDark;
  }
  toggleShow(): void {
    this.isShow = !this.isShow;
  }
}
