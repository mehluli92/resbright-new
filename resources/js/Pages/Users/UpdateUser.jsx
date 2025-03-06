import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PhoneNumber from '@/Components/PhoneNumber'
import PrimaryButton from '@/Components/PrimaryButton'
import RoleDropdown from '@/Components/Role/RoleDropdown'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

export default function UpdateUser({ roles, user }) {
  const { data, setData, put, errors, processing } = useForm({
    name: user.name || '',
    surname: user.surname || '',
    email: user.email || '',
    role: user.role || 3,
    mobile: user.mobile || '',
    idnumber: user.idnumber || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    put(
      route('user.update.entity', user.id)
    )
  }

  function handleRoleUpdate(data) {
    setData('role', parseInt(data))
  }

  function updateMobile(data) {
    setData('mobile', data)
  }

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Update User
        </h2>
      }
    >
      <Head title="Update User" />

      <div className="pt-2 pb-6">
        <div className="mx-auto max-w-7xl sm:px-6">
          <div className="overflow-hidden">
            <div className="px-2 text-gray-900">
              <form
                className="shadow-lg w-3/5 pb-6"
                onSubmit={handleSubmit}
              >
                <div className="px-4 mb-2">
                  <InputLabel htmlFor="name" value="Name" required={true} />
                  <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 py-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="px-4 mb-2">
                  <InputLabel htmlFor="surname" value="Surname" required={true} />
                  <TextInput
                    id="surname"
                    name="surname"
                    value={data.surname}
                    className="mt-1 py-1 block w-full"
                    autoComplete="surname"
                    isFocused={true}
                    onChange={(e) => setData('surname', e.target.value)}
                    required
                  />
                  <InputError message={errors.surname} className="mt-2" />
                </div>

                <div className="px-4 mb-2">
                  <InputLabel htmlFor="email" value="Email" required={true} />
                  <TextInput
                    id="email"
                    name="email"
                    value={data.email}
                    className="mt-1 py-1 block w-full"
                    autoComplete="email"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                    required
                  />
                  <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="px-4 mb-2">
                  <InputLabel htmlFor="mobile" value="Mobile Number" required={true} />
                  <PhoneNumber 
                  id="mobile" 
                  updateMobile={updateMobile} 
                  currentMobile={data.mobile}
                  />
                </div>

                <div className="px-4 mb-2">
                  <InputLabel htmlFor="idnumber" value="ID Number" required={true} />
                  <TextInput
                    id="idnumber"
                    name="idnumber"
                    value={data.idnumber}
                    className="mt-1 py-1 block w-full"
                    autoComplete="idnumber"
                    isFocused={true}
                    onChange={(e) => setData('idnumber', e.target.value)}
                    required
                  />
                  <InputError message={errors.idnumber} className="mt-2" />
                </div>

                <div className="px-4 mb-2">
                  {roles && <RoleDropdown roles={roles} updateRole={handleRoleUpdate} />}
                </div>

                <div className="px-4">
                  <PrimaryButton disabled={processing}>Update</PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
