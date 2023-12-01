import React, {useState} from "react";
import Logo from "../assets/icons/logo.svg";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_Password, setRePassword] = useState("");

  const SignUp = async (e) => {
    e.preventDefault();
    console.log(`Email : ${email} dan Password : ${password} dan Re-Password : ${re_Password}`);
  }

  return (
    <div>
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <Brand url="/" logo={Logo} name="REKAP" />
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{" "}Sign up to platform{" "}</h2>
            <form className="mt-8 space-y-6" onSubmit={SignUp}>
                <Input 
                  type="email" 
                  title="Email"  
                  name="Email" 
                  placeholder="name@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                  type="password" 
                  title="Password" 
                  name="Password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <Input 
                  type="password" 
                  title="Repeat Password" 
                  name="re_Password" 
                  placeholder="••••••••" 
                  value={re_Password}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <Button type="submit" name="Create Account"/>
                <Auth />
            </form>
        </div>
        </div>
    </div>
  );
};

export default Register;

const Brand = (props) => {
  const { url, logo, name } = props;
  return (
    <a href={url} className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
      <img src={logo} className="mr-4 h-11" alt={name} />
      <span>{name}</span>
    </a>
  );
};

const Input = (props) => {
  const { type, name, placeholder, value, onChange } = props;
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{" "}{title}{" "}</label>
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

const Button = (props) => {
    const {type, name} = props;
    return (
        <button type={type} className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto">{name}</button>
    )
}

const Auth = (props) => {
    return (
        <div className="text-sm font-medium text-gray-500"> 
            {" "} I have an account? {" "}
            <a href="/login" className="text-primary-700 hover:underline dark:text-primary-500">{" "}Login</a>
        </div>
    )
}