import React from 'react';
import './style.css'

const TITLE = ['Name', 'City', 'Phone', 'Email', 'Funds']

const TableTitle = props => (
  <div className='TableTitle'>
		{
			TITLE.map((title, index) => 
					<span key={index}>{title}</span>
				)
		}
  </div>
)

export default TableTitle;