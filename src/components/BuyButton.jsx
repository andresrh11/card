import styled from "styled-components";

export default function BuyButton() {
  return (
    <>
      <BuyBtn className="w-6 h-6">Comprar</BuyBtn>
    </>
  );
}

const BuyBtn = styled.button`
  background: white;
  cursor: pointer;
  border: none;
  padding: 16px 32px;
  color: black;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  border-radius: 12px;
  right: -200px;
  width: 200px;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      45deg,
      green,
      yellow,
      red,
      green,
      magenta,
      yellow,
      red
    );
    background-size: 800%;
    border-radius: 10px;
    filter: blur(8px);
    animation: pixeld 20s linear infinite;
    z-index: -1;
  }
  @keyframes pixeld {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
