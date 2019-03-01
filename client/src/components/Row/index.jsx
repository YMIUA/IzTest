import React from 'react';
import './style.css'
import edit from './../../icon/edit.svg'

const Row = props => {
  const { handleClick } =props;
	const { name, city, phone, email, funds, id} = props.item
  return (
    <div className='Row'>
      <div key='name' title={name}>
        <button onClick={handleClick}>
          <img id={`name_${id}`}  alt='edit' src={edit}/>
        </button>
        {name}
      </div>
      <div key='city' title={city}>
        <button onClick={handleClick}>
          <img id={`city_${id}`}  alt='edit' src={edit}/>
        </button>
        {city}
      </div>
      <div key='phone' title={phone}>
        <button onClick={handleClick}>
          <img id={`phone_${id}`} alt='edit' src={edit}/>
        </button>
        {phone}
      </div>
      <div key='email' title={email}>
        <button onClick={handleClick}>
          <img id={`email_${id}`} alt='edit' src={edit}/>
        </button>
        {email}
      </div>
      <div key='funds' title={funds}>
        <button onClick={handleClick}>
          <img id={`funds_${id}`} alt='edit' src={edit}/>
        </button>
        {funds}
      </div>
    </div>
  );
}

export default Row;