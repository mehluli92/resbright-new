import AdminDashboard from '@/Components/Dashboard/AdminDashboard';
import ClientDashboard from '@/Components/Dashboard/ClientDashboard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard({data}) {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="pt-2 pb-6">
                <div className="mx-auto max-w-7xl sm:px-6">
                    <div className="overflow-hidden">
                        <div className="px-2 text-gray-900">
                            {
                                user.role === 3 ?
                                <ClientDashboard data={data}/>
                                :
                                <AdminDashboard data={data}/>
                            }
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
