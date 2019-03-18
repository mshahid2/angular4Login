import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthenticateService{

    constructor(private http: Http) { }

 authenticate (username:string ,password:string)
{
    
    console.log('service is called.');
       // return this.http.get('http://date.jsontest.com/').map(response => response.json());
        return this.http.get('http://10.1.10.181:1234/getUser/shahid@gmail.com/').map(response => response.json());
}

} 