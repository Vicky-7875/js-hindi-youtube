const form = document.querySelector('form')

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (!height || height < 0 || isNaN(height)) {
        results.innerHTML = 'please give a valid height ' + height
    }
    if (!weight || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'please give a valid weight ' + weight
    } else {
        let result = (weight / ((height * height) / 10000)).toFixed(2)
        console.log(typeof result)
        let size;
        let color;
        if (Number(result) > 24.9) {
            size = 'Overweight';
            color = 'red'
        }
        if (Number(result) < 18.6) {
            size = 'Under Weightt'
            color = 'red'
        }
        if (Number(result) > 18.6 && Number(result) < 24.9) {
            size = 'Normal'
            color = 'green'
        }
        results.innerHTML = `${result} you are ${size} range`;
        results.style.color = color
    }
})