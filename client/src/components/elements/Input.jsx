import React from 'react'

const Input = (props) => {
    const { type, name, placeholder, value, onChange } = props;
    return (
      <div className='mt-2'>
        <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{" "}{name}{" "}</label>
        <input
          type={type}
          name={name}
          id={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    );
  };

export default Input