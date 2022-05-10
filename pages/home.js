import React from 'react'
import { getProviders, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
// import Footer from '../Components/Footer';

export default function HomePage({ providers }){
    const router = useRouter();
    const { status } = useSession();
    // React.useEffect(() => {
    //     if(status === 'authenticated') {
    //         router.push('/');
    //     }
    // }, [status])
    console.log(status)
    return (
        <div className={`${status === 'authenticated' ? 'hidden' : 'flex flex-col'} 
        w-full h-screen bg-blue-900 justify-around items-center`}>
            <h1 className="text-3xl text-white font-bold">Welcome</h1>
            {providers && Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button className="button text-white" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                        Sign in as LinkedIn
                    </button>
                </div>
            ))}
        </div>
    );
}
export async function getServerSideProps() {
    const providers = await getProviders();
    return { props: { providers } }
}