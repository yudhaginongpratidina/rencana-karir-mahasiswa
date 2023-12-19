import React from 'react'
import { Link } from 'react-router-dom'

const PanelItem = (props) => {
    const { Name, Count, Url, Variant } = props
    return (
      <div className={`flex justify-between items-center p-3 border rounded-lg shadow ${Variant}`}>
        <div>
          <h3 className={`text-gray-500 ${Variant}`}> {Name} </h3>
          <p className={`text-3xl font-medium ${Variant}`}> {Count} </p>
        </div>
        <div>
          <Link to={Url} >
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path  d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    )
}

export default PanelItem