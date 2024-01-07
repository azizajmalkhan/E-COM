var x = 0;
document.getElementById("c").innerText=x;
function add(val)
{
    document.getElementById("title").innerHTML +="<li>" + val+ " <input type='button' value='delete' onclick='remove()'> </li>";    
    x=x+1;
    document.getElementById("c").innerText=x;
}
function remove()
{
    var listItem = document.getElementsByTagName("li");
    for( var i=0;i<listItem.length; i++)
    {
        listItem[i].onclick=function()
        {
            this.parentNode.removeChild(this);
        }
    }
    x=x-1;
    document.getElementById("c").innerText=x;

}