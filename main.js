
document.querySelector('html').onclick = function()
{
    alert('Fastzinierend');
}
var myImage = document.querySelector('img');
// ----------------------------------------------------------------
myImage.onclick = function()
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/chip.jpeg')
    {
      myImage.setAttribute ('src','bilder/nnn.jpeg');
    }
    else
    {
      myImage.setAttribute ('src','bilder/chip.jpeg');
    }
}
