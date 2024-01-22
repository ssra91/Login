import "@/styles/reset.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
import AuthProvider from "@/components/AuthProvider";
export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return <SessionProvider session={session}>
      <AuthProvider session={session}>
        <Component {...pageProps} />
  </AuthProvider>
  </SessionProvider>
}



