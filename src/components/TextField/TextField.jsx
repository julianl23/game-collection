import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TextField = ({ id, labelText, type, className }) => {
  const Wrapper = styled.div`
    margin-bottom: 20px;
  `;

  const Label = styled.label`
    display: block;
    margin-bottom: 10px;
  `;

  const Input = styled.input`
    display: block;
    border: 1px solid ${({ theme }) => theme.borderGray};
    background: ${({ theme }) => theme.purpleWhite};
    font-size: ${({ theme }) => theme.fontSizeNormal};
    padding: 15px 10px;
    height: 45px;
    width: 100%;
  `;

  return (
    <Wrapper className={className}>
      <Label htmlFor={id}>{labelText}</Label>
      <Input id={id} type={type} />
    </Wrapper>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

TextField.defaultProps = {
  type: "text",
  className: "",
};

export default TextField;
