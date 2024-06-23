import React from 'react'
import './input.scss'
import SVG from './SVG'

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

                    {/* <IoIosClose /> */}
                </button>
            )}
            {error && <span className='error-message'>{error}</span>}
        </div>
  )
    }
    if(mode == 'textarea'){
return (
    <div className='input_container-text-area'>
        <textarea placeholder='Pain between 14 and 15 teeth' {...props} className='TextArea'/>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M12 24C18.5647 24 24 18.5529 24 12C24 5.43529 18.5529 0 11.9882 0C5.43529 0 0 5.43529 0 12C0 18.5529 5.44705 24 12 24Z" fill="black" fill-opacity="0.04"/>
<path d="M7.86242 17.1429C7.29848 17.1429 6.85714 16.6887 6.85714 16.1242C6.85714 15.8541 6.95521 15.5963 7.15136 15.4121L10.5472 12L7.15136 8.60006C6.95521 8.40368 6.85714 8.15819 6.85714 7.88817C6.85714 7.31128 7.29848 6.88169 7.86242 6.88169C8.14438 6.88169 8.36505 6.97988 8.5612 7.164L11.9816 10.5762L15.4265 7.15172C15.6349 6.94306 15.8556 6.85714 16.1253 6.85714C16.6892 6.85714 17.1429 7.29901 17.1429 7.86362C17.1429 8.14593 17.057 8.36686 16.8363 8.58779L13.4282 12L16.8241 15.4C17.0325 15.5841 17.1306 15.8417 17.1306 16.1242C17.1306 16.6887 16.677 17.1429 16.1008 17.1429C15.8188 17.1429 15.5613 17.0447 15.3774 16.8482L11.9816 13.4361L8.59797 16.8482C8.40184 17.0447 8.14438 17.1429 7.86242 17.1429Z" fill="black" fill-opacity="0.8"/>
</g>
</svg>
    </div>
        
      )
    }

    if ( mode == 'phone'){
        return (
            <div className='input_container-phone'>
                <input  placeholder='+971 4 54 12 72' number={number} {...props} className='InputPhone' />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M12 24C18.5647 24 24 18.5529 24 12C24 5.43529 18.5529 0 11.9882 0C5.43529 0 0 5.43529 0 12C0 18.5529 5.44705 24 12 24Z" fill="black" fill-opacity="0.04"/>
<path d="M7.86242 17.1429C7.29848 17.1429 6.85714 16.6887 6.85714 16.1242C6.85714 15.8541 6.95521 15.5963 7.15136 15.4121L10.5472 12L7.15136 8.60006C6.95521 8.40368 6.85714 8.15819 6.85714 7.88817C6.85714 7.31128 7.29848 6.88169 7.86242 6.88169C8.14438 6.88169 8.36505 6.97988 8.5612 7.164L11.9816 10.5762L15.4265 7.15172C15.6349 6.94306 15.8556 6.85714 16.1253 6.85714C16.6892 6.85714 17.1429 7.29901 17.1429 7.86362C17.1429 8.14593 17.057 8.36686 16.8363 8.58779L13.4282 12L16.8241 15.4C17.0325 15.5841 17.1306 15.8417 17.1306 16.1242C17.1306 16.6887 16.677 17.1429 16.1008 17.1429C15.8188 17.1429 15.5613 17.0447 15.3774 16.8482L11.9816 13.4361L8.59797 16.8482C8.40184 17.0447 8.14438 17.1429 7.86242 17.1429Z" fill="black" fill-opacity="0.8"/>
</g>
</svg>
            </div>
                
        )
    }

    if(mode == 'name'){
        return(
            <div className='input_container-name'>
                <input placeholder='Onurhan' name={name} {...props} className='InputName'/>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M12 24C18.5647 24 24 18.5529 24 12C24 5.43529 18.5529 0 11.9882 0C5.43529 0 0 5.43529 0 12C0 18.5529 5.44705 24 12 24Z" fill="black" fill-opacity="0.04"/>
<path d="M7.86242 17.1429C7.29848 17.1429 6.85714 16.6887 6.85714 16.1242C6.85714 15.8541 6.95521 15.5963 7.15136 15.4121L10.5472 12L7.15136 8.60006C6.95521 8.40368 6.85714 8.15819 6.85714 7.88817C6.85714 7.31128 7.29848 6.88169 7.86242 6.88169C8.14438 6.88169 8.36505 6.97988 8.5612 7.164L11.9816 10.5762L15.4265 7.15172C15.6349 6.94306 15.8556 6.85714 16.1253 6.85714C16.6892 6.85714 17.1429 7.29901 17.1429 7.86362C17.1429 8.14593 17.057 8.36686 16.8363 8.58779L13.4282 12L16.8241 15.4C17.0325 15.5841 17.1306 15.8417 17.1306 16.1242C17.1306 16.6887 16.677 17.1429 16.1008 17.1429C15.8188 17.1429 15.5613 17.0447 15.3774 16.8482L11.9816 13.4361L8.59797 16.8482C8.40184 17.0447 8.14438 17.1429 7.86242 17.1429Z" fill="black" fill-opacity="0.8"/>
</g>
</svg>
            </div>
                
        )
        
    }
    
     
}


export default InputComponents