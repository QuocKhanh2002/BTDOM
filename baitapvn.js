// bai1: thay doi mau nen 
function changeBackgroundColor()
{
    document.body.style.backgroundColor = getRandomColorRGB();

}
function getRandomColorRGB()
{
    const color = Math.floor(Math.random()* 255);
    return color;
}

//bai 2 thay doi noi dung van ban
function changeText()
{
    document.getElementById("content").innerText = "Hello ";
}
let change = false;
function changeText()
{
    const contentElement = document.getElementById("content");
    if(change)
    {
        contentElement.innerText = "van ban ban dau ";
    }
    else
    {
        contentElement.innerText = "Hello";
    }
}

//bai 3 phong to vas thu nho noi dung van ban 

let currentFontSize = 20;
function phongto()
{
    currentFontSize += 2 ;
    document.getElementById("contentext").style.fontSize =  currentFontSize + "px";

}
function thunho()
{
    currentFontSize -= 2 ;
    document.getElementById("contentext").style.fontSize =  currentFontSize + "px";

}