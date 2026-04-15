import {useState} from 'react'

function TodoList(){
    const [todoData, setTodoData] = useState({
        action: '',
        items: [],
        newItem: null,
        id: 0
    })
    const handleAddButton = () => {
    let data = {
        action: 'add',
        items: todoData.items,
        newItem: todoData.newItem,
        id: 0
    }
    setTodoData(data)
    }
    const handleDeleteButton = (deleteId, e) => {
    let data = {
        action: 'delete',
        items: todoData.items,
        newItem: todoData.newItem,
        id: deleteId
    }
    setTodoData(data)
    }
    const handleInput = (e) => {
        var id = 0
        if(todoData.newItem == null) {
            for(let i = 0; i < todoData.items.length; i++) {
                if(id < todoData.items[i].id) {
                    id = todoData.items[i].id
                }
            }
            id += 1
        } else {
            id = todoData.newItem.id
        }
        let data = {
            actions: '',
            items: todoData.items,
            newItem: {
                id: id,
                todo: e.target.value
            },
            id: 0
        }
        setTodoData(data)
        }
        if(todoData.action == 'add') {
        if(todoData.newItem != null) {
            let data = {
                action: '',
                items: [...todoData.items, todoData.newItem],
                newItem: null,
                id: 0
            }
            setTodoData(data)
        }
        }
        if(todoData.action == 'delete' && todoData.id != 0) {
        var newItemList = []
        for(let i = 0; i < todoData.items.length; i++) {
            if(todoData.items[i].id != todoData.id) {
                newItemList.push(todoData.items[i])
            }
        }
        let data = {
            action: '',
            items: newItemList,
            newItem: null,
            id: 0
        }
        setTodoData(data)
        }
    return(
        <div>
        <p>List of Todo list</p>
        <ul>
            {todoData.items && todoData.items.map((item) =>
                <li key={item.id}>{item.todo} <span><button onClick={(e) =>
                handleDeleteButton(item.id, e)}>Delete</button></span></li>
            )}
            <li><input type="text" name="todo" onChange={handleInput} />
            <button onClick={handleAddButton}>Add</button></li>
        </ul>
        </div>
    )
}
export default TodoList;