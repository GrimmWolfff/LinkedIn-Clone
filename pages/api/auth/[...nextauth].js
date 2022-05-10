import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../libs/mongodb';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        })
    ],
    secret: process.env.JWT_SECRET, 
    adapter: MongoDBAdapter(clientPromise),
    pages: {
        signIn: "/",
    },
    session: {
        strategy: "jwt"
    }
});