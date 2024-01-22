import { useGoogleLogin } from '@react-oauth/google';
import styled from "@emotion/styled";
import {useEffect} from "react";

const PrivateRouter = ({children}: any) => {

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {

    },
  });

  useEffect(() => {
    login()
  }, []);
  
  return (
    <Container>
        {children}
    </Container>
  )
}

const Container = styled.div`
  
`;


export default PrivateRouter