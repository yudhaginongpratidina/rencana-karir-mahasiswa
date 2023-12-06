import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";


const MessageList = () => {
    const columns = [
        {
          name: "Nama",
          selector: (row) => row.name,
          sortable: true,
        },
        {
          name: "Email",
          selector: (row) => row.email,
          sortable: true,
        },
        {
          name: "Subject",
          selector: (row) => row.subject,
          sortable: true,
        },
        {
          name: "Isi Pesan",
          selector: (row) => row.isiPesan,
          sortable: true,
        },
        {
          name: "Tanggal",
          selector: (row) => row.date,
          sortable: true,
        },
      ];
    
      const dataPesan = [
        {
          id: 1,
          name: "Bonnie Green",
          email: "bonnie.green098@gmail.com",
          subject: "Review",
          isiPesan:
            "This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.",
          date: "Apr 23, 2022",
        },
        {
          id: 2,
          name: "Jenny Wilson",
          email: "wilsonfromsail@gmail.com",
          subject: "Review",
          isiPesan:
            "This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.",
          date: "Apr 24, 2023",
        },
      ];
      const [records, setRecords] = useState(dataPesan);
    
      function handleFilter(event) {
        const newData = dataPesan.filter((row) => {
          return row.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
      }
  return (
    <div className="px-4 pt-6">
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        {/* Card header */}
        <div className="items-center justify-between lg:flex">
          <div className="mb-4 lg:mb-0">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Data Pesan
            </h3>
            <span className="text-base font-normal text-gray-500 dark:text-gray-400">
              Data Pesan dari pengunjung web REKAM
            </span>
          </div>
          <div className="items-center sm:flex">
            <label htmlFor="topbar-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1 lg:w-96">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="topbar-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
                onChange={handleFilter}
              />
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="flex flex-col mt-6">
          <div className="overflow-x-auto rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow sm:rounded-lg">
                <DataTable
                  columns={columns}
                  data={records}
                  fixedHeader
                  pagination
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageList