import styled from 'styled-components';

export const AddressAndMapWrapper = styled.div`
  border: solid 1px #bdc3c7;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 30px;
  position: relative;
`;

export const MapsWrapper = styled.div`
  height: 300px;
  margin-top: 30px;
  position: relative;
  width: 100%;
`;

export const CloseWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  &:hover {
    cursor: pointer;
  }
`;
