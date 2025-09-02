

function getElement(id){
    const element = document.getElementById(id)
    return element
}


// traditional way
// document.getElementById('cart-btn-1').addEventListener('click', function(){
    
//     const title = getElement('card-title-1').innerText
//     const price = Number(getElement('card-price-1').innerText)
//     const totalPrice = Number(getElement('total-price').innerText)
//     getElement('total-price').innerText =  totalPrice + price

//     const cartContainer = getElement('cart-container')
    
//     const newCart = document.createElement('div')

    // newCart.innerHTML = `
    // <div class="rounded-xl bg-gray-200 flex justify-between items-center p-4">
    //     <img class="w-10" src="./assets/kitchen-1.png" alt="">
    //     <div>
    //       <h2 class="font-bold">${title}</h2>
    //       <h2><span class="font-bold">Price:</span> ${price}$</h2>
    //     </div>
    // </div>
    // `
    // cartContainer.appendChild(newCart)

// })


// traverse system
// const cardsBtn = document.getElementsByClassName('card-btn')
// for(let cardButton of cardsBtn){
//     cardButton.addEventListener('click', function(){
        // const productImg = cardButton.parentNode.parentNode.childNodes[1].childNodes[1].src
        // const productTitle = cardButton.parentNode.parentNode.childNodes[3].childNodes[1].innerText
        // const productPrice = cardButton.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[0].innerText

        // const totalPrice = getElement('total-price').innerText

        // const currentTotal = Number(productPrice) + Number(totalPrice)

        // getElement('total-price').innerText = currentTotal

        // const cartContainer = getElement('cart-container')

        // const newCart = document.createElement('div')

        // newCart.innerHTML = `
        // <div class="rounded-xl bg-gray-200 flex justify-between items-center p-4">
        //   <img class="w-10" src="${productImg}" alt="">
        //   <div>
        //     <h2 class="font-bold">${productTitle}</h2>
        //     <h2><span class="font-bold">Price:</span> ${productPrice}$</h2>
        //   </div>
        // </div>
        // `
        // cartContainer.appendChild(newCart)

        // const totalQuantity = getElement('total-quantity').innerText 
        // getElement('total-quantity').innerText = Number(totalQuantity)+1
        
//     })
// }


// event delegation
getElement('product-box').addEventListener('click', function(e){
    if(e.target.className.includes('card-btn')){
        const cardButton = e.target
        const productImg = cardButton.parentNode.parentNode.childNodes[1].childNodes[1].src
        const productTitle = cardButton.parentNode.parentNode.childNodes[3].childNodes[1].innerText
        const productPrice = cardButton.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[0].innerText

        const totalPrice = getElement('total-price').innerText

        const currentTotal = Number(productPrice) + Number(totalPrice)

        getElement('total-price').innerText = currentTotal

        const cartContainer = getElement('cart-container')

        const newCart = document.createElement('div')

        newCart.innerHTML = `
        <div class="rounded-xl bg-gray-200 flex justify-between items-center p-4">
          <img class="w-10" src="${productImg}" alt="">
          <div>
            <h2 class="font-bold">${productTitle}</h2>
            <h2><span class="font-bold">Price:</span> ${productPrice}$</h2>
          </div>
        </div>
        `
        cartContainer.appendChild(newCart)

        const totalQuantity = getElement('total-quantity').innerText 
        getElement('total-quantity').innerText = Number(totalQuantity)+1


        
    }
})
