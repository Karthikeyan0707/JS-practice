function HALINDROME(n,a=[])
{
    let count=0
    for (let i=0;i<n;i++)
    {
        let str=a[i]
        let k=0
        let m=(str.length)-1
        if(isHalindrome(str,k,m))
        {
            count++
        }
    }
    return count
}
function isPalindrome(str,forward,backward)
{
    while (forward <= backward)
    {
        if (str[forward++] != str[backward--])
        {
            return false
        }
    }
    return true
}
function isHalindrome (str, start, end)
{
    if(end - start <= 0)
    {
        return false
    } 
    if (isPalindrome(str, start, end))
    {
        return true
    }
    else if (end - start == 1) 
    {
        return false
    }
    if ((end - start)%2)
    {
        return isHalindrome (str, start, (end - start)/2) || isHalindrome (str, (end - start)/2 + 1, end)
    }
    else
    {
        return isHalindrome(str, start, (end - start)/2 - 1) || isHalindrome (str, (end - start)/2 + 1, end)
    }
}
console.log(HALINDROME(4,["hahshs","aabb","as","hah"]))