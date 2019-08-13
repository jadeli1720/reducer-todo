import React, {useState, useReducer} from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';


export default function TodoForm (props) {
    // const {addItem} = props;
    const [newTodo, setNewTodo] = useState('');
    //reducer
  const [state, dispatch]= useReducer(todoReducer, initialState);
//   console.log('TodoForm', props)

    function handleChange(e) {
        setNewTodo(e.target.value);
    }

    function submitTodo (e)  {
        e.preventDefault();
        // addItem(newTodo)
        setNewTodo('');
        
        
    }

    return (
        <form onSubmit={submitTodo}>
            <input
                type="text"
                value={newTodo.name}
                name="name"
                onChange={handleChange}
            />
            <button onClick={() => dispatch({type: 'ADD_ITEM', payload: setNewTodo})}>Add</button>
            {/* onClick={() => dispatch({type: 'ADD_ITEM'})} */}
        </form>
    );
}