import React from 'react'

const Tim = () => {
  return (
    <div className='my-5'>
        <h1 className='text-center text-3xl font-bold mb-3'>Tim Kami</h1>

        <div className="grid gap-2 mb-8 rounded-lg md:mb-12 py-3 px-4 md:grid-cols-2 xl:grid-cols-3 bg-white">
            <CardTim
                jobdesk="Lead and Fullstcak Developer"
                name="Yudha Ginong Pratidina"
                nim="21104410001"
                image="https://flowbite.com/docs/images/logo.svg"
                description="Yudha Ginong Pratidina merupakan mahasiswa semester 5 dari kampus Universitas Islam Balitar, Program Studi Teknik Informatika. Saat ini, ia menjabat sebagai Lead and Fullstcak Developer."
            />
            <CardTim
                jobdesk="Front End Developer | Support"
                name="Hilga Satria Pambudi"
                nim="21104410009"
                image="https://flowbite.com/docs/images/logo.svg"
                description="Hilga Satria Pambudi merupakan mahasiswa semester 5 dari kampus Universitas Islam Balitar, Program Studi Teknik Informatika. Saat ini, ia menjabat sebagai Front End Developer | Support."
            />
            <CardTim
                jobdesk="Support | Resource Management"
                name="Nugroho Nurwanda Zakaria"
                nim="21104410031"
                image="https://flowbite.com/docs/images/logo.svg"
                description="Nugroho Nurwanda Zakaria merupakan mahasiswa semester 5 dari kampus Universitas Islam Balitar, Program Studi Teknik Informatika. Saat ini, ia menjabat sebagai Support and Resource Management."
            />
            <CardTim
                jobdesk="Support | Report Preparer"
                name="Bayu Samudra"
                nim="21104410034"
                image="https://flowbite.com/docs/images/logo.svg"
                description="Bayu Samudra merupakan mahasiswa semester 5 dari kampus Universitas Islam Balitar, Program Studi Teknik Informatika. Saat ini, ia menjabat sebagai Support and Report Preparer."
            />
            <CardTim
                jobdesk="Resource Management | PPT Maker | Report Preparer"
                name="Intan Aisyah Wulandari"
                nim="21104410018"
                image="https://flowbite.com/docs/images/logo.svg"
                description="Intan Aisyah Wulandari merupakan mahasiswa semester 5 dari kampus Universitas Islam Balitar, Program Studi Teknik Informatika. Saat ini, ia menjabat sebagai Resource Management | PPT Maker | Report Preparer."
            />
        </div>
    </div>
  )
}



const CardTim = (props) => {

    const {
        description = '-', 
        name = 'your name', 
        nim = 'your nim',
        jobdesk = 'your job desk', 
        image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png'
    } = props
    return (
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white shadow-lg">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                <h3 className="text-lg font-semibold text-gray-900">{jobdesk}</h3>
                <p className="my-4">{description}</p>
            </blockquote>
            <figcaption className="flex flex-col items-center justify-center ">
                <img className="rounded-full w-9 h-9" src={image} alt={name}/>
                <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                    <div>{name}</div>
                    <div className="text-sm text-gray-500 text-center">{nim}</div>
                </div>
            </figcaption>    
        </figure>
    )
}

export default Tim