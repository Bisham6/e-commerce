import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


export interface Cart{
  title?:string;
  id?:string;
  des?:string;
  price?:string;
  img?:string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any = [];

  total: any;


  constructor(private cartService:CartService,private Auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.getdata()
    this.grandTotal()
  }

  getdata() {
    this.cartService.getPosts().subscribe((res: any) => {
      this.products = res
      this.total = this.grandTotal()
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });

      })

    })
  }
  deletePost(listdata: any): void {
    this.cartService.deletePost(listdata);
  }

  grandTotal() {
    this.total=this.products.reduce(function(acc: number,val: { price: number; quantity: number; }){
      return acc + (val.price* val.quantity)
    },0)

  }

  inc(val: any) {
    val.quantity += 1
    this.grandTotal()
    return this.totalprice
  }

  dec(val: any) {
    if (val.quantity != 0)
      val.quantity -= 1
      this.grandTotal()
  }
  totalprice(val:any){
  let total=val.price*val.quantity
  return total
  }
  if(user:any){

  }

}
