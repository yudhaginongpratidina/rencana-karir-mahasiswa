import React from 'react'

const Button = (props) => {

    const {type, name, color = 'blue', variant, onClick} = props
    return (
        <button type={type} onClick={onClick} className={`py-2 px-3 bg-${color}-500 text-white rounded ${variant}`}>
            {name}
        </button>
    )
}

export default Button