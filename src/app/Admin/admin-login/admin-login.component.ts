import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  hide = true;
  constructor(private route:Router){
  }
  onlogin(){
    this.route.navigate(['/dashboard'])
  }
  
}

