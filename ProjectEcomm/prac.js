function fun()
{
    var arr =["mam","nam","wtie","mass","mam","nam"];
for(var i=0; i<arr.length; i++)
{
    for(var j=1;j<arr.length;j++)
    {
        if(arr[i]===arr[j])
        {
            arr[i]= -1
        }
    }
}
for(var i=0; i<arr.length; i++)
{
    if(arr[i]!=-1)
    {
        console.log(arr[i])
    }
}

}
fun()