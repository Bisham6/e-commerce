import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

export interface Cart{
  title?:string;
  id?:string;
  des?:string;
  price?:string;
  img?:string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  getProducts() {
    throw new Error('Method not implemented.');
  }
  postsCollection: AngularFirestoreCollection<Cart> | any;

  posts: Observable<Cart[]> | any;

  documentRefernce:AngularFirestoreDocument<Cart>|any;

  constructor(private firestore:AngularFirestore,private Auth:AngularFireAuth,private router:Router) { 
    this.postsCollection = this.firestore.collection('Posts', ref => ref.orderBy('title', 'asc'));

    this.posts = this.postsCollection.snapshotChanges()
      .pipe(
        map((changes: any) => {
          return changes.map((ref: any) => {
            const data = ref.payload.doc.data() as Cart;
            data.id = ref.payload.doc.id;
            return data;
          });
        })
      );
  }
  getPosts(): any {
    return this.posts;
  }
  createPost(payload: any): any {
    this.postsCollection.add(payload);
  }

  deletePost(payload:any):any{
    this.documentRefernce=this.firestore.doc('Posts/'+payload.id);
    this.documentRefernce.delete()
  }
}
