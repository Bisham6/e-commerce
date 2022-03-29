import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem:number=0;
  user:string=''

  constructor(private cartService:CartService,private auth:AngularFireAuth,public authService: AuthenticationService,private router: Router) {

   }

  ngOnInit(): void {
    this.cartService.getPosts().subscribe((res:any)=>{
      this.totalItem=res.length;
      this.user=res.displayName
      console.log("hello"+this.user)
    })
  }
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);
    });
  }
  

}
