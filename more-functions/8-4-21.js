// A synchronous programming
// .then dealing with promises with Fetch we have to resolve two promises

function handleFetchRequest() {
    const result =fetch("https://baconipsum.com/api/?type=meat-and-filler")
        .then(response => {
            return response.json()
        }).then(data => {
            let accumulator = ""
            for(let i = 0; i < data.length; i++) {
                accumulator = accumulator + `<p>${data[i]}</p>`

            }
            console.log(accumulator)
            document.getElementById("target").innerHTML = accumulator
            }
        )
}






