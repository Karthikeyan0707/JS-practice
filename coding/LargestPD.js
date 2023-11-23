function prime(N)
{
    var arr=[]
    var j=0
    for(i=2;i<=N;i++)
    {
        if(N%i==0)
        {
           arr[j]=i
           j++
        }
    }
    var prime = []
    function isPrime(N) {
      for (var j = 2; j < N; j++) {
       if ((N % j) == 0) { 
        return false
       } 
      }
    return true
    }
    for (var k = 0; k < arr.length; k++) {
    if (isPrime(arr[k])==true) {
        prime.push(arr[k])
        }
    }
    // console.log(prime)
    if(prime.length==0 ||prime.length==1)
    {
        console.log(-1)
    }
    else{
        var max=Math.max(...prime)
        console.log(max)
    }
}
prime(20)



//another method
// function prime(N)
// {
//     for(var i=Math.floor(N/2);i>=2;i--)
//     {
//         if(N%i==0)
//         {
//             for(var j=2;j<=Math.floor(i/2);j++)
//             {
//                 if(i%j==0)
//                 {
//                     break
//                 }   
//             }
//             i
//             if(j>i/2)
//             {
//                 console.log(i)
//                 break
//             }
//         }
//     }
//     if(i<2)
//     {
//         console.log(-1)
//     }
// }
// prime(66)
  