import NextAuth, {AuthOptions} from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

const authOptions : AuthOptions = {
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID as string,
            clientSecret : process.env.GOOGLE_SECRET_KEY as string
        })
    ],
    secret : process.env.NEXT_AUTH_SECRET
}

{/* Client Id: Owner of the app */}

const handler = NextAuth(authOptions)

export {handler as POST , handler as GET}