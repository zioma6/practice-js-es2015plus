const button = document.querySelector('.cart__btn-calculate')
const input = document.querySelectorAll('.cart__quantity')
const totalPrice = document.querySelector('.cart__total-price')

const handleClick = () => {
   
    let suma = 0

    input.forEach((element) => {
    
        suma = suma + (element.dataset.price * element.value)
    
    })

    totalPrice.innerText = `${suma} `;
    console.log(suma)
}



button.addEventListener('click', handleClick)