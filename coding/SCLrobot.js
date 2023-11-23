function robot(str)
{
    var len=str.length
    var a=0,b=0,c=0,d=0,count=0
    for(i=0;i<len;i++)
    {
        if(str[i]=="E"){
            a+=1
        }
        else if(str[i]=="W"){
            b+=1
        }
        else if(str[i]=="N"){
            c+=1
        }
        else if(str[i]=="S"){
            d+=1
        }
        else{
            count+=1
        }
    }
    sum=Math.abs(a-b) + Math.abs(c-d)+count
    console.log(sum)
}
robot("EN?WW??NNSW?")