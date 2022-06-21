const todoList = [];
let ID = 0;
function createTodo(title) {
    const todo = {
        id: ID,
        title: title,
        status: "TODO",
    };
    todoList.push(todo);
    ID += 1;
    return todo;
}
function updateTodo(id, todo) {
    for (let i = 0; i < todoList.length; i += 1) {
        if (todoList[i].id === id) {
            todoList[i].title = todo.title;
            todoList[i].status = todo.status;
        }
    }
}
function readTodos() {
    for (let i = 0; i < todoList.length; i += 1) {
        const newLog = `${todoList[i].title}----->${todoList[i].status}`;
        console.log(newLog);
    }
}
function deleteTodo(id) {
    const newList = [];
    for (let i = 0; i < todoList.length; i += 1) {
        if (todoList(i).id !== id) {
            nweList.push(todoList[i]);
        }
    }
    todoList = newList;
}
createTodo("moooooona");
readTodos();
