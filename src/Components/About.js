import styled from "styled-components";

const About = (props) => {
  return (
    <Container>
      <h1>Me</h1>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  
  h1 {
  color: blue;
  }
`;

export default About;
