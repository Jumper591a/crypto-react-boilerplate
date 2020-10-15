import React from 'react';
import styled from 'styled-components';
import ConnectButton from 'components/ConnectButton';
import ThemeToggle from 'containers/ThemeProvider/toggle';

// Does this need to be a styled div? Or is this related to doing things in a consistent way?
// I would normally just use the fragment component <></>.
const Wrapper = styled.div``;

export default function Header() {
  return (
    <Wrapper>
      <ThemeToggle />
      <ConnectButton />
    </Wrapper>
  );
}
