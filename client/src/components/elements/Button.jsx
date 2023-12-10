import React from 'react'

const Button = (props) => {

    const {type, name, onClick} = props
    return (
        <button type={type} onClick={onClick} className='w-full border bg-blue-500 text-white py-2 rounded '>
            {name}
        </button>
    )
}

export default Button