import SingleFile from '@/Components/File/SingleFile'
import NavLink from '@/Components/NavLink'
import Pagination from '@/Components/Pagination'
import SecondaryButton from '@/Components/SecondaryButton'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

export default function Files({ files }) {
  const { data, setData, get } = useForm({
    importer: '',
    created_at: '',
    email: '',
  })

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setData(name, value)
  }

  const handleFilterSubmit = (e) => {
    e.preventDefault()
    get(route('file-all'))
  }

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Rb Files
        </h2>
      }
    >
      <Head title="Files" />

      <div className="pt-2 pb-6">
        <div className="mx-auto max-w-7xl sm:px-6">
          <div className="overflow-hidden bg-white">
            <div id="actions-and-filters" className="mb-4 px-4 py-2">
              <NavLink href={route('file-create-form')}>
                <SecondaryButton>add File</SecondaryButton>
              </NavLink>
            </div>

            {/* Filters Form */}
            <form
              onSubmit={handleFilterSubmit}
              className="mb-4 grid gap-4 sm:grid-cols-3 px-4"
            >
              {/* Importer Filter */}
              <div>
                <label htmlFor="importer" className="block text-sm font-medium text-gray-700">
                  Importer
                </label>
                <input
                  type="text"
                  id="importer"
                  name="importer"
                  value={data.importer}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300 shadow-sm focus:border-cyan-700 focus:ring-cyan-700 sm:text-sm"
                  placeholder="Search by importer"
                />
              </div>

              {/* Created At Filter */}
              <div>
                <label htmlFor="created_at" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="created_at"
                  name="created_at"
                  value={data.created_at}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300 shadow-sm focus:border-cyan-700 focus:ring-cyan-700 sm:text-sm"
                />
              </div>

              {/* Email Filter */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300 shadow-sm focus:border-cyan-700 focus:ring-cyan-700 sm:text-sm"
                  placeholder="Search by email"
                />
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-3 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center border border-transparent bg-cyan-700 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2"
                >
                  Apply Filters
                </button>
              </div>
            </form>

            <div className="px-2 text-gray-900">
              <div className="bg-gray-50 hidden md:grid grid-cols-8 rounded-t py-4 px-2 border-b">
                <p>Entry Number</p>
                <p>Import</p>
                <p>Importer</p>
                <p>Supplier</p>
                <p>Invoice</p>
                <p>Paid</p>
                <p>Tarrif</p>
                <p>Document</p>
              </div>
              <ul>
                {files &&
                  files.data.map((file) => (
                    <SingleFile key={file.id} file={file} />
                  ))}
              </ul>
              {/* Pagination Component */}
              <Pagination links={files.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
