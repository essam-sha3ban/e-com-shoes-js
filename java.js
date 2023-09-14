let wrapper=document.querySelector(".sliderWrapper")
let menuItem=document.querySelectorAll("ul li.menu")


menuItem .forEach((item,index)=>{
    item.addEventListener("click",()=> {
    wrapper.style.transform=` translateX(${-100 * index}vw)`;
    });
});

// --------------start  product----------
let products=[
    {
        id:1,       
        tittle:"Air Force",
        price:120,
        colors:[
            {
            code:"black",
            img:"./images/air.png"
            },

            {
            code:"darkblue",
            img:"./images/air2.png"
            },
        ],
    },
    {
        id:2,       
        tittle:"Air Jordan",
        price:100,
        colors:[
            {
            code:"lightgray",
            img:"./images/Jordan.png"
            },

            {
            code:"green",
            img:"./images/jordan2.png"
            },
        ],
    },
    {
        id:3,       
        tittle:"Blazer",
        price:220,
        colors:[
            {
            code:"lightgray",
            img:"./images/Blazer.png"
            },

            {
            code:"green",
            img:"./images/Blazer2.png"
            },
        ],
    },
    {
        id:4,       
        tittle:"Crater",
        price:90,
        colors:[
            {
            code:"black",
            img:"./images/crater.png"
            },

            {
            code:"lightgray",
            img:"./images/crater2.png"
            },
        ],
    },

    {
        id:5,       
        tittle:"Hippie",
        price:99,
        colors:[
            {
            code:"gray",
            img:"./images/hippie.png"
            },

            {
            code:"black",
            img:"./images/hippie2.png"
            },
        ],
    },


]

let chooseProduct=products[0]

let currentProductImg=document.querySelector(".productImag")
let currentProductTitle=document.querySelector(".productTittle")
let currentProductPrice=document.querySelector(".productPrice")
let currentProductColor=document.querySelectorAll(".colo")
let currentProductSize=document.querySelectorAll(".siz")

menuItem.forEach((item , index)=>{
    item.addEventListener("click",()=>{

        chooseProduct=products[index]
        currentProductTitle.textContent=chooseProduct.tittle
        currentProductPrice.textContent="$"+chooseProduct.price
        currentProductImg.src=chooseProduct.colors[0].img
        currentProductColor.forEach((color,index)=>{
        color.style.backgroundColor=chooseProduct.colors[index].code
    })
    
    })
    
})
currentProductColor.forEach((color,index)=>{

    color.addEventListener("click",()=>{
        currentProductImg.src= chooseProduct.colors[index].img
    })
})


currentProductSize.forEach((size)=>{
    size.addEventListener("click",function(){ 
        
        currentProductSize.forEach(size=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        })  
      this.style.backgroundColor="black"
      this.style.color="white"
    })
})

// start payment

let payment = document.querySelector(".payment")
let payBtn =document.querySelector(".bayBtnPro")
let closePayment=document.querySelector(".close")

payBtn.addEventListener("click",()=>{
    payment.style.display="flex"
});
closePayment.addEventListener("click",()=>{
    payment.style.display="none"
})
//end payment
// --------------end  product-------------