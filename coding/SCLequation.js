const prompt=require('prompt-sync')();
function solve(n)
{
    for(i=0;i<n;i++)
    
    {
        var flag=0
        a=prompt("num 1:")
        b=prompt("num 2:")
        c=prompt("num 3:")
        for(x=-100;x<100;x++)
        {
            for(y=x+1;y<100;y++)
            {
                for(z=y+1;z<100;z++)
                {
                    if((x+y+z==a)&&(x*y*z==b)&&(x**2+y**2+z**2==c))
                    {
                        console.log(x,y,z)
                        console.log("\n")
                        flag=1
                        break
                    }
                }
                if(flag==1)
                {
                    break;
                }
            }
            if(flag==1)
            {
                break;
            }
        }
        if(flag==0)
        {
            console.log("No solution")
        }
    }
}
solve(2)