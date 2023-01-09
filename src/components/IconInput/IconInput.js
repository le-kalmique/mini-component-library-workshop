import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    icon: 16,
    strokeWidth: 1,
    "--font-size": 14 / 16 + "rem",
    "--border-size": "1px",
    "--icon-size": "16px",
    "--gap": "8px",
    "--padding": "4px",
  },
  large: {
    icon: 24,
    strokeWidth: 2,
    "--font-size": 18 / 16 + "rem",
    "--border-size": "2px",
    "--icon-size": "24px",
    "--gap": "12px",
    "--padding": "7px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper width={width}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon
          id={icon}
          size={SIZES[size].icon}
          strokeWidth={SIZES[size].strokeWidth}
        />
      </IconWrapper>
      <TextInput type="text" placeholder={placeholder} style={SIZES[size]} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${({ width }) => width}px;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 4px;
`;

const TextInput = styled.input`
  border: none;
  width: 100%;
  border-bottom: var(--border-size) solid ${COLORS.black};
  font-weight: 700;
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  padding: var(--padding);
  padding-left: calc(var(--gap) + var(--icon-size));

  outline-offset: 2px;

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
`;

export default IconInput;
