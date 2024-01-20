import styled from "styled-components";
import frontLogo from "../assets/mastercard_logo.svg";

export function CardFront() {
  const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;

  return (
    <>
      <FlexContainer>
        <div>
          <div style={{ marginBottom: "10px", opacity: "50%" }}>
            Current Balance
          </div>
          <div style={{ fontSize: "28px" }}>$5,750,20</div>
        </div>
        <img src={frontLogo} alt="logo"></img>
      </FlexContainer>
      <FlexContainer>
        <div>5282 3456 7890 1289</div>
        <div>09/25</div>
      </FlexContainer>
    </>
  );
}
