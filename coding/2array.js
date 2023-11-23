// function Arr(a=[],b=[])
// {
//     var sum=[]
//     a1=a.filter((item,index) => a.indexOf(item) == index)
//     b1=b.filter((item,index) => b.indexOf(item) == index)
//     for(var i=0;i<a1.length;i++)
//     {
//         for(var j=0;j<b1.length;j++)
//         {
//             if(a1[i]==b1[j])
//             {
//                 b1[j]=0
//             }
//         }
//     }
//     sum=a1.concat(b1)
//     var sum1=0
//     for(i=0;i<sum.length;i++)
//     {
//         sum1+=sum[i]
//     }
//     console.log(sum1)
// }
// Arr([1,4,5,6,7],[4,5,9,8,10])

function diagonalDifference(arr) {
  // Write your code here
  var n = 3;
  var sum1 = 0;
  var sum2 = 0;
  var result;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - 1 - i];
  }
  result = sum1 - sum2;
  console.log(Math.abs(result));
}
diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
