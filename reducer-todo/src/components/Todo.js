import React from 'react';

const Todo = (props) => {
    console.log('Todo',props)
    return (
        <div
            className={`item${props.item.completed ? '-completed' : ''}`}
            onClick={() => props.toggleTask({type: 'TOGGLE_ITEM', payload:props.item.id })}
        >
            
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo