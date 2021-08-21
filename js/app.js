// --------------------get cost from html----------------
function getCost(costId) {
    const costText = document.getElementById(costId + '-cost').innerText;
    return parseFloat(costText);
}

//-------------------------set cost----------------------
function setCost(id, cost) {
    document.getElementById(id + '-cost').innerText = cost;
}

// -------------------calculation function-------------------
function costCalculation() {
    const baseCost = getCost('base');
    const memoryCost = getCost('memory');
    const storageCost = getCost('storage');
    const deliveryCost = getCost('delivery');
    const total = baseCost + memoryCost + storageCost + deliveryCost;
    setCost('total', total);
    setCost('payable', total);
}

//memory config event handler
// -------------------event handler memory-8 button ---------------------
document.getElementById('memory-8').addEventListener('click', function () {
    setCost('memory', 0);
    costCalculation();
});
// -------------------event handler memory-16 button ---------------------
document.getElementById('memory-16').addEventListener('click', function () {
    setCost('memory', 180);
    costCalculation();
});

//storage config event handler
// -------------------event handler storage-256 button ---------------------
document.getElementById('storage-256').addEventListener('click', function () {
    setCost('storage', 0);
    costCalculation();
});
// -------------------event handler storage-512 button ---------------------
document.getElementById('storage-512').addEventListener('click', function () {
    setCost('storage', 100);
    costCalculation();
});
// -------------------event handler storage-1TB button ---------------------
document.getElementById('storage-1tb').addEventListener('click', function () {
    setCost('storage', 180);
    costCalculation();
});

//delivery config event handler
//---------------------free delivery------------------
document.getElementById('delivery-free').addEventListener('click', function () {
    setCost('delivery', 0);
    costCalculation();
});
//-----------------------paid delivery-------------------
document.getElementById('delivery-paid').addEventListener('click', function () {
    setCost('delivery', 20);
    costCalculation();
});

//------------------promo code handler------------------------
document.getElementById('promo-code-btn').addEventListener('click', function () {
    const promoCode = 'stevekaku';
    const inputPromoCode = document.getElementById('promo-code');
    let payable = getCost('payable');
    if (promoCode == inputPromoCode.value.trim()) {
        payable = payable - (payable * .2);
        setCost('payable', payable);
        inputPromoCode.value = '';
    }
})
