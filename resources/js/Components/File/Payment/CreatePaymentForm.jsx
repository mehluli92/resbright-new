import DangerButton from '@/Components/DangerButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/react'
import React from 'react'

export default function CreatePaymentForm({file}) {
    const {data, setData, post, errors, processing} = useForm({
        us_price: file.payment.us_price || '',
        rtgs_price: file.payment.rtgs_price || '',
        us_duty: file.payment.us_duty || '',
        rtgs_duty: file.payment.rtgs_duty || '',
        rb_file_id: file.id,
        id: file.payment.id
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('payment-update'))
    }

  return (
    <form
    onSubmit={handleSubmit}
    className="shadow-lg"
    >
        <h2 className='text-lg font-bold py-2 px-4'>Add payment made  by Customer.</h2>
       {!file.price.rtgs_price && <div className='px-4 mb-2'>
        <InputLabel htmlFor="us_price" value="US Service Fee" required={true}/>
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
        </div>}

        {!file.price.rtgs_price &&
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
        }

        {!file.price.us_price && 
        <div className='px-4 mb-2'>
        <InputLabel htmlFor="rtgs_price" value="ZWL Service Fee" required={true}/>
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
        </div>}

        {!file.price.us_price && 
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
        }
        <PrimaryButton
        className='mx-4'
        disabled={processing}
        >
            Submit
        </PrimaryButton>
    </form>
  )
}
