
const list = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS = []


filter.addEventListener('input', (event) =>{
    const value =  event.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user) => 
        user.name.toLowerCase().includes(value)
    )
    render(filteredUsers)
})

async function start() {
    try {
        list.innerHTML = 'loading...'
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        setTimeout (() => {
            USERS = data
            render(data)
        }, 2000)
        
    } catch (err) {}
}

function render(users = []) {
    const html = users.map(toHTML).join('')
    list.innerHTML = html
}

function toHTML(users){
    return `
    <li>${users.name}</li>
    `
}

start()