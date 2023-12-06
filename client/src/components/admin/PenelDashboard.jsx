import React from "react";


const Message = [
  {
    id: 1,
    name: "Bonnie Green",
    email: "bonnie.green098@gmail.com",
    subject: "Kritik dan Saran",
    messsage : "pesan baru",
    date : "2022-01-01"
  },
  {
    id: 2,
    name: "Bonnie Green",
    email: "bonnie.green098@gmail.com",
    subject: "Kritik dan Saran",
    messsage : "pesan baru",
    date : "2022-01-01"
  },
  {
    id: 3,
    name: "Bonnie Green",
    email: "bonnie.green098@gmail.com",
    subject: "Kritik dan Saran",
    messsage : "pesan baru",
    date : "2022-01-01"
  },
  {
    id: 4,
    name: "Bonnie Green",
    email: "bonnie.green098@gmail.com",
    subject: "Kritik dan Saran",
    messsage : "pesan baru",
    date : "2022-01-01"
  },
  {
    id: 5,
    name: "Bonnie Green",
    email: "bonnie.green098@gmail.com",
    subject: "Kritik dan Saran",
    messsage : "pesan baru",
    date : "2022-01-01"
  },
  {
    id:6,
    name: "Bonnie Green",
    email: "bonnie.green098@gmail.com",
    subject: "Kritik dan Saran",
    messsage : "pesan baru",
    date : "2022-01-01"
  },
]

const PanelDashboard = () => {
  const limitedMessages = Message.slice(0, 4);

  return (
    <div className="px-4 pt-6">
      <div className="grid grid-cols-1 my-4 xl:grid-cols-2 xl:gap-4">
        
        
        
        
        
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">PESAN</h3>
            <a href="/administrator/message"
              className="inline-flex items-center p-2 text-sm font-medium rounded-lg text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
            >
              Lihat semua
            </a>
          </div>
          
          <table className="table w-full">
            <thead>
              <th>No</th>
              <th>Name</th>
              <th>Message</th>
              <th>Date</th>
            </thead>
            <tbody>
              {limitedMessages.map((message) => (
                <tr key={message.id}>
                  <td>{message.id}</td>
                  <td>{message.name}</td>
                  <td>{message.messsage}</td>
                  <td>{message.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>




        {/* Right PanelDashboard */}
        <div className="grid gap-4">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Database
                </h3>
                <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                  Data Karir
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
              >
                Data Karir
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div id="traffic-by-device" />
            {/* Card Footer */}
            <div className="flex items-center justify-between pt-4 lg:justify-evenly sm:pt-6">
              <div>
                <h3 className="text-gray-500 dark:text-gray-400">Data Job</h3>
                <h4 className="text-xl font-bold dark:text-white">13</h4>
              </div>
              <div>
                <h3 className="text-gray-500 dark:text-gray-400">Data Bidang Karir</h3>
                <h4 className="text-xl font-bold dark:text-white">23</h4>
              </div>
              <div>
                <h3 className="text-gray-500 dark:text-gray-400">Data Skill</h3>
                <h4 className="text-xl font-bold dark:text-white">3</h4>
              </div>
              <div>
                <h3 className="text-gray-500 dark:text-gray-400">Data Pengalaman</h3>
                <h4 className="text-xl font-bold dark:text-white">10</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABEL DATA */}
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        {/* Card header */}
        <div className="items-center justify-between lg:flex">
          <div className="mb-4 lg:mb-0">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Data Karir
            </h3>
            <span className="text-base font-normal text-gray-500 dark:text-gray-400">
              Data karir dari pengunjung web REKAM
            </span>
          </div>

        </div>
        {/* Table */}
        <div className="flex flex-col mt-6">
          <div className="overflow-x-auto rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        Nama
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        Tanggal
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        E-mail
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        Keahlian
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800">
                    <tr>
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        <span className="font-semibold">Bonnie Green</span>
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        Apr 23 ,2021
                      </td>
                      <td className="p-4 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        bonnie.green098@gmail.com
                      </td>
                      <td className="p-4 text-sm font-bold text-gray-900 whitespace-nowrap dark:text-gray-400">
                        Penulis dan Penerjemah
                      </td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        <span className="font-semibold">Jenny Wilson</span>
                      </td>
                      <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                        Apr 23 ,2021
                      </td>
                      <td className="p-4 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        wilsonfromsail@gmail.com
                      </td>
                      <td className="p-4 text-sm font-bold text-gray-900 whitespace-nowrap dark:text-gray-400">
                        Pemasaran dan Perikalanan
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Card Footer */}
        <div className="flex items-center justify-between pt-3 sm:pt-6">
          <div className="flex-shrink-0">
            <a
              href="/administrator/data"
              className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
            >
              Data Karir
              <svg
                className="w-4 h-4 ml-1 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelDashboard;
