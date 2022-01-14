import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  showHead: boolean = false;
  url="";

  constructor(private router: Router){
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/register' || event['url'] == '/resetpassword' || event['url'] == '/') {
          this.url=event['url'];
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
      console.log("URL:::", this.url);
    });
  }


}
