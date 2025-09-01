

function getElement(id){
    const element = document.getElementById(id)
    return element
}

document.getElementById('cart-btn-1').addEventListener('click', function(){
    
    const title = getElement('card-title-1').innerText
    const price = Number(getElement('card-price-1').innerText)
    const totalPrice = Number(getElement('total-price').innerText)
    getElement('total-price').innerText =  totalPrice + price

    const cartContainer = getElement('cart-container')
    
    const newCart = document.createElement('div')

    newCart.innerHTML = `
    <div class="rounded-xl bg-gray-200 flex justify-between items-center p-4">
        <img class="w-10" src="./assets/kitchen-1.png" alt="">
        <div>
          <h2 class="font-bold">${title}</h2>
          <h2><span class="font-bold">Price:</span> ${price}$</h2>
        </div>
    </div>
    `
    cartContainer.appendChild(newCart)

})