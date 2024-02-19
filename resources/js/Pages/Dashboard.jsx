import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
// componest
import Headers from '@/Components/home/headers';
import NewProduct from '@/Components/home/newProduct';
import Services from '@/Components/home/services';
import Teams from '@/Components/home/teeams';
import Colaboration from '@/Components/home/colaboration';
import Footer from '@/Components/footer';
export default function Dashboard({ auth }) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Elmuna</h2>}
            >
                <Head 
                title="Elmuna Computindo"
                
                />


                {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div> */}
            </AuthenticatedLayout>
            <Headers></Headers>
            <NewProduct></NewProduct>
            <Services></Services>
            <Teams></Teams>
            <Colaboration></Colaboration>
            <Footer></Footer>
        </>
    );
}
