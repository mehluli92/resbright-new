import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth}) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="text-black">
                <div className='flex flex-col justify-center items-center p-4'>
                <ApplicationLogo className="w-16 h-16"/>

                </div>

                <div className="relative flex min-h-20 flex-col items-center justify-center gap-4">
                        <p>Welcome to the goods tracking portal powered by Resbright Investments. To proceed:</p>
                        <nav className="grid grid-cols-2 gap-2">
                        {auth.user ? (
                            <Link
                            href={route('dashboard')}
                            className="px-2 py-1 text-white bg-cyan-900 hover:bg-cyan-800"
                            >
                            Dashboard
                            </Link>
                        ) : (
                            <>
                            <Link
                            href={route('login')}
                            className="px-2 py-1 text-white bg-cyan-900 hover:bg-cyan-800"
                            >
                                Log In
                            </Link>

                            <Link
                            href={route('register')}
                            className="px-2 py-1 text-white bg-cyan-900 hover:bg-cyan-800"
                            >
                                Register
                            </Link>
                            </>
                                )}
                        </nav>
                </div>
            </div>
        </>
    );
}
