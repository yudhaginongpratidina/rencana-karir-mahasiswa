import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const url = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "Article",
      url: "#",
    },
    {
      name: "Career",
      url: "#",
    },
    {
      name: "Contact",
      url: "#",
    }
  ]


  return (
    <Template>
      <Copyright title="REKAP" year="2023" />
      <Menu>
        {url.map((item, index) => (
          <li key={index}>
            <Link to={item.url} class="me-4 md:me-6">{item.name}</Link>
          </li>
        ))}
      </Menu>
    </Template>
  )
}

export default Footer

const Template = (props) => {
  const {children} = props;
  return (
    <footer class="bg-red-500 py-3 shadow">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        {children}
      </div>
    </footer>
  )
}

const Copyright = (props) => {
  const {title, year} = props;

  return (
    <span class="text-sm text-white sm:text-center">
      © {year} <a href="/" class="hover:underline">{title}</a> | All Rights Reserved.
    </span>
  )
}

const Menu = (props) => {
  const {children} = props;
  return (
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white  sm:mt-0">
      {children}
    </ul>
  )
}