import React from 'react'
import { IoIosClose } from "react-icons/io";
import './input.scss'
import { renderToStaticMarkup } from 'react-dom/server';


const InputComponents = ({
    type = 'text',
    name,
    value,
    number,
    placeholder,
    onChange,
    onClear,
    error,
    icon,
    mode,
    ...props
}) => {
    if(mode == 'ordenar'){
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
    if(mode == 'textarea'){
return (
        <textarea placeholder='Pain between 14 and 15 teeth' {...props} className='TextArea'/>
      )
    }

    if ( mode == 'phone'){
        return (
                <input  placeholder='+971 4 54 12 72' number={number} {...props} className='InputPhone'/>
        )
    }

    if(mode == 'name'){
        return(
                <input placeholder='Onurhan' name={name} {...props} className='InputName'/>
        )
        
    }
    
     
}


export default InputComponents