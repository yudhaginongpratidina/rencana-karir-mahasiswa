import React from "react";
import Logo from "../assets/icons/logo.svg";

const Login = () => {
  return (
    <div>
        <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
        <Brand url="/" logo={Logo} name="REKAP" />
        <div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{" "}Sign in to platform{" "}</h2>
            <form class="mt-8 space-y-6" action="#">
                <Input type="email" name="Email" placeholder="name@company.com" />
                <Input type="password" name="Password" placeholder="••••••••" />
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
    <a href={url} class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
      <img src={logo} class="mr-4 h-11" alt={name} />
      <span>{name}</span>
    </a>
  );
};

const Input = (props) => {
  const { type, name, placeholder } = props;
  return (
    <div>
      <label for={name} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{" "}{name}{" "}</label>
      <input
        type={type}
        name={name}
        id={name}
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

const Button = (props) => {
    const {type, name} = props;
    return (
        <button type={type} class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto">{name}</button>
    )
}

const Auth = (props) => {
    return (
        <div class="text-sm font-medium text-gray-500"> 
            {" "} Not registered? {" "}
            <a href="" class="text-primary-700 hover:underline dark:text-primary-500">{" "}Create account</a>
        </div>
    )
}