function fish(a,b,q,arr=[])
{
    var arr1=new Array(b)
    arr1
    // for(var i=0;i<b;i++)
    // {
    //     arr1[i]=-1
    // }
    // arr1
    for(var i=0;i<q;i++)
    {
        if(arr[i][0]==1)
        {
            arr1[arr[i][2]-1]=arr[i][1]
            arr1
        }
        else (arr[i][0]==2)
        {
            for(var j=0;j<q;j++)
            {
                if(arr[i][2]==arr1[j])
                {
                    arr1[j]=arr[i][1]
                }
            }
        }
    }
    console.log(arr1)
}
fish(2,3,4,[[1,1,1],[1,1,2],[1,2,3],[2,1,2]])