let displayContent = document.getElementById('displaycontent');
displayContent.textContent ="";
const audio =  document.getElementById('audio')
const uno =    document.getElementById('uno');
const dos =    document.getElementById('dos');
const tres =   document.getElementById('tres');
const cuatro = document.getElementById('cuatro');
const cinco =  document.getElementById('cinco');
const seis =   document.getElementById('seis');
const siete =  document.getElementById('siete');
const ocho =   document.getElementById('ocho');
const nueve =  document.getElementById('nueve');
const cero =   document.getElementById('cero');
const punto =  document.getElementById('punto');

const mas =    document.getElementById('mas');
const menos =  document.getElementById('menos');
const multi=   document.getElementById('multiplicar');
const divid=   document.getElementById('dividir');

const igual =  document.getElementById('igual');
const clear =  document.getElementById('clear');

let operator ='';
let num1 ='';
let num2 ='';


uno.addEventListener('click', 
    function(){ displayContent.textContent = 
        `${displayContent.textContent}${+1}`,audio.currentTime = 0, audio.play()});

dos.addEventListener('click', 
    function(){ displayContent.textContent = 
        `${displayContent.textContent}${+2}`,audio.currentTime = 0, audio.play()});
tres.addEventListener('click', 
    function(){ displayContent.textContent = 
        `${displayContent.textContent}${+3}`,audio.currentTime = 0, audio.play()});
cuatro.addEventListener('click', 
    function(){ displayContent.textContent = 
        `${displayContent.textContent}${+4}`,audio.currentTime = 0, audio.play()});
cinco.addEventListener('click', 
    function(){ displayContent.textContent = 
        `${displayContent.textContent}${+5}`,audio.currentTime = 0, audio.play()});
seis.addEventListener('click', 
    function(){ displayContent.textContent = 
        `${displayContent.textContent}${+6}`,audio.currentTime = 0, audio.play()});
siete.addEventListener('click',
    function(){ displayContent.textContent = 
        `${displayContent.textContent}${+7}`,audio.currentTime = 0, audio.play()});
ocho.addEventListener('click', 
    function(){ displayContent.textContent = 
        `${displayContent.textContent}${+8}`,audio.currentTime = 0, audio.play()});
nueve.addEventListener('click', 
    function(){ displayContent.textContent = 
        `${displayContent.textContent}${+9}`,audio.currentTime = 0, audio.play()});
cero.addEventListener('click', 
    function(){ displayContent.textContent = 
        `${displayContent.textContent}${+0}`,audio.currentTime = 0, audio.play()});
punto.addEventListener('click', 
    function(){ displayContent.textContent = 
        `${displayContent.textContent}.`,audio.currentTime = 0, audio.play()});
clear.addEventListener('click', clean);

        mas.addEventListener('click', function(){
            num1 = Math.fround(parseFloat(displayContent.textContent));
            operator = '+' ; 
            displayContent.textContent = '';
        })

        menos.addEventListener('click', function(){
            num1 = Math.fround(parseFloat(displayContent.textContent));
            operator = '-'
            displayContent.textContent = '';
        })
        multi.addEventListener('click', function(){
            num1 = Math.fround(parseFloat(displayContent.textContent));
            operator = '*'
            displayContent.textContent = '';
        })
        divid.addEventListener('click', function(){
            num1 =  Math.fround(parseFloat(displayContent.textContent));
            operator = '/'
            displayContent.textContent ='';
        })


        igual.addEventListener('click', function(){

            num2 = Math.fround(parseFloat(displayContent.textContent));

            if(operator == '+'){

                return displayContent.textContent = add(num1, num2);

                
            }else if(operator == '-'){

                return displayContent.textContent = substract(num1, num2);

            }else if(operator == '*'){

                return displayContent.textContent = multiply(num1, num2);

            }else if (operator == '/'){

                if(num2 !== 0){
                    return  displayContent.textContent = divide(num1, num2)
                } else { return displayContent.textContent = `Don't try me`, clean}
            } else if(isNaN(num1)){
                return displayContent.textContent = 'Please enter a number first', clean
}
            
        })

    function add (num1, num2) {
        return Math.fround(parseFloat(num1 + num2));}
    
    function substract (num1, num2) {
	    return Math.fround(parseFloat(num1 - num2));}
    function multiply (num1, num2) {
        return Math.fround(parseFloat(num1 * num2));}
    function divide (num1, num2) {
        return Math.fround(parseFloat(num1 / num2));}
    function clean(){
        num1 = '';
        num2 = '';
        operator = '';
        displayContent.textContent = '';
    }