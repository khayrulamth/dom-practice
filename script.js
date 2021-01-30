const firstClassPlusBtn = document.querySelector('.first-class-plus');
const firstClassMinusBtn = document.querySelector('.first-class-minus');
const economyPlusBtn = document.querySelector('.economy-plus');
const economyMinusBtn = document.querySelector('.economy-minus');
const firstClassTicket = document.querySelector('.first-class-input');
const economyTicket = document.querySelector('.economy-input');

// Functions 
// first class plus event handler
firstClassPlusBtn.addEventListener('click', function () {
    increaseCounter(firstClassTicket);
    totalCost();
});

// first class minus event handler
firstClassMinusBtn.addEventListener('click' , function () {
    decreaseCounter(firstClassTicket);
    totalCost();
});

// ecomony plus event handler
economyPlusBtn.addEventListener('click', function () {
    increaseCounter(economyTicket);
    totalCost();
});

// economy minus event handler
economyMinusBtn.addEventListener('click', function () {
    decreaseCounter(economyTicket);
    totalCost();
});
// Incresing ticket number Spinner
function increaseCounter(itemPlus) {
    itemPlus.value++;
}
// Decreasing ticket number Spinner
function decreaseCounter(itemMinus) {
    let ticketCondition = Number(itemMinus.value);

    if (!ticketCondition || ticketCondition < 0) {
        itemMinus.classList.add('Error');
    } else {
        itemMinus.value--;
    }
}

//Total Price Count
function totalCost() {
    let firstClassPrice = firstClassTicket.value * 150;
    let economyPrice = economyTicket.value * 100;
    let ticketPrice = firstClassPrice + economyPrice;
    let subTotal = (document.querySelector('.subtotal').textContent = ticketPrice);
    let userSubTotal = (document.querySelector('.user-subtotal').textContent = subTotal);
    let vat = (document.querySelector('.vat').textContent = Math.round(subTotal * 0.1));
    let userVat = (document.querySelector('.user-vat').textContent = vat);
    let total = (document.querySelector('.total').textContent = subTotal + vat);
    let userTotal = (document.querySelector('.user-total').textContent = total);
}

// Booking success block
+document.querySelector('.book-now').addEventListener('click', function () {
    const fryingFrom = document.querySelector('.flying-from').value;
    const fryingTo = document.querySelector('.flying-to').value;
    const fryingDeparture = document.querySelector('.flying-departure').value;
    const fryingReturn = document.querySelector('.flying-return').value;
    const firstClassTicket = document.querySelector('.first-class-input').value;
    const economyTicket = document.querySelector('.economy-input').value;

    if (!fryingFrom || !fryingTo || !fryingDeparture || !fryingReturn || !firstClassTicket || !economyTicket) {
        document.querySelector('.warning').textContent = 'Fill up All Fields';
    } else {
        document.querySelector('.booking-form').style.display = 'none';
        document.querySelector('.booking-details').style.display = 'block';
        document.querySelector('.user-flying-from').textContent = fryingFrom;
        document.querySelector('.user-flying-to').textContent = fryingTo;
        document.querySelector('.user-departure-date').textContent = fryingDeparture;
        document.querySelector('.user-return-date').textContent = fryingReturn;
        document.querySelector('.user-first-class').textContent = firstClassTicket;
        document.querySelector('.user-economy-class').textContent = economyTicket;
        totalCost();
    }
});
