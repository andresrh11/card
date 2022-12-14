import BuyButton from "./BuyButton";
import img from "../utils/sequelize.png";
import styled from "styled-components";
export default function Card() {
  return (
    <>
      <CardContainer>
        <Superior>
          <h1>CONTROL</h1>
          <Img src={img} alt="img" />
        </Superior>
        <Inferior>
          <Container>
            <h1>Dual-Shock 5</h1>
            <h3>Control de play station 5</h3>
            <img src="" alt="" />
          </Container>
          <BuyButton />
        </Inferior>
      </CardContainer>
    </>
  );
}
const CardContainer = styled.div`
  width: 350px;
  height: 600px;
  display: flex;
  top: 150px;
  position: relative;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  z-index: 2;
`;
const Img = styled.img`
  display: flex;
  width: 300px;
  height: 200px;
  right: -100px;
  position: absolute;
`;
const Container = styled.div``;
const Inferior = styled.div`
  width: 350px;
  height: 300px;
  display: flex;
  top: 150px;
  border-radius: 0 0 15px 15px;
  flex-flow: column;
  justify-content: space-around;
  align-items: left;
  left: 20px;
  background-color: white;
  z-index: 1;
`;
const Superior = styled.div`
  width: 350px;
  height: 300px;
  display: flex;
  top: 150px;
  border-radius: 15px 15px 0 0;
  flex-flow: column;
  justify-content: space-around;
  align-items: left;

  background: linear-gradient(45deg, purple, white);
  h1 {
    color: white;
    top: 15px;
    left: 15px;
    position: absolute;
  }
`;
