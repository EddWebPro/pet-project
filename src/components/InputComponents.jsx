import React from 'react'
import { IoIosClose } from "react-icons/io";
import '../style.scss';


const InputComponents = ({
    type = 'text',
    name,
    value,
    placeholder,
    onChange,
    onClear,
    error,
    icon,
    ...props
}) => {
     return (
        <div className={`input-components ${error ? 'error' : ''}`}>
            {icon && <span className='input-icon'>{icon}</span>}
            <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
            />
            {onClear && value && (
                <button className='clear-button' onClick={onClear}>
                    <IoIosClose />
                </button>
            )}
            {error && <span className='error-message'>{error}</span>}
        </div>
  )
}


export default InputComponents