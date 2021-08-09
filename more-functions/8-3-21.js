// Font change
 const changeFont = () => {
     const body = document.getElementsByTagName('body')
     if (body[0].style.fontFamily === "cursive") {
         body[0].style.fontFamily = ''
     } else{
         body[0].style.fontFamily = 'cursive'
     }
 }

// turn innerText into array then turn back into a string
 const scrolling = (event) => {
    console.log(event.target.innerText)
    let arrayOfText = event.target.innerText.split('')
    console.log(arrayOfText)
    arrayOfText.pop()
    console.log(arrayOfText)
    event.target.innerText = arrayOfText.join(' ')
 }

 // find and replace using regular expressions

// Event.preventDefault (stops default of an event)

// Regular expression for tect highlight

