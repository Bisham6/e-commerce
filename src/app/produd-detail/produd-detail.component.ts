import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-produd-detail',
  templateUrl: './produd-detail.component.html',
  styleUrls: ['./produd-detail.component.css']
})
export class ProdudDetailComponent implements OnInit {
  title:string=''
  img:string=''
  des:string=''
  price:number=0





  constructor(private active:ActivatedRoute,private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.title= this.active.snapshot.params['title']
    this.img= this.active.snapshot.params['img']
    this.des= this.active.snapshot.params['des']
    this.price= this.active.snapshot.params['price']
    this.image("id","img")
  }

  addProduct(){
    const payload=
    {
      
      img:this.img,
      title:this.title,
      des:this.des,
      price:this.price
      
    }
    this.cartService.createPost(payload);
    console.log(payload)
    
  }
  image(id:string,id2:string){ 
    var zoom:any=document.getElementById(id) 
    var zimg:any=document.getElementById(id2) 
    zoom.addEventListener("mousemove",function(event:any){ 
        let clientX=event.clientX-zoom.offsetLeft; 
        let clientY=event.clientY-zoom.offsetTop 
        let w=zoom.offsetWidth; 
        let h=zoom.offsetHeight; 
        clientX=clientX/w *100; 
        clientY=clientY/h *100; 
        zimg.style.transform='translate(-'+clientX+'%,-'+clientY+'%) scale(2)' 
    }) 
    zoom.addEventListener("mouseleave",function(){ 
        zimg.style.transform='translate(-50%,-50%) scale(1)' 

    }) 
  }



}
