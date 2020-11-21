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
                  Seu negócio ou você tem uma tarefa repetitiva que gasta muito
                  do seu tempo?
                </Text.P>
                <Text.P>
                  Podemos juntos e com a ajuda da inteligência artificial
                  criarmos uma otimização.
                </Text.P>
                <Text.P>
                  Quando processos repetitivos são automatizados o número de
                  falhas diminui.
                </Text.P>
                <Text.P>
                  Estamos aqui também para ajudar as pequenas empresas ou sua
                  ideia sair do papel.
                </Text.P>
                <Text.P>
                  O importante é que você foque sua energia no que você faz
                  melhor e delegue as outras tarefas tanto para nossa equipe ou
                  nossa inteligência artificial.
                </Text.P>
                <Text.P>
                  <a
                    style={{textDecoration: 'underline'}}
                    href="https://wa.me/5531989217467?text=Eu%20tenho%20interesse%20em%20fazer%20um%20orçamento%20de%20otimização%20com%20a%20NexTime."
                  >
                    Faça um orçamento de otimização com a gente.
                  </a>
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
                <Text.P>
                  “Inventamos uma montanha de consumo supérfluo, e é preciso
                  jogar fora e viver comprando e jogando fora. E o que estamos
                  gastando é tempo de vida. Porque quando eu compro algo, ou
                  você, não compramos com dinheiro, compramos com o tempo de
                  vida que tivemos de gastar para ter esse dinheiro. Mas com
                  esta diferença: a única coisa que não se pode comprar é a
                  vida. A vida se gasta. E é miserável gastar a vida para perder
                  liberdade.” - José Mujica.
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
