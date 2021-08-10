function calcPriceWithDiscount(price, coupon) {
  const percentageWithDiscount = 100 - coupon;
  const priceWithDiscount = (price * percentageWithDiscount) / 100;

  return priceWithDiscount;
}

function priceDiscountBtn() {
  const PriceInput = document.getElementById("PriceInput");
  const priceValue = PriceInput.value;

  const CouponInput = document.getElementById("CouponInput");
  const couponValue = CouponInput.value;

  const Badge = document.getElementById("badge");
  const badgeValue = Badge.value;

  const PriceOutput = document.getElementById("PriceOutput");
  const discount = couponValue;

  const priceWithDiscount = parseFloat(
    calcPriceWithDiscount(priceValue, discount)
  );

  PriceOutput.innerText = `El precio de tu producto con el ${couponValue}% es ${priceWithDiscount}${badgeValue}`
}
