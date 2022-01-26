//create funtion...
function contest(){
    var get=prompt("Welcome! Enter your name:")
    var getinfo="Are you ready for contest?";
    document.getElementById("name").innerHTML=get;
    document.getElementById("test").innerHTML=getinfo;
}
//call a function.....
contest();