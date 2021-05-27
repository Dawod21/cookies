import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cookies';
 constructor(private cookie:CookieService){}
  SetCookies(){
   this.cookie.set("UserName","Daud");
   this.cookie.set("password","abcd");
   this.cookie.set("Email","daud@gmail.com")
   alert(this.cookie.get("UserName"))
  }
}
