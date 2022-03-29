import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

export interface Cart{
  title?:string;
  id?:number;
  des?:string;
  price?:string;
  img?:string;
}



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  datalist:Cart[]=[]

  data=[
    {
      id: 1,
      img:'assets/img/cartImg1.webp',
      title:'Togkart 250 TC Cotton Double Floral Bedsheet  (Pack of 1, Multicolour1)',
      des:'Pack of 1, Multicolor 3',
      price: 22

    },
    {
      id: 2,
      img:'assets/img/cartImg2.webp',
      title:'Togkart 250 TC Cotton Double Floral Bedsheet  (Pack of 1, Multicolour1)',
      des:'Pack of 1, Multicolor 3',
      price: 20

    },
    {
      id: 3,
      img:'assets/img/cartImg3.webp',
      title:'Togkart 250 TC Cotton Double Floral Bedsheet  (Pack of 1, Multicolour1)',
      des:'Pack of 1, Multicolor 3',
      price:19

    },
    {id: 4,
      img:'assets/img/cartImg4.webp',
      title:'Togkart 250 TC Cotton Double Floral Bedsheet  (Pack of 1, Multicolour1)',
      des:'Pack of 1, Multicolor 3',
      price:50

    },
    {
      id: 5,
      img:'assets/img/cartImg5.webp',
      title:'Togkart 250 TC Cotton Double Floral Bedsheet  (Pack of 1, Multicolour1)',
      des:'Pack of 1, Multicolor 3',
      price:60

    },
    {
      id: 6,
      img:'assets/img/cartImg6.webp',
      title:'Togkart 250 TC Cotton Double Floral Bedsheet  (Pack of 1, Multicolour1)',
      des:'Pack of 1, Multicolor 3',
      price:60

    },
    {
      id: 7,
      img:'assets/img/cartImg7.webp',
      title:'Togkart 250 TC Cotton Double Floral Bedsheet  (Pack of 1, Multicolour1)',
      des:'Pack of 1, Multicolor 3',
      price:60

    },
    {
      id: 8,
      img:'assets/img/cartImg8.webp',
      title:'Togkart 250 TC Cotton Double Floral Bedsheet  (Pack of 1, Multicolour1)',
      des:'Pack of 1, Multicolor 3',
      price:60
    },
    {
      id: 9,
      img:'assets/img/cartImg9.webp',
      title:'Togkart 250 TC Cotton Double Floral Bedsheet  (Pack of 1, Multicolour1)',
      des:'Pack of 1, Multicolor 3',
      price:60
    },
  ]

  constructor(private cartService:CartService) { }

  ngOnInit(): void {

    this.data.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price});
    });
  }

  getproduct(){
    this.cartService.getPosts().subscribe((res:any)=>{
      this.datalist=res
    })
  }
  addProduct(listdata:any){
    const payload=
    {
      
      img:listdata.img,
      title:listdata.title,
      des:listdata.des,
      price:listdata.price
      
    }
    this.cartService.createPost(payload);
    console.log(payload)
    


  }



}
