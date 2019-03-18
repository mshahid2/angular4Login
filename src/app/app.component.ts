import { Component } from '@angular/core';
import {AuthenticateService} from './authenticate.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticateService]
})
export class AppComponent {
  title = 'app works!';
  user : any = {};
  isAuthentic : boolean = false;
  outputData :String;
constructor(private authenticateService : AuthenticateService)
{

}

  userformSubmit()
  {
      console.log('User Entered : ' + this.user.username);
       console.log('Password Entered : ' + this.user.password);
       this.authenticateService.authenticate(this.user.username,this.user.password).subscribe(
        data => this.outputData= JSON.stringify(data),
        error => alert(error),
        ()=> console.log("finished")
      );
      console.log('is user is isAuthentic' + this.user);
  }

}
