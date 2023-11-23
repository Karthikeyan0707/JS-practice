const prompt=require('prompt-sync')();
var a=prompt("Enter the string:");
var len,i,top=-1,count=0;
len=a.length;
var b=[];
for(i=0;i<len;i++)
{
    if(b[top]==a[i])
    {
        top--;
        count++;
    }
    else
    {
        b[++top]=a[i];
    }
}
if(count%2==0)
{
    console.log("No\n");
}
else
{
    console.log("Yes\n");
}