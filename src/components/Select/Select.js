import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <IconWrapper>
        <Icon id="chevron-down" strokeWidth={1} size={24} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 14px;
  top: 8px;
  pointer-events: none;
`;

const NativeSelect = styled.select`
  appearance: none;
  width: auto;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  color: ${COLORS.gray700};

  padding: 12px 52px 12px 16px;

  div {
    width: fit-content;
  }
`;

export default Select;
