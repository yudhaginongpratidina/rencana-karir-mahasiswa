import React, {useState} from "react";
import Logo from "../assets/icons/logo.svg";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = async (e) => {
    e.preventDefault();
    console.log(`Email : ${email} dan Password : ${password}`);
  }

  return (
    <div>
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <Brand url="/" logo={Logo} name="REKAP" />
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-900">{" "}Sign in to platform{" "}</h2>
            <form className="mt-8 space-y-6" onSubmit={Login}>
                <Input 
                  type="email" 
                  name="Email" 
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <Input 
                  type="password" 
                  name="Password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <Button type="submit" name="Login"/>
                <Auth />
            </form>
        </div>
        </div>
    </div>
  );
};

export default Login;

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

const Button = (props) => {
    const {type, name} = props;
    return (
        <button type={type} className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto">{name}</button>
    )
}

const Auth = (props) => {
    return (
        <div className="text-sm font-medium text-gray-500"> 
            {" "} Not registered? {" "}
            <a href="" className="text-primary-700 hover:underline dark:text-primary-500">{" "}Create account</a>
        </div>
    )
}