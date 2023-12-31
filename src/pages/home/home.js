import styled from "styled-components/macro";

export const PageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 80%;
  @media (max-width: 767px) {
    max-width: unset;
    padding: 0 1rem;
  }
`;
export const LeftbarWrraper =styled.div`
flex: 1;
@media (max-width: 767px) {
  display:none;
}
`
export const RightBar = styled.div`
  flex: 1;
  @media (max-width: 767px) {
    display:none;
  }
`;
export const SuggestionsBox = styled.div`
position: sticky;
top: 53px; 
z-index: 1; 
padding: 1rem;
background: var(--secondary-bg);
border-radius: var(--border-radius);
margin: 1rem 1.1rem;

`
export const Feed = styled.div`
  flex: 2;
`;

export const SortingBox = styled.div`
  text-align: center;
  position: relative;
  margin-top: 13px;

  >span {
    text-align: center;
    margin-top: 18px;
  }
  >svg {
    right: 0;
    position: absolute;
    cursor: pointer;

  }
`;


export const SelectContainer = styled.div`
  position: absolute;
  right: 0px;
  background: var(--secondary-bg);
  border-radius: var(--border-radius);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  z-index: 99;
  padding: 1rem;

  > div {
    display: flex;
    gap: 0.4rem;
    cursor: pointer;

    &.selected {
      color: #1973b1;
      svg{
        color: #1973b1;

      }
    }
  }
`;

export const NoPostImage = styled.img`
width: 100%;
margin-top: 1rem;

`