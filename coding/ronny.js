arr=[]
var c=0,k=5
function func(n)
{
    if(n == 1 || n == 0)
    {
        return false;
    }
    for(var i = 2; i < n; i++)
    {
      if(n % i == 0)
      {
        return false;
      }
    }  
    return true
}
while(c<k)
{
for(var i = 2; i <= 1000; i++)
{
        if(func(i))
        {
        // console.log(i)
        arr.push(i)
        c++;
        }
        if(c==k)
        {
        console.log(arr)
        break
        }
    }
}
