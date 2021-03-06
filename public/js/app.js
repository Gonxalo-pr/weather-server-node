

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;
    const url = '/weather?address=' + location
    fetch(url).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            messageOne.textContent = data.error
        }
       messageOne.textContent = data.location 
       messageTwo.textContent = data.forecast

    })
})

}
)
