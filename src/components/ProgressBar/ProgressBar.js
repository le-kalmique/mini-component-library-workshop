import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size, id, label }) => {
  return (
    <Wrapper>
      {label && <Label for={id}>{label}</Label>}
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Progress
        size={size}
        role="progressbar"
        aria-labelledby={id}
        aria-valuenow={value}
      >
        <ValueWrapper>
          <Value value={value} />
        </ValueWrapper>
      </Progress>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
`;

const Label = styled.label`
  display: block;
  color: ${COLORS.black};
  margin-bottom: 10px;
`;

const Progress = styled.div`
  width: 100%;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  border-radius: 4px;
  overflow: hidden;

  ${({ size }) => {
    switch (size) {
      case "small":
        return `
          height: 8px;
        `;
      case "medium":
        return `
          height: 12px;
        `;
      default:
      case "large":
        return `
          height: 24px;
          padding: 4px;
        `;
    }
  }}
`;

const ValueWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
`;

const Value = styled.div`
  height: 100%;
  width: ${({ value }) => value}%;
  background: ${COLORS.primary};

  transition: all 0.2s ease-in-out;
`;

export default ProgressBar;
