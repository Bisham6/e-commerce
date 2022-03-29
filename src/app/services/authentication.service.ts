import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authState, user } from 'rxfire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$= authState(this.auth);
  

  constructor(private auth: Auth,private router:Router) { }

  login(username: string, password: string){
    return from(signInWithEmailAndPassword(this.auth,username,password))
  }

  signUp(name: string, email: string, password: any){
    return from(createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(switchMap(({ user}) => updateProfile(user, {displayName: name})))
    
    
  
    
    

   
  }

  logout(){
    return from(this.auth.signOut());
  }
}
