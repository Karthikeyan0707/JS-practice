function lcs(str1,str2)
{
    var count1=0
    var count2=0
    var vowels=['a','e','i','o','u','A','E','I','O','U']
    for(var i=0;i<str1.length;i++)
    {
        for(var j=0;j<10;j++)
        {
            if(vowels[j]==str1[i])
            {
                count1+=1
            }
        }
    }
    for(var i=0;i<str2.length;i++)
    {
        for(var j=0;j<10;j++)
        {
            if(vowels[j]==str2[i])
            {
                count2+=1
            }
        }
    }
    if(count1>count2)
    {
        console.log(str1)
    }
    else
    {
        console.log(str2)
    }
}
lcs("nandishesh","mahesh")