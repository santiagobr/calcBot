function calcPriceWithDiscount(price, coupon) {
  const percentageWithDiscount = 100 - coupon;
  const priceWithDiscount = (price * percentageWithDiscount) / 100;

  return priceWithDiscount;
}

// 
const PriceInput = document.getElementById("PriceInput");
const DiscountInput = document.getElementById("DiscountInput");

const priceDiscountBtn = () => {
  const priceValue = PriceInput.value;
  const discountValue = DiscountInput.value;

  const Badge = document.getElementById("badge");
  const badgeValue = Badge.value;

  const PriceOutput = document.getElementById("PriceOutput");
  const discount = discountValue;

  const priceWithDiscount = parseFloat(
    calcPriceWithDiscount(priceValue, discount)
  ).toFixed(2);

  

  PriceOutput.innerText = `El precio de tu producto con el ${discountValue}% de descuento es ${priceWithDiscount}${badgeValue}`
}

PriceInput.addEventListener('change', priceDiscountBtn)
DiscountInput.addEventListener('change', priceDiscountBtn)