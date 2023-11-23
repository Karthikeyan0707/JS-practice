function day(N,K,arr=[])
{
    arr.sort(function(a,b){return b-a})
    console.log(arr[K-1])
}
day(6,2,[26,20,23])
