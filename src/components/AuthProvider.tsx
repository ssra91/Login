
import styled from "@emotion/styled";
import {SessionProvider, useSession} from "next-auth/react";
import Login from "../../pages/login";

const AuthProvider = ({children}: any) => {
    const {data: session, status} = useSession()
    if(status === 'loading') return <div>Loading...</div>
    if(status !== 'authenticated') return <Login/>

  return children
}

const Container = styled.div`
  
`;


export default AuthProvider