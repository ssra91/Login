import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: "508122776343-cngf4ubegufo1a8m986eftjng915pt89.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
          console.log('@@ account', account)
            console.log('@@ profile', profile)
            return true // Do different verification for other providers that don't have `email_verified`
        },
    }
})