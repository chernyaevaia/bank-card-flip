import styled from "styled-components";
import "./App.css";
import { CardFront } from "./components/CardFront";
import { CardBack } from "./components/CardBack";
import { useState } from "react";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const CardWrapper = styled.div`
    display: flex;
    margin-top: 100px;
    width: 315px;
    height: 184px;
    border-radius: 30px;
    padding: 20px 30px;
    background: linear-gradient(177.23deg, #9c2cf3 -13.49%, #3a49f9 109.75%);
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.rowGap};
    align-items: start;
  `;
  
  const CardFace = styled.div`
    position: absolute;
    backface-visibility: hidden;
    transform: ${(props) => props.transform};
  `;

  return (
    <>
      <div style={{ width: "315px", height: "184px", perspective: "600px" }}>
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={isFlipped ? "card is-flipped" : "card"}
        >
          <CardFace>
            <CardWrapper rowGap="68px">
              <CardFront />
            </CardWrapper>
          </CardFace>
          <CardFace transform="rotateY(180deg)">
            <CardWrapper rowGap="22px">
              <CardBack />
            </CardWrapper>
          </CardFace>
        </div>
      </div>
    </>
  );
}

export default App;
