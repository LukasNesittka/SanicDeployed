let bored = document.querySelector(".bored")

const boredBtn = (evt) => {
    evt.preventDefault()
    axios
        .get('http://localhost:4000/api/activity')
        .then(res => {
            console.log(res.data)
            const { activity } = res.data
            document.querySelector('.activity').textContent = activity
        })
}

document.querySelector(".bored").addEventListener('click',boredBtn)