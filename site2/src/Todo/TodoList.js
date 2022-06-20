import React from "react";
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const s = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props) {
    return (
        <ul style={s.ul}>
            {props.todos.map((e, index) => {
                return <TodoItem to={e} key={e.id} idx={index} change={props.onToggle} />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList