import styled from "@emotion/styled";
import { useSession, signIn, signOut } from "next-auth/react"
import LoginButton from "@/components/LoginButton";

const Home = () => {
    const data = useSession();
  
  return (
    <Container>
        <h1>Home</h1>
        <LoginButton/>
    </Container>
  )
}

const Container = styled.div`
  
`;


export default Home