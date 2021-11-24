let btn = document.getElementById('btn'); 
let output = document.getElementById('output')
let quote = [
    '“Be yourself everyone else is already taken.”',
    '“You have gotta dance like there is nobody watching Love like you will never be hurt Sing like there is nobody listening and live like it is heaven on earth.”',
    '“Be the change that you wish to see in the world.”',
    '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
    '“Without music, life would be a mistake.”',
    '“We accept the love we think we deserve.”',
    '“We are all in the gutter, but some of us are looking at the stars.”',
    '“I have not failed. I have just found 10000 ways that will not work.”',
    '“It is never too late to be what you might have been.”',
    '“Everything you can imagine is real.”',
    '“Do what you can, with what you have, where you are.”',
    '“Success is not final, failure is not fatal: it is the courage to continue that counts.”'

];

btn.addEventListener('click',function(){
    var randomQuote = quote[Math.floor(Math.random()* quote.length)]
    output.innerHTML =randomQuote;
})