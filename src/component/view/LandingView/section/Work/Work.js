import * as React from 'react';
import styled from 'styled-components';

import {device} from '/util/device';
import Container from '/component/base/Container';
import Grid from '/component/base/Grid';
import Text from '/component/base/Text';
import MobilePadding from '/component/base/MobilePadding';
import Confetti, {presets} from '/component/base/Confetti';
import WorkClock from './WorkClock';
import WorkAnimation from './WorkAnimation';

const WorkSection = styled.section`
  background: ${({theme}) => theme.colors.dandelion};
  color: ${({theme}) => theme.colors.black};
  padding-bottom: 400px;
`;
const WorkGrid = styled(Grid)`
  padding-top: 225px;
  ${device.below.tabletLandscape`padding-top: 30px;`};
`;
const ImageCol = styled(Grid.Col)`
  ${device.below.tabletLandscape`text-align: center;`};
`;

class Work extends React.Component {
  render() {
    return (
      <WorkSection>
        <Container>
          <WorkGrid>
            <Grid.Col
              cols={2}
              offset={2}
              colsAtTabletLandscape={12}
              offsetAtTabletLandscape={0}
              style={{textAlign: 'center'}}
            >
              <WorkClock />
            </Grid.Col>
            <Grid.Col
              cols={4}
              offset={1}
              colsAtTabletLandscape={12}
              offsetAtTabletLandscape={0}
              style={{paddingTop: '75px'}}
            >
              <MobilePadding>
                <Text.P>
                  Sua empresa ou você tem uma tarefa repetitiva que gasta muito
                  do seu tempo? FALTA TEXTO
                </Text.P>
                <Text.P>
                  Podemos tentar juntos e com a ajuda da inteligencia artificial
                  criarmos uma otimização. FALTA TEXTO. Falar também que criamos
                  aplicativos.
                </Text.P>
              </MobilePadding>
            </Grid.Col>
          </WorkGrid>

          <Grid style={{marginTop: '115px'}}>
            <Grid.Col
              cols={2}
              offset={3}
              colsAtTabletLandscape={4}
              offsetAtTabletLandscape={2}
              colsAtPhone={6}
              offsetAtPhone={1}
            >
              <Text.Accent color="flushOrange" style={{paddingTop: '80px'}}>
                5 anos
              </Text.Accent>
              <Text color="flushOrange">
                da nossa vida em média passamos na internet
              </Text>
            </Grid.Col>
            <ImageCol cols={3} colsAtTabletLandscape={6} colsAtPhone={12}>
              <amp-img
                width="208"
                height="289"
                src="/static/work/person@2x.png"
                style={{zIndex: 2}}
              />
              <Confetti
                pieces={presets.basic}
                color="flushOrange"
                style={{position: 'absolute', top: 0, right: 100, zIndex: 1}}
              />
            </ImageCol>
          </Grid>
          <Grid style={{marginTop: '115px', paddingBottom: '415px'}}>
            <Grid.Col
              cols={4}
              offset={5}
              colsAtTabletLandscape={12}
              offsetAtTabletLandscape={0}
            >
              <MobilePadding>
                <Text.P>
                  “Em alguns anos vão existir dois tipos de empresas: As que
                  fazem negócios pela internet e as que estão fora dos negócios”
                  - Bill Gates.
                </Text.P>
              </MobilePadding>
            </Grid.Col>
          </Grid>
          {/* <WorkAnimation /> */}
        </Container>
      </WorkSection>
    );
  }
}

export default Work;
