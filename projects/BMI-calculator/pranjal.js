const form = document.querySelector('form')
form.addEventListener('submit', function(obj){
 const height = parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)
 const results = document.querySelector('#results')
 if(height === '' || height <0 || isNaN(height)){
    results.innerHTML= `please enter valid height ${heigth}`
 }else if(weight ===''||weight<0 ||isNaN(weight)){
    results.innerHTML =`please enter valid weight ${weight}`
 }
 else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi} Under Weigth</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>${bmi} Normal Range</span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi} Overweight</span>`;
    }
 }
})