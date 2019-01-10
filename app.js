
const celciusInput = document.querySelector('#celcius>Input');
const ferenhietInput = document.querySelector('#ferenhiet>Input');
const kelvinInput = document.querySelector('#kelvin>Input');
function roundnum(num)
{
    return Math.round(num*100)/100;
}
function celciusToFarenhietAndKelvin()
{
    const cTemp=parseFloat(celciusInput.value);
    const fTemp=(cTemp*(9/5))+32;

    console.log(celciusInput.value);
    
    
    const kTemp=cTemp+273.15;
    
    console.log(typeof cTemp);
    console.log(kTemp);
    ferenhietInput.value=roundnum(fTemp);
    kelvinInput.value=roundnum(kTemp);
}
function farenhietToCelciusAndKelvin(){
    const fTemp=parseFloat(ferenhietInput.value);
    console.log(fTemp);
    const cTemp=(fTemp-32)*(5/9);
    const kTemp=(fTemp+450)*(5/9);
    celciusInput.value=roundnum(cTemp);
    kelvinInput.value=roundnum(kTemp);
}
function kelvinToCelciusAndFerenhiet(){
    const kTemp=parseFloat(kelvinInput.value);
    console.log(fTemp);
    const cTemp=(kTemp-273.15);
    const fTemp=(kTemp-273)+32;
    celciusInput.value=roundnum(cTemp);
    ferenhietInput.value=roundnum(fTemp);
}
celciusInput.addEventListener('input',celciusToFarenhietAndKelvin);
ferenhietInput.addEventListener('input',farenhietToCelciusAndKelvin);
kelvinInput.addEventListener('input',kelvinToCelciusAndFerenhiet);



