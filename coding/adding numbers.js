function add(n, a = [], k)
{
  var sum1 = 0,total = 0,mul = 0,mul1 = 0;
  for (i = 0; i < n; i += 2)
  {
    sum1 = 0, mul = 0
    sum1 += a[i] + a[i + 1];
    mul = sum1 * k;
    mul1 += mul;
    if (i + 2 < n)
    {
      a.push(sum1)
      a.sort(function (a, b) {return a - b})
    } 
    else 
    {
      break;
    }
  }
  if (a.length % 2 != 0) 
  {
    total = (sum1 + a[a.length - 1]) * k
    total += mul1
    return total
  } 
  else
  {
    return mul1
  }
}
console.log(add(5, [1, 2, 3, 4, 5], 3))




