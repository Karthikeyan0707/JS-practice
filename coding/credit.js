function credit(n1,arr1,n2,arr2)
{
    var count=0
    for(var i=0;i<n2;i++)
    {
        for(var j=0;j<n1;j++)
        {
            if(arr2[i]>=arr1[j])
            {
                count+=1
            }
        }
    }
    console.log(count)
}
credit(8,[44,45,56,39,2,6,17,75],2,[54,50])