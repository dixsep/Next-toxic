import Link from "next/link";

export default function Navbar(){
    return (
        <div className = "flex justify-between pb-4 border-b mb-4">
            <div>
                <Link href={"/"}>
                    <h1 className = "text-5xl font-bold tracking-tighter text-dark">Toxicc</h1>
                </Link>
                <p className = "text-sm font-semibold">Exploring Toxic baathe <br/> Over the top</p>
            </div>

            <div className = "flex items-center">
                <Link href={"/sign-in"} className = "btn">Sign In</Link>
            </div>
        </div>
    )
} 