import Checkbox from '@/Components/Checkbox'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextArea from '@/Components/TextArea'
import TextInput from '@/Components/TextInput'
import UserSearch from '@/Components/User/UserSearch'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm, usePage } from '@inertiajs/react'
import React, { useEffect } from 'react'

export default function EditFile({ file }) {
    const authUser = usePage().props.auth.user;
    const { data, setData, post, errors, processing } = useForm({
        id: file.id,
        user_id: file.user_id || '',
        import: file.import || false,
        entry_number: file.entry_number || '',
        importer: file.importer || '',
        supplier: file.supplier || '',
        description: file.description || '', //big text
        bill_of_lading: file.bill_of_lading || '', //big text
        tarrif: file.tarrif || 0.0,
        weight: file.weight || 0,
        quantity_of_boxes: file.quantity_of_boxes || 1,
        manifest: file.manifest || '', //big text
        container: file.container || '',
        paid: file.paid || '',
        currency: file.currency || 0,
        document: file.document || null, // pdf to upload (optional replacement)
        invoice: file.invoice || null, //pdf invoice
        user: null,
        address1:  file.destination?.address1 || '',
        address2:  file.destination?.address2 || '',
        country:  file.destination?.country || '',
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('_method', 'PUT');
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value)
        })

        post(route('file-update', file.id), {
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }

    function handleImportChange(e) {
        const { checked } = e.target;
        const a = checked == true ? 1 : 0
        setData('import', a)
    }

    function handleUserChange (data) {
        setData('user_id', data)
    }

    function handleFileChange(e) {
        setData('document', e.target.files[0]) // Set the file in state
    }

    function handleInvoiceChange(e) {
        setData('invoice', e.target.files[0]) 
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Rb File
                </h2>
            }
        >
            <Head title="Edit File" />

            <div className="pt-2 pb-6">
                <div className="mx-auto max-w-7xl sm:px-6">
                    <div className="overflow-hidden">
                        <div className="px-2 text-gray-900">
                        <p className='text-xs text-gray-300'>Please note that the fields marked with an asterix are required.</p>

                            <form
                                onSubmit={handleSubmit}
                                encType="multipart/form-data"
                                className="grid grid-rows md:grid-cols-2 gap-1 shadow-lg"
                            >
                                {/* side 1 */}
                                <div id="side1">
                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="importer" value="Importer" required={true} />
                                        <TextInput
                                            id="importer"
                                            name="importer"
                                            value={data.importer}
                                            className="mt-1 py-1 block w-full"
                                            autoComplete="importer"
                                            onChange={(e) => setData('importer', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.importer} className="mt-2" />
                                    </div>

                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="entry_number" value="Entry Number" />
                                        <TextInput
                                            id="entry_number"
                                            name="entry_number"
                                            value={data.entry_number}
                                            className="mt-1 py-1 block w-full"
                                            autoComplete="entry_number"
                                            onChange={(e) => setData('entry_number', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.entry_number} className="mt-2" />
                                    </div>

                                    <div className="px-4 mb-2 flex flex-rows gap-2">
                                        <InputLabel htmlFor="import" value="Import" />
                                        <Checkbox
                                            checked={data.import}
                                            onChange={handleImportChange}
                                            id="import"
                                        />
                                    </div>

                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="user" value="Select user associated with file" required={true} />
                                        <UserSearch id="user" handleUserChange={handleUserChange} user={file.user} />
                                    </div>

                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="supplier" value="Supplier" required={true} />
                                        <TextInput
                                            id="supplier"
                                            name="supplier"
                                            value={data.supplier}
                                            className="mt-1 py-1 block w-full"
                                            autoComplete="supplier"
                                            onChange={(e) => setData('supplier', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.supplier} className="mt-2" />
                                    </div>

                                    <h3 className='px-4 my-2 text-xl font-bold'>Package Description</h3>

                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="description" value="Description" />
                                        <TextArea
                                            id="description"
                                            name="description"
                                            value={data.description}
                                            className="mt-1 py-1 block w-full h-18"
                                            autoComplete="description"
                                            onChange={(e) => setData('description', e.target.value)}
                                        />
                                        <InputError message={errors.description} className="mt-2" />
                                    </div>

                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="bill_of_lading" value="Bill of Lading" />
                                        <TextArea
                                            id="bill_of_lading"
                                            name="bill_of_lading"
                                            value={data.bill_of_lading}
                                            className="mt-1 py-1 block w-full h-24"
                                            autoComplete="bill_of_lading"
                                            onChange={(e) => setData('bill_of_lading', e.target.value)}
                                        />
                                        <InputError message={errors.bill_of_lading} className="mt-2" />
                                    </div>
                                </div>
                                {/* side 2 */}
                                <div id="side2">
                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="paid" value="Amount Paid" />
                                        <TextInput
                                            id="paid"
                                            name="paid"
                                            type="number"
                                            value={data.paid}
                                            className="mt-1 py-1 block w-full"
                                            autoComplete="paid"
                                            onChange={(e) => setData('paid', e.target.value)}
                                        />
                                        <InputError message={errors.paid} className="mt-2" />
                                    </div>

                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="currency" value="Currency of payment"/>
                                        <select
                                        value={data.currency}
                                        onChange={(e) => setData('currency', e.target.value)}
                                        className="border-gray-300 py-1 mt-1 block w-full"
                                        >
                                        <option>
                                            {
                                                data.currency === 0 ? 
                                                "Select payment currency"
                                                :
                                                data.currency
                                            }
                                        </option>
                                        <option value='ZWL'>ZWL</option>
                                        <option value='USD'>USD</option>
                                        </select>
                                        <InputError message={errors.currency} className="mt-2" />
                                    </div>

                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="tarrif" value="Tarrif" required={true} />
                                        <TextInput
                                            id="tarrif"
                                            name="tarrif"
                                            type="number"
                                            value={data.tarrif}
                                            className="mt-1 py-1 block w-full"
                                            autoComplete="tarrif"
                                            onChange={(e) => setData('tarrif', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.tarrif} className="mt-2" />
                                    </div>

                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="weight" value="Weight" required={true} />
                                        <TextInput
                                            id="weight"
                                            name="weight"
                                            type="number"
                                            value={data.weight}
                                            className="mt-1 py-1 block w-full"
                                            autoComplete="weight"
                                            onChange={(e) => setData('weight', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.weight} className="mt-2" />
                                    </div>

                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="quantity_of_boxes" value="Number of Boxes" required={true} />
                                        <TextInput
                                            id="quantity_of_boxes"
                                            name="quantity_of_boxes"
                                            type="number"
                                            value={data.quantity_of_boxes}
                                            className="mt-1 py-1 block w-full"
                                            autoComplete="quantity_of_boxes"
                                            onChange={(e) => setData('quantity_of_boxes', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.quantity_of_boxes} className="mt-2" />
                                    </div>

                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="manifest" value="Manifest" required={true} />
                                        <TextArea
                                            id="manifest"
                                            name="manifest"
                                            value={data.manifest}
                                            className="mt-1 py-1 block w-full h-24"
                                            autoComplete="manifest"
                                            onChange={(e) => setData('manifest', e.target.value)}
                                            required
                                        />
                                        <InputError message={errors.manifest} className="mt-2" />
                                    </div>

                                    <h3 className='px-4 my-4 text-xl font-bold'>Destination Details</h3>

                                <div className='px-4 mb-2'>
                                <InputLabel htmlFor="address1" value="Address line 1" required={true}/>
                                <TextInput
                                    id="address1"
                                    name="address1"
                                    value={data.address1}
                                    className="mt-1 py-1 block w-full"
                                    autoComplete="address1"
                                    isFocused={true}
                                    onChange={(e) => setData('address1', e.target.value)}
                                    required
                                />
                                <InputError message={errors.address1} className="mt-2" />
                                </div>

                                <div className='px-4 mb-2'>
                                <InputLabel htmlFor="address2" value="Address line 2"/>
                                <TextInput
                                    id="address2"
                                    name="address2"
                                    value={data.address2}
                                    className="mt-1 py-1 block w-full"
                                    autoComplete="address2"
                                    isFocused={true}
                                    onChange={(e) => setData('address2', e.target.value)}
                                />
                                <InputError message={errors.address2} className="mt-2" />
                                </div>

                                <div className='px-4 mb-2'>
                                <InputLabel htmlFor="country" value="Country"/>
                                <TextInput
                                    id="country"
                                    name="country"
                                    value={data.country}
                                    className="mt-1 py-1 block w-full"
                                    autoComplete="country"
                                    isFocused={true}
                                    onChange={(e) => setData('country', e.target.value)}
                                />
                                <InputError message={errors.country} className="mt-2" />
                                </div>

                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="document" value="Upload Document (Optional)" />
                                        <input
                                            id="document"
                                            type="file"
                                            accept=".pdf"
                                            onChange={handleFileChange}
                                            className="mt-1 py-1 block w-full border rounded"
                                        />
                                        <InputError message={errors.document} className="mt-2" />
                                    </div>

                                    <div className="px-4 mb-2">
                                        <InputLabel htmlFor="invoice" value="Upload Invoice" required={true} />
                                        <input
                                            id="invoice"
                                            type="file"
                                            accept=".pdf"
                                            onChange={handleInvoiceChange}
                                            className="mt-1 py-1 block w-full border rounded"
                                            required
                                        />
                                        <InputError message={errors.invoice} className="mt-2" />
                                    </div>

                                    <div className="px-4 mb-2">
                                        <PrimaryButton
                                            processing={processing}
                                            onClick={handleSubmit}
                                            className="w-full items-center justify-center"
                                        >
                                            Update File
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
