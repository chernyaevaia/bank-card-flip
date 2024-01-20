import styled from "styled-components";
import chip from "../assets/chip.svg";
import backLogo from "../assets/back_logo.svg";

export function CardBack() {
  const FlexContainer = styled.div`
    display: flex;
    column-gap: 28px;
  `;

  const OpaqueText = styled.div`
    font-size: 12px;
    margin-bottom: 12px;
    opacity: 50%;
  `;

  return (
    <>
      <img src={backLogo} alt="logo"></img>
      <FlexContainer>
        <div>
          <OpaqueText>Date</OpaqueText>
          <div style={{ fontSize: "11px" }}>09/25</div>
        </div>
        <div>
          <OpaqueText>CVV</OpaqueText>
          <div style={{ fontSize: "11px" }}>1289</div>
        </div>
      </FlexContainer>
      <img src={chip} alt="chip"></img>
    </>
  );
}
