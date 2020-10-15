import React from 'react';
import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
import { Switch, Route } from 'react-router-dom';

import Vaults from 'containers/Vaults/Loadable';
import Header from 'components/Header';

// Need for styled component here? as apposed to plain div or fragment?
const Wrapper = styled.div``;

export default function Main() {
  return (
    <Wrapper>
      <Header />
      <Switch>
        <Route exact path="/vaults" component={Vaults} />
      </Switch>
    </Wrapper>
  );
}
