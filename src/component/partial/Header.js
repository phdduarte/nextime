import * as React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';

import {device} from '/util/device';
import Container from '/component/base/Container';
import MobileHeader from '/component/base/MobileHeader';
import Grid from '/component/base/Grid';
import Button from '/component/base/Button';

const TopContainer = styled(Container)`
  padding-bottom: 40px;
  width: 100vw;
  background: #000;
  ${device.below.tabletLandscape`margin-bottom: 90px;`};
`;
const MobileHeaderContainer = styled.div`
  margin: 10px 0;
  color: ${({theme}) => theme.colors.white};
`;

const HeaderContainer = styled.div`
  margin-top: 50px;
  text-align: center;
  z-index: 1;
  top: 0;
  color: ${({theme}) => theme.colors.white};
`;

const NavGroup = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.li`
  display: inline-flex;
  margin-left: 8px;
  margin-right: 8px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const HeaderButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 54px;
  border-radius: 50%;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-family: ${({theme}) => theme.fonts.logo};
`;

class Header extends React.Component {
  render() {
    return (
      <TopContainer>
        <MobileHeaderContainer>
          <MobileHeader />
        </MobileHeaderContainer>
        <HeaderContainer>
          <Grid alignItems="center" hideFor={device.below.tabletLandscape}>
            <Grid.Col cols={3} textAlign="right">
              <Logo>
                <amp-img
                  layout="fixed"
                  width="150"
                  height="41"
                  src="/static/icons/logo_complete_blue.png"
                />
              </Logo>
            </Grid.Col>
            <Grid.Col cols={6}>
              <nav style={{padding: '0 12%'}}>
                <NavGroup>
                  <NavItem>
                    <Button.FakeLink>
                      <a href="#quemSomos">Quem Somos</a>
                    </Button.FakeLink>
                  </NavItem>
                  <NavItem>
                    <Button.FakeLink>
                      <a href="#pageAmp">AMP</a>
                    </Button.FakeLink>
                  </NavItem>
                  <NavItem>
                    <Button.FakeLink>
                      <a href="#otimizacao">Otimização</a>
                    </Button.FakeLink>
                  </NavItem>
                  <NavItem>
                    <Button.FakeLink>
                      <a href="#marketingDigital">Marketing Digital</a>
                    </Button.FakeLink>
                  </NavItem>
                  <NavItem>
                    <Button.FakeLink>
                      <a href="#equipe">Equipe</a>
                    </Button.FakeLink>
                  </NavItem>
                  <NavItem>
                    <Button.FakeLink>
                      <a href="https://wa.me/5531989217467?text=Eu%20tenho%20interesse%20em%20fazer%20um%20orçamento%20com%20a%20NexTime.">
                        Contato
                      </a>
                    </Button.FakeLink>
                  </NavItem>
                </NavGroup>
              </nav>
            </Grid.Col>
            <Grid.Col cols={3}>
              <div style={{display: 'flex'}}>
                {/* <Button.FakeLink style={{display: 'block'}}>
                  <HeaderButton>
                    <amp-img
                      layout="fixed"
                      width="22"
                      height="22"
                      src="/static/icons/search.svg"
                    />
                  </HeaderButton>
                </Button.FakeLink>
                <Button.FakeLink style={{display: 'block'}}>
                  <HeaderButton>
                    <amp-img
                      layout="fixed"
                      width="19"
                      height="24"
                      src="/static/icons/user.svg"
                    />
                  </HeaderButton>
                </Button.FakeLink> */}
              </div>
            </Grid.Col>
          </Grid>
        </HeaderContainer>
      </TopContainer>
    );
  }
}

export default Header;
