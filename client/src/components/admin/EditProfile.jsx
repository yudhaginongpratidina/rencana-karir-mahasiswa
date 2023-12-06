import React, {useState} from 'react'

const EditProfile = () => {

    const [fullName, setFullName] = useState('Admin 1')
    const [email, setEmail] = useState('admin@gmail.com')
    const [password, setPassword] = useState('kesehatan')
    const [re_Password, setRePassword] = useState('kesehatan')

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='w-full max-w-xl mx-auto mt-10 p-6 bg-white border rounded-lg shadow-md"'>

                <img
                    className='w-24 mx-auto mb-6 -mt-20' 
                    src="https://flowbite.com/docs/images/logo.svg" 
                    alt="" 
                />

                <h1 className='text-2xl font-medium mb-6 text-center'>PROFILE</h1>

                <form>
                    <Input
                        id="fullName"
                        type="text"
                        name="Full Name"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <Input
                        id="email"
                        type="email"
                        name="Email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        id="password"
                        type="password"
                        name="Password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        id="re_password"
                        type="password"
                        name="Re-Password"
                        placeholder="Re-Password"
                        value={re_Password}
                        onChange={(e) => setRePassword(e.target.value)}
                    />
                    <button className='bg-blue-500 text-white px-4 py-2 rounded w-full'>Update</button>
                </form>
                <button className='bg-red-500 text-white px-4 py-2 rounded w-full my-3'>Delete Account</button>
            </div>
        </div>
    )
}

export default EditProfile

const Input = (props) => {
    const {id, type, name, placeholder, value, onChange} = props
    return (
        <div className='mb-4'>
            <label 
                htmlFor={id} 
                className="block text-sm font-medium text-gray-600" 
            > {name} </label>


            <input 
                className="mt-1 p-2 w-full rounded-md" 
                id={id} 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    )
}