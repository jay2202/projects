import React from 'react';

function Todolist(props) {
    const [linestyle, setlinestyle] = React.useState(false);
    const [visible, setvisible] = React.useState(true);
    return (
        <div style={{display:(visible?"block":"none")}}>
            <p onClick={() => (setlinestyle(!linestyle))} id="todoitem" style={{ textDecoration: (linestyle ? "line-through" : "none") }}>{props.text}</p>
            <button onClick={() => {setvisible(!visible) }}><i className="fas fa-times"></i></button>
        </div>
    );
}

export default Todolist;