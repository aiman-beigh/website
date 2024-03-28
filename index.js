import { arr as details,productlist} from "./menu.js";

let index=0;
slideshow()
function slideshow(){
let image=document.querySelectorAll('.imageindex')

for(var i=0;i<image.length;i++)
{
    image[i].style.display="none";
}
index++;
if(index>image.length){
    index=1;
}
image[index-1].style.display="block";
setTimeout(() => {
    slideshow()
}, 2000);
}
let x=0;
document.querySelector('.modes').addEventListener('click',()=>{

let element = document.body;
  element.classList.toggle('dark-mode-on');
  let e= document.querySelector('.modes')
   e.classList.toggle('light-mode')
})
$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('.circular-cursor').css({
      left: e.pageX,
      top: e.pageY
    });
  })
});
let offer = document.querySelector('.display-offer')
console.log(offer.innerHTML)
let arr=['Pay with 3 instalments','Earn reward with loyalty debt','January sale now live!hurry up','Subscribe for 10% Off on first order'];
var i=0
function changeoffer(){
   
   
    offer.innerHTML=arr[i];
    i++
    if(i>=arr.length){i=0;}
   
}

setInterval(()=>{
       changeoffer(); 
    },1000
    );
let html=''
    details.forEach((link)=>{
    html+=`
    <div class="container">
      <img src=${link.image} />
      <div>${link.name}</div>
      <div>
        <p>
         ${link.paragraph}
        </p>
      </div>
    </div>
   `
    })
    document.querySelector('.AboutSale').innerHTML=html;

    let productHTML=''
    productlist.forEach((product)=>{
        productHTML+=`
<div class="Product-container">
        <div class="Product-image-box">
          <div class="productImageContainer"><img
            class="Product-image"
            src=${product.image}
          /><img class="hovering-product-image" src=${product.hoverImage}></div>
          <div class="new-text">new</div>
          <button class="add-to-cart">
            <img class="add-to-cart-img" src="images/icons/add to cart.png" />
          </button>
        </div>
        <h4>${product.name}</h4>
        <div class="Product-price">$${product.Price}</div>
      </div>`
    })
    productHTML+=`<div class="Product-image-box Product-container blank-product-container">
          <a class="view-all">View all Man's New Arrivals</a>
        </div>`
    document.querySelector('.Product-lists').innerHTML=productHTML;
     
    
    let cart=0;
    document.querySelectorAll('.add-to-cart').forEach((button)=>{
     button.addEventListener('click',()=>{
      cart++;
      document.querySelector('.cartNumberDisplay').innerHTML=cart;
     })
    })
   
