console.log('index.js here!')

let index = 0

const form = document.getElementById('todoForm')
form.addEventListener('submit', event => {
    event.preventDefault()
    addTodo()
})

function addTodo() {
    const child = document.createElement('div')
    const todos = document.getElementById('todos')

    child.id = `todo${index}`
    child.className = "todo"
    child.innerHTML = document.getElementById('todoInput').value
    todos.appendChild(child)

    document.getElementById('todoInput').value = ''
    index++
}
