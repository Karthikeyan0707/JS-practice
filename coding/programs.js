// print pattern
//       *
//      **
//     ***
//    ****
//   *****
// let i,j,k
// let n= prompt("enter a number")
// let a=""

// for(i=1;i<=n;i++)
// {
//     for(k=n;k>=i;k--)
//     {
//     a+=" "
//     }
//         for(j=1;j<=i;j++)
//         {
//         a+="*"
//         }
//     a+="\n"
// }
// console.log(a)

// another method

//     let i,j
//     const prompt=require('prompt-sync')();
//     let n= prompt("number");
//     let a=""
//     for(i=1;i<=n;i++)
//     {
//         for(j=1;j<=n;j++)
//         {
//             if(j==n || i==n || (i+j)>(n+1) || ((i+j)==(n+1)))
//             {
//             a+="*";
//             }
//             else
//             {
//             a+=" ";
//             }
//         }
//         a+="\n"
//     }
// console.log(a)

// const prompt=require('prompt-sync')();
// let n = prompt("number:");
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing star
//   for (let j = 1; j <=n; j++) {
//     if(i == n || j == n || i+j>=n+1 ) {
//       string += "*";
//     }
//       else {
//         string += " ";
//       }
//     }
//   string += "\n";
// }
// console.log(string);

//USER INPUT FOR 1-D ARRAY
const prompt = require("prompt-sync")();
// var a=[]
// var j=0
// for(i=1;i<5;i++)
// {
//   a[j]=i
//   j++
// }
// console.log(a)

//PRINTING 2-D ARRAY
// var arr = [5]
// for(var i = 0;i<5;i++)
//     arr[i] = [5]
// // console.log(arr)
// for(i=0;i<5;i++)
// {
//   for(j=0;j<5;j++)
//   {
//     arr[i][j]=0
//   }
// }
// console.log(arr)

//USER INPUT FOR 2-D ARRAY
var arr = [2];
for (var i = 0; i < 2; i++) {
  arr[i] = [2];
}
console.log(arr);
for (i = 0; i < 2; i++) {
  for (j = 0; j < 2; j++) {
    arr[i][j] = prompt("enter 2D array: ");
  }
}
console.log(arr);

// var i=65
// var j=90
// for(k = i; k < j; k++){
// 	//convert the char code to string (Alphabets)
// 	var str =String.fromCharCode(k);
// 	//print the result in console
//               console.log(str);
// }

//converting 2-D array into 1-D array without using built-in methods
//var arr=[[1,2],[3,4],[5,6]]
//var arr1=[],k=0,n=3
// for(var i=0;i<n;i++)             //n=no.of rows
// {
//     for(var j=0;j<2;j++)
//     {
//         arr1[k++]=arr[i][j]
//     }
// }
// arr1

//converting 2-D array into 1-D array using built-in method
//arr=[[1,2],[3,4],[5,6]]
//arr1=arr.flat()
//console.log(arr1)
