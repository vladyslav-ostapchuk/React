import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const s = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'center',
        padding: '.5rem 1rem',
        margin: 0,
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({ to, idx, change }) {
    const { removeTodo } = useContext(Context)
    const clas = []
    if (to.completed) {
        clas.push('done')
    }

    return (

        <li style={s.li}>
            <span className={clas.join(' ')}>
                <input
                    style={s.input}
                    type="checkbox"
                    checked={to.completed}
                    onChange={() => change(to.id)}
                />
                <strong>{idx + 1}</strong>
                &nbsp;
                {to.title}
            </span>
            <button className='rm' onClick={removeTodo.bind(null, to.id)}>&times;</button>
        </li>
    )
}


TodoItem.propTypes = {
    to: PropTypes.object.isRequired,
    idx: PropTypes.number,
    change: PropTypes.func.isRequired,
}

export default TodoItem