import React, { useState } from "react";
import Navbar from "../../components/admin/Navbar";

const Kriteria = () => {
  const [formData, setFormData] = useState({
    bidangKarir: "",
    jobs: "",
    keahlian: "",
    pengalaman: "",
    textareaKriteria: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="px-4 pt-6">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            {/* Card header */}
            <div className="items-center justify-between lg:flex">
              <div className="mb-4 lg:mb-0">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Form Kriteria Karir
                </h3>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Form ini digunakan untuk mengisi karir
                </span>
              </div>
            </div>
            {/* Table */}
            <div className="flex flex-col mt-2">
              <div className="overflow-x-auto rounded-lg">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden shadow sm:rounded-lg">
                    <div className="p-8 max-w-2xl mx-auto">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label
                            htmlFor="bidangKarir"
                            className="block text-sm font-medium text-gray-600"
                          >
                            Bidang Karir
                          </label>
                          <select
                            id="bidangKarir"
                            name="bidangKarir"
                            value={formData.bidangKarir}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                          >
                            <option value="">Pilih Bidang Karir</option>
                            <option value="Web Development">
                              Web Development
                            </option>
                            <option value="Mobile Development">
                              Mobile Development
                            </option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="jobs"
                            className="block text-sm font-medium text-gray-600"
                          >
                            Jobs
                          </label>
                          <select
                            id="jobs"
                            name="jobs"
                            value={formData.jobs}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                          >
                            <option value="">Pilih Jobs</option>
                            <option value="Frontend Developer">
                              Frontend Developer
                            </option>
                            <option value="Backend Developer">
                              Backend Developer
                            </option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="keahlian"
                            className="block text-sm font-medium text-gray-600"
                          >
                            Skill / Keahlian
                          </label>
                          <select
                            id="keahlian"
                            name="keahlian"
                            value={formData.keahlian}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                          >
                            <option value="">Pilih Skill / Keahlian</option>
                            <option value="React">React</option>
                            <option value="Node.js">Node.js</option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="pengalaman"
                            className="block text-sm font-medium text-gray-600"
                          >
                            Range Pengalaman Kerja
                          </label>
                          <select
                            id="pengalaman"
                            name="pengalaman"
                            value={formData.pengalaman}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                          >
                            <option value="">
                              Pilih Range Pengalaman Kerja
                            </option>
                            <option value="1">0-1 Tahun</option>
                            <option value="2">2 Tahun</option>
                            <option value="3">3 Tahun</option>
                            <option value="4">4-5 Tahun</option>
                            <option value="5"> Lebih dari 5 Tahun</option>
                          </select>
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="textareaKriteria"
                            className="block text-sm font-medium text-gray-600"
                          >
                            Kriteria
                          </label>
                          <textarea
                            id="textareaKriteria"
                            name="textareaKriteria"
                            value={formData.textareaKriteria}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            rows="4"
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          className="bg-blue-500 text-white p-2 rounded-md"
                        >
                          Simpan
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Kriteria;
