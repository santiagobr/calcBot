const coupons = [
  {
    name: "promocion-15",
    discount: 15,
  },
  {
    name: "promocion-30",
    discount: 30,
  },
  {
    name: "promocion-50",
    discount: 50,
  },
];

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

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    const PriceOutput = document.getElementById("PriceOutput");
    PriceOutput.innerText = `El cupón ${couponValue} no es válido. El precio del producto es: ${priceValue}`;
  } else {
    const PriceOutput = document.getElementById("PriceOutput");
    const discount = userCoupon.discount;

    const priceWithDiscount = parseFloat(calcPriceWithDiscount(priceValue, discount));

    PriceOutput.innerText = `El precio con descuento es ${priceWithDiscount}`;
  }
}
