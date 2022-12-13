import BuyButton from "./BuyButton";
import img from "../utils/sequelize.png";
import styled from "styled-components";
export default function Card() {
  return (
    <>
      <CardContainer>
        <div>
          <Img src={img} alt="img" />
        </div>
        <div>
          <Container>
            <h1>Titulo</h1>
            <h1>A Destacar</h1>
            <img src="" alt="" />
          </Container>
        </div>
        <BuyButton />
      </CardContainer>
    </>
  );
}
const CardContainer = styled.div`
  border: 1px solid red;
  width: 450px;
  height: 550px;
  display: flex;
  top: 150px;
  position: relative;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
`;
const Img = styled.img``;
const Container = styled.div``;
