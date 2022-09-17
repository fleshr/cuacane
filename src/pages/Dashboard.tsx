import styled from "styled-components";
import Main from "../components/Main/Main";
import Navigation from "../components/Navigation/Navigation";
import Sidebar from "../components/Sidebar/Sidebar";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 153.5rem;
  height: 100vh;
`;

function Dashboard() {
  return (
    <Container>
      <Navigation />
      <Main />
      <Sidebar />
    </Container>
  );
}

export default Dashboard;
