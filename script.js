let form = document.querySelector('form')

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const Weight = parseInt(document.querySelector("#Weight").value)
    const result = document.querySelector("#result")

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else if (Weight === "" || Weight < 0 || isNaN(Weight)) {
        result.innerHTML = `Please give a valid Weight ${Weight}`;
    }
    else {
        const bmi = (Weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `Result: ${bmi}`;
    }




});