function box(n,arr=[])
{
    for(var i=0;i<n;i++)
    {
        for(var j=0;j<n-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log(arr)
    var sum=0
    for(i=1;i<=arr[n-1];i++)
    {
        sum=0
        for(j=0;j<n;j++)
        {
            if(arr[j]>=i)
            {
                sum+=1
            }
        }
        console.log(sum)
    }
}
box(4,[2,6,1,4])

// function box(n,arr=[])
// {
//     for(var i=0;i<n;i++)
//     {
//         for(var j=0;j<n-1;j++)
//         {
//             if(arr[j]>arr[j+1])
//             {
//                 temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
//     console.log(arr)
//     var ar = [arr[n-1]]
//     for(var i = 0;i<arr[n-1];i++)
//         ar[i] = [n]
//     // console.log(ar)    
//     for(i=0;i<arr[n-1];i++)
//     {
//         for(var j=0;j<n;j++)
//         {
//         ar[i][j]=0
//         }
//     }
//     // console.log(ar)
//     for(i=0;i<n;i++)
//     {
//         for(j=0;j<arr[n-1];j++)
//         {
//             if(j<arr[i])
//             {
//                 ar[j][i]=1
//             }
//         }
//     }
//     // console.log(ar)
//     var sum=0
//     for(i=0;i<arr[n-1];i++)
//     {
//         sum=0
//         for(j=0;j<n;j++)
//         {
//             sum+=ar[i][j]
//         }
//         console.log(sum)
//     }
// }
// box(6,[2,3,1,2,4,3])