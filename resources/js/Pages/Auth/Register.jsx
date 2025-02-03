import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PhoneNumber from '@/Components/PhoneNumber';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        surname: '',
        email: '',
        role: 3,
        mobile: '',
        idnumber: '',
        password_confirmation: '',
    });

    function updateMobile (data) {
        setData('mobile',data)
    }

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className='mt-4'>
                <InputLabel htmlFor="surname" value="Surname" required={true}/>
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

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className='mt-4'>
                    <InputLabel htmlFor="mobile" value="Mobile Number" required={true}/>
                    <PhoneNumber id="mobile" updateMobile={updateMobile}/>
                </div>

                <div className='mt-4'>
                <InputLabel htmlFor="idnumber" value="ID Number" required={true}/>
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

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 justify-start">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>
                </div>
                <div className='mt-2'>
                    <PrimaryButton className="w-full justify-center" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
