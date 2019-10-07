import styled from 'styled-components';

export const CepInputWrapper = styled.div`
  background: #ecf0f1;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 30px;
`;

export const FormTitle = styled.h2`
  color: #2c3e50;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
  width: 100%;
`;

export const FormInput = styled.input`
  border: solid 1px #95a5a6;
  border-radius: 4px;
  margin-left: 8px;
  padding: 8px;
`;

export const FormInputLabel = styled.label`
  color: #2c3e50;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin-bottom: 15px;
  width: 100%;
`;

export const FormButton = styled.button`
  background: #2980b9;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin-left: 8px;
  padding: 9px 18px;
  transition: all 0.5s ease-out;

  &:hover {
    background: #3498db;
    cursor: pointer;
    transition: all 0.5s ease-out;
  }
`;
