import Checkbox from '@/Components/Checkbox'
import FileCreationSteps from '@/Components/File/FileCreationSteps'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import TextArea from '@/Components/TextArea'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'

export default function CustomerCreateFile() {
    const authUser = usePage().props.auth.user

    const [count, setCount] = useState(0)
    const {data, setData, post, errors, processing} = useForm({
        user_id:authUser.id,
        import: false,
        entry_number: '',
        importer: '',
        supplier: '',
        description: '', //big text
        bill_of_lading: '', //big text
        tarrif: 0.00,
        weight: 0,
        quantity_of_boxes: 1,
        manifest: '', //big text
        paid: '',
        currency: 0,
        document: null, //pdf to upload
        invoice: null,
        container: '',
        address1: '',
        address2: '',
        country: 'Zimbabwe'
    })

    
    const checkValuesBeforeChange = (name) => {
        if(count == 0 && data.importer && data.supplier){
            setCount(name)
        } 
        if(count == 1 && data.description){
            setCount(name)
        }
        if(count == 2 && data.address1){
            setCount(name)
        }  
    }

    const handleNextButtonClick = (e) => {
        const {name} = e.target
        checkValuesBeforeChange(name)
    }

    const handlePrevButtonClick = () => {
        let c = count - 1
        setCount(c)
    }

    const handleChangeCount = (data) => {
        //from FileCreationSteps count
        checkValuesBeforeChange(data)
    }

    function handleImportChange(e) {
        const { checked } = e.target;
        setData('import', checked)
    }

    function handleFileChange(e) {
        setData('document', e.target.files[0])
    }

    function handleInvoiceChange(e) {
        setData('invoice', e.target.files[0]) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(count == 3 ) {
            const formData = new FormData()
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value)
            })

            post(route('file-create'), {
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        }
    }

  return (
    <AuthenticatedLayout
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Begin your freight forwarding journey with us.
        </h2>
      }
    >
    <Head title="Customer import start" />

    <div className="mx-auto max-w-7xl sm:px-6">
        <div className="overflow-hidden bg-white">
            <FileCreationSteps count={count} changeCount={handleChangeCount} />
            <form
            onSubmit={handleSubmit}
            encType="multipart/form-data" 
            className="shadow-lg px-4"
            >
                { count == 0 &&
                <div id='step-zero'>
                    <div className='px-4 mb-2'>
                    <InputLabel htmlFor="importer" value="Importer" required={true}/>
                    <TextInput
                    id="importer"
                    name="importer"
                    value={data.importer}
                    className="mt-1 py-1 block w-full"
                    autoComplete="importer"
                    isFocused={true}
                    onChange={(e) => setData('importer', e.target.value)}
                    required
                    />
                    <InputError message={errors.importer} className="mt-2" />
                    </div>

                    <div className='px-4 mb-2 flex flex-rows gap-2'>
                    <InputLabel htmlFor="import" value="Check value if importing"/>
                    <Checkbox
                    checked={data.import}
                    onChange={handleImportChange}
                    id="import"
                    />
                    </div>

                    <div className='px-4 mb-2'>
                    <InputLabel htmlFor="supplier" value="Supplier" required={true}/>
                    <TextInput
                    id="supplier"
                    name="supplier"
                    value={data.supplier}
                    className="mt-1 py-1 block w-full"
                    autoComplete="supplier"
                    isFocused={true}
                    onChange={(e) => setData('supplier', e.target.value)}
                    required
                    />
                    <InputError message={errors.supplier} className="mt-2" />
                    </div>

                    <div className='px-4 mb-2'>
                    <InputLabel htmlFor="entry_number" value="Entry Number"/>
                    <TextInput
                    id="entry_number"
                    name="entry_number"
                    value={data.entry_number}
                    className="mt-1 py-1 block w-full"
                    autoComplete="entry_number"
                    isFocused={true}
                    onChange={(e) => setData('entry_number', e.target.value)}
                    />
                    <InputError message={errors.entry_number} className="mt-2" />
                    </div>

                    <div className='px-4 mb-2'>
                    <InputLabel htmlFor="container" value="Container"/>
                    <TextInput
                    id="container"
                    name="container"
                    value={data.container}
                    className="mt-1 py-1 block w-full"
                    autoComplete="container"
                    isFocused={true}
                    onChange={(e) => setData('container', e.target.value)}
                    />
                    <InputError message={errors.container} className="mt-2" />
                    </div>

                    <div className="px-4 mb-2">
                    <InputLabel htmlFor="currency" value="Currency of payment" required={true}/>
                    <select
                    value={data.currency}
                    onChange={(e) => setData('currency', e.target.value)}
                    className="border-gray-300 py-1 mt-1 block w-full"
                    >
                    <option>
                    {
                    data.currency === 0 ? 
                    "Select prefered payment currency"
                    :
                    data.currency
                    }
                    </option>
                    <option value='ZWL'>ZWL</option>
                    <option value='USD'>USD</option>
                    </select>
                    <InputError message={errors.currency} className="mt-2" />
                    </div>
                    
                    <PrimaryButton
                    type="button"
                    name='1'
                    onClick={handleNextButtonClick}
                    className="float-right mt-4"
                    >
                        Next
                    </PrimaryButton>
                </div>
                }
                {count == 1 &&
                <div id='step-one'>
                     <div className='px-4 mb-2'>
                    <InputLabel htmlFor="description" value="Description" required={true}/>
                    <TextArea
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-1 py-1 block w-full h-18"
                    autoComplete="description"
                    isFocused={true}
                    onChange={(e) => setData('description', e.target.value)}
                    required
                    />
                    <InputError message={errors.description} className="mt-2" />
                    </div>
                    <div className='px-4 mb-2 pb-2'>
                    <InputLabel htmlFor="bill_of_lading" value="Bill of Lading"/>
                    <TextArea
                    id="bill_of_lading"
                    name="bill_of_lading"
                    value={data.bill_of_lading}
                    className="mt-1 py-1 block w-full h-24"
                    autoComplete="bill_of_lading"
                    isFocused={true}
                    onChange={(e) => setData('bill_of_lading', e.target.value)}
                    />
                    <InputError message={errors.bill_of_lading} className="mt-2" />
                    </div>
                    <div className='px-4 mb-2'>
                    <InputLabel htmlFor="weight" value="Weight" required={true}/>
                    <TextInput
                    id="weight"
                    name="weight"
                    type="number"
                    value={data.weight}
                    className="mt-1 py-1 block w-full"
                    autoComplete="weight"
                    isFocused={true}
                    onChange={(e) => setData('weight', e.target.value)}
                    required
                    />
                    <InputError message={errors.weight} className="mt-2" />
                    </div>
                    <div className='px-4 mb-2'>
                    <InputLabel htmlFor="quantity_of_boxes" value="Number of Boxes" required={true}/>
                    <TextInput
                    id="quantity_of_boxes"
                    name="quantity_of_boxes"
                    type="number"
                    value={data.quantity_of_boxes}
                    className="mt-1 py-1 block w-full"
                    autoComplete="quantity_of_boxes"
                    isFocused={true}
                    onChange={(e) => setData('quantity_of_boxes', e.target.value)}
                    required
                    />
                    <InputError message={errors.quantity_of_boxes} className="mt-2" />
                    </div>
                    {/* Manifest omitted */}
                    <div className='flex justify-between'>
                    <SecondaryButton
                    type='button'
                    name='0'
                    onClick={handlePrevButtonClick}
                    >
                     Previous
                    </SecondaryButton>
                    <PrimaryButton
                    type='button'
                     name='2'
                     onClick={handleNextButtonClick}
                    >
                        Next
                    </PrimaryButton>
                    </div>
                </div>
                }
                {count == 2 &&
                <div id='step-two'>
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

                    <div className='flex justify-between'>
                    <SecondaryButton
                    type='button'
                    name='1'
                    onClick={handlePrevButtonClick}
                    >
                     Previous
                    </SecondaryButton>
                    <PrimaryButton
                    type='button'
                     name='3'
                     onClick={handleNextButtonClick}
                    >
                        Next
                    </PrimaryButton>
                    </div>
                </div>
                }
                {count == 3 &&
                    <div id='step-three'>
                    <div className="px-4 mb-2">
                    <InputLabel htmlFor="document" value="Upload Document" required={true} />
                    <input
                    id="document"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="mt-1 py-1 block w-full border rounded"
                    required
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
                    <div className='flex justify-between'>
                    <SecondaryButton
                    type='button'
                    name='2'
                    onClick={handlePrevButtonClick}
                    >
                     Previous
                    </SecondaryButton>
                    
                    <PrimaryButton
                    type='submit'
                    >
                        submit
                    </PrimaryButton>
                    </div>
                    </div>
                }
            </form>
        </div>
    </div>


    </AuthenticatedLayout>
  )
}
