import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/icons/logo.svg'

const Auth = (props) => {
    const { name, alternative, alternativeLink, alternativeText, onSubmit , children} = props

    return (
        <div className='flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0'>
            <Brand url="/" logo={Logo} name="REKAP" />
            <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow">
                <h2 className="text-2xl text-center font-bold text-gray-900">{" "} {name} {" "}</h2>
                
                <form onSubmit={onSubmit} >

                    {children}

                    <button className='w-full py-2 bg-blue-600 text-white mt-3 rounded hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600'> {name} </button>
                </form>

                <div className="text-sm font-medium text-gray-500 text-center"> 
                    {" "} {alternative} {" "}
                    <Link to={alternativeLink} className='text-primary-700 hover:underline'> {" "} {alternativeText} </Link>
                </div>
            </div>
        </div>
    )
}

export default Auth


const Brand = (props) => {
    const { url, logo, name } = props;
    return (
      <a href={url} className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
        <img src={logo} className="mr-4 h-11" alt={name} />
        <span>{name}</span>
      </a>
    );
};