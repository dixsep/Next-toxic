'use client'

import Link from "next/link";
import { useSession , signOut} from "next-auth/react";

export default function Navbar(){
    
    const {status} = useSession()

    return (
        <div className = "flex justify-between pb-4 border-b mb-4">
            <div>
                <Link href={"/"}>
                    <h1 className = "text-5xl font-bold tracking-tighter text-dark">Toxicc</h1>
                </Link>
                <p className = "text-sm font-semibold">Exploring Toxic baathe <br/> Over the top</p>
            </div>

            {
                status === 'authenticated' ? (<button className = "btn" onClick={() => signOut()}>Sign Out</button>) : (<div className = "flex items-center">
                    <Link href={"/sign-in"} className = "btn">Sign In</Link>
                </div>)
            }

            
        </div>
    )
} 