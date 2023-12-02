import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import bgJumbotron from '../assets/images/bg-jumbotron.jpg'


const Content = [
  {
    id : 1,
    url : "/",
    // image : "https://flowbite.com/docs/images/blog/image-1.jpg",
    title : "Tips membuat CV yang baik",
    description : "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  },
  {
    id : 2,
    url : "/",
    // image : "https://flowbite.com/docs/images/blog/image-1.jpg",
    title : "Persiapan apa saja yang harus dilakukan sebelum interview",
    description : "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  },
  {
    id : 3,
    url : "/",
    // image : "https://flowbite.com/docs/images/blog/image-1.jpg",
    title : "Tips menjawab pertanyaan interview kerja",
    description : "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  },
  {
    id : 4,
    url : "/",
    // image : "https://flowbite.com/docs/images/blog/image-1.jpg",
    title : "Noteworthy technology acquisitions 2021",
    description : "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  },
  {
    id : 5,
    url : "/",
    // image : "https://flowbite.com/docs/images/blog/image-1.jpg",
    title : "Noteworthy technology acquisitions 2021",
    description : "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  },
  {
    id : 6,
    url : "/",
    // image : "https://flowbite.com/docs/images/blog/image-1.jpg",
    title : "Noteworthy technology acquisitions 2021",
    description : "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  },
  {
    id : 7,
    url : "/",
    // image : "https://flowbite.com/docs/images/blog/image-1.jpg",
    title : "Noteworthy technology acquisitions 2021",
    description : "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  },
  {
    id : 8,
    url : "/",
    // image : "https://flowbite.com/docs/images/blog/image-1.jpg",
    title : "Noteworthy technology acquisitions 2021",
    description : "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  },
  {
    id : 9,
    url : "/",
    // image : "https://flowbite.com/docs/images/blog/image-1.jpg",
    title : "Noteworthy technology acquisitions 2021",
    description : "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  },
]

const ArticleLIst = () => {
  const itemsPerPage = 3; // Jumlah item yang ditampilkan per halaman
  const [displayedItems, setDisplayedItems] = useState(itemsPerPage);

  const showMoreItems = () => {
    setDisplayedItems(prevCount => prevCount + itemsPerPage);
  };

  return (
    <div className='py-5'>
      <h1 className='text-center text-3xl font-bold mb-3'>Article Terbaru</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3'>
        {Content.slice(0, displayedItems).map((item, index) => (
          <CardArticle 
            key={index} 
            url={item.url}
            // image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {displayedItems < Content.length && (
        <div className='text-center mt-4'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={showMoreItems} >
            Tampilkan Lebih Banyak Artikel
          </button>
        </div>
      )}
    </div>
  );
};



const CardArticle = (props) => {

  const {url, title, description} = props

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow mx-auto">
        <Link to={url}>
            <img className="rounded-t-lg" src={bgJumbotron} alt="" />
        </Link>
        <div className="p-5">
            <Link to={url}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700">{description}</p>
            <Link to={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Baca Selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor"  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
  )
}

export default ArticleLIst