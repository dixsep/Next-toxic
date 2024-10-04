import Image from "next/image"

export default function SignInbtns()
{
    return(
        <>
        <h1 className = "text-3xl font-bold text-center mt-8 ">Sign In</h1>
          <div className = "flex p-4 mt-4 flex-col items-center justify-center">
            <button className = "flex items-center border p-4 rounded-full gap-4 hover:scale-105 transition">
                <span>
                    <Image src={"/google-logo.svg"} alt = "logo" width = {30} height = {30}/>
                </span>
                Sign In with Google
            </button>
          </div>
        </>
    )
}