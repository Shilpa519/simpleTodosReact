import './index.css'

const TodoItem = props => {
  const {todoItems, deleteUser} = props
  const {title, id} = todoItems
  console.log(todoItems)

  const onDelete = () => {
    deleteUser(id)
    console.log(id)
  }

  return (
    <li className="todo-list-container">
      <p className="description">{title}</p>
      <button className="delete-Button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
