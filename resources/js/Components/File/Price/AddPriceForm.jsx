import DangerButton from '@/Components/DangerButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/react'
import React from 'react'

export default function AddPriceForm({file}) {
    const {data, setData, post, errors, processing} = useForm({
        id: file.price.id,
        currency: file.price?.currency || '',
        us_price: file.price?.us_price || '',
        rtgs_price: file.price?.rtgs_price || '',
        us_duty: file.price?.us_duty || '',
        rtgs_duty: file.price?.rtgs_duty|| '',
        rb_file_id: file.id,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('price-update'))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setData('us_price', '')
        setData('us_duty', '')
        setData('rtgs_duty', '')
        setData('rtgs_price', '')
       setData(name, value)
    }

  return (
    <form
    onSubmit={handleSubmit}
    className="shadow-lg py-2"
    >
        <h2 className='text-lg font-bold py-2 px-4'>Enter Price and an invoice will be sent.</h2>

        <div className="px-4 mb-2">
        <InputLabel htmlFor="currency" value="Currency of payment"/>
        <select
        value={data.currency}
        // onChange={(e) => setData('currency', e.target.value)}
        onChange={handleChange}
        id="currency"
        name="currency"
        className="border-gray-300 py-1 mt-1 block w-full"
        >
        <option>
        {
        data.currency === '' ? 
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

        <div className={`${data.currency == "USD" ? '': 'hidden'}`}>
        <div className='px-4 mb-2'>
        <InputLabel htmlFor="us_price" value="US Price" required={true}/>
        <TextInput
        id="us_price"
        name="us_price"
        value={data.us_price}
        className="mt-1 py-1 block w-full"
        autoComplete="us_price"
        isFocused={true}
        onChange={(e) => setData('us_price', e.target.value)}
        />
        <InputError message={errors.us_price} className="mt-2" />
        </div>

        <div className='px-4 mb-2'>
        <InputLabel htmlFor="us_duty" value="US Duty" required={true}/>
        <TextInput
        id="us_duty"
        name="us_duty"
        value={data.us_duty}
        className="mt-1 py-1 block w-full"
        autoComplete="us_duty"
        isFocused={true}
        onChange={(e) => setData('us_duty', e.target.value)}
        />
        <InputError message={errors.us_duty} className="mt-2" />
        </div>
        </div>

        <div className={`${data.currency == "ZWL" ? '': 'hidden'}`}>

        <div className='px-4 mb-2'>
        <InputLabel htmlFor="rtgs_price" value="ZWL Price" required={true}/>
        <TextInput
        id="rtgs_price"
        name="rtgs_price"
        value={data.rtgs_price}
        className="mt-1 py-1 block w-full"
        autoComplete="rtgs_price"
        isFocused={true}
        onChange={(e) => setData('rtgs_price', e.target.value)}
        />
        <InputError message={errors.rtgs_price} className="mt-2" />
        </div>

        <div className='px-4 mb-2'>
        <InputLabel htmlFor="rtgs_duty" value="ZWL Duty" required={true}/>
        <TextInput
        id="rtgs_duty"
        name="rtgs_duty"
        value={data.rtgs_duty}
        className="mt-1 py-1 block w-full"
        autoComplete="rtgs_duty"
        isFocused={true}
        onChange={(e) => setData('rtgs_duty', e.target.value)}
        />
        <InputError message={errors.rtgs_duty} className="mt-2" />
        </div>
        </div>
        <DangerButton
        className='mx-4'
        disabled={processing}
        >
            Submit
        </DangerButton>
    </form>
  )
}
