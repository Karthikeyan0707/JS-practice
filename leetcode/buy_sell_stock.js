var maxProfit = function (prices) {
  var maxi = 0;
  var minimum = prices[0];
  for (var i = 0; i < prices.length; i++) {
    minimum = Math.min(minimum, prices[i]);

    maxi = Math.max(maxi, prices[i] - minimum);
  }

  console.log(maxi);
};
var price_arr = [7, 1, 5, 3, 6, 4];
maxProfit(price_arr);
