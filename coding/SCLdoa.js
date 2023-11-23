function doa(x,y,n,ar=[[]])
{
    //const prompt=require('prompt-sync')();
    var arr = [x]
    for(var i = 0;i<x;i++)
        arr[i] = [y]
    // console.log(arr)    
    for(i=0;i<x;i++)
    {
        for(j=0;j<y;j++)
        {
        arr[i][j]=0
        }
    }
    //console.log(arr)
    var ex,ey
    for(var i=0;i<n;i++)
    {
        ex=ar[i][0]
        ey=ar[i][1]
        for(var j=0;j<y;j++)
        {
            arr[ex][j]=1
        }
        for(var k=0;k<x;k++)
        {
            arr[k][ey]=1
        }
    }
    console.log(arr)
    var sx,sy
    sx=ar[n][0]
    sy=ar[n][1]
    if(arr[sx][sy]==0)
    {
        console.log("ALIVE!")
    }
    else if((arr[sx][sy+1]==0 && sy<y) || (arr[sx][sy-1]==0 &&sy>0))
    {
        console.log("ALIVE!")
    }
    else if((arr[sx+1][sy]==0 && sx<x) || (arr[sx-1][sy]==0 &&sx>0))
    {
        console.log("ALIVE!")
    }
    else
    {
        console.log("DEAD!")
    }
}
doa(5,5,3,[[0,1],[4,2],[4,3],[1,2]])