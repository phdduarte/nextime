import * as React from 'react';
import styled from 'styled-components';

import {device} from '/util/device';
import Container from '/component/base/Container';
import Hidable from '/component/base/Hidable';
import Animation from '/component/amp/Animation';
import PositionObserver from '/component/amp/PositionObserver';
import Text from '/component/base/Text';
import Shape from '/component/base/Shape';
import Hero from './Hero';
import Graph from './Graph';
import Confetti, {presets} from '/component/base/Confetti';

const IntroSection = styled.section`
  color: #fff;
  background: #000 url('/static/intro-bg-grid.svg');
  background-position: center 920px;
`;
const Author = styled.div`
  text-align: center;
  opacity: 0.7;
  margin-bottom: 40px;
`;
const CalloutContainer = styled(Container)`
  margin-top: 500px;
  ${device.below.tabletLandscape`margin-top: 190px;`};
`;
const Callout = styled.div`
  text-align: center;
  font-size: 24px;
  max-width: 620px;
  margin: 0 auto;
  padding: 0 25px;
  line-height: 40px;
  ${device.below.tabletLandscape`text-align: left;`};
`;
const RectAnim = styled(({className, ...rest}) => (
  <amp-img layout="fixed" class={className} {...rest} />
))`
  position: absolute;
`;
const Definition = styled.div`
  color: ${({theme}) => theme.colors.aquamarine};
  font-weight: 300;
  margin: 420px 5% 0 14%;
  position: relative;
  ${device.below.tabletLandscape`
    margin: 420px 25px 0;

  `};
`;
const DefBig = styled(Text)`
  ${device.below.tabletLandscape`font-size: 80px;`};
`;
const DefSmall = styled(Text)`
  margin-top: 50px;
  ${device.below.tabletLandscape`margin-top: 20px;`};
`;
const Content = styled.div`
  max-width: 500px;
  padding: 0 25px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 32px;
  text-align: justify;
  font-weight: 300;

  ${device.below.tabletLandscape`
    margin-bottom: 250px;
    text-align: left;
  `};

  & p {
    margin-bottom: 2em;
  }
`;

const UltimateVideo = styled(({className, ...rest}) => (
  <amp-video
    poster="/static/intro/poster.png"
    loop="loop"
    class={className}
    {...rest}
  />
))`
  flex: auto;
  margin: 0 -100px;
  > video[playsinline][class] {
    position: static;
    object-fit: cover;
    z-index: -1000;
  }
`;

const UltimateVideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  pointer-events: none;
  overflow: hidden;
`;

class Intro extends React.Component {
  render() {
    return (
      <IntroSection>
        <UltimateVideoContainer>
          <UltimateVideo
            autoplay=""
            id="bgVid"
            layout="flex-item"
            width="100vw"
            height="100vh"
          >
            <source src="/static/background.mp4" type="video/mp4" />
            <div fallback="">
              <p>This browser does not support the video element.</p>
            </div>
          </UltimateVideo>
        </UltimateVideoContainer>
        <Container>
          <Author>Um novo tempo começa</Author>
          <Hero />
          <CalloutContainer>
            <Callout id="calloutFadeOut">
              <PositionObserver
                id="testElemObserver"
                instersection-ratios="0.5"
                on="scroll:calloutAnim.seekTo(percent=event.percent)"
              />
              <Animation
                id="calloutAnim"
                animation={{
                  duration: '1',
                  fill: 'both',
                  direction: 'normal',
                  animations: [
                    {
                      selector: '#calloutFadeOut',
                      keyframes: [
                        {
                          opacity: 0,
                          transform: 'translate(0, 0)',
                          offset: 0,
                        },
                        {
                          opacity: 1,
                          transform: 'translate(0, 180px)',
                          offset: 1,
                        },
                      ],
                    },
                  ],
                }}
              />
              Procuramos todo dia fazer algo que possa devolver as pessoas o seu
              bem mais precioso, o TEMPO. Acreditamos que pensando diferente
              conseguimos utilizar esse recurso finito de uma melhor forma. O
              mais interessante é que temos diferentes maneiras para conseguir
              devolver o tempo as pessoas e uma delas é utilizarmos a
              tecnologia.
            </Callout>
          </CalloutContainer>
          <div style={{position: 'relative'}}>
            <div
              style={{
                position: 'absolute',
                right: -16,
                top: '15vh',
                width: 355,
                height: 33,
                overflow: 'hidden',
              }}
            >
              <RectAnim
                src="/static/rectangle-anim1.svg"
                width="355"
                height="33"
                style={{right: '-100px', top: 0}}
              />
            </div>
          </div>
          <Definition id="quemSomos">
            <Text size="22px" height="25px">
              Quem
            </Text>
            <DefBig size="120px">
              somos?
              {/* <br />
              yrs old */}
            </DefBig>
            <DefSmall height="19px">
              {/* Anyone born between
              <br />
              1980 and 1994 */}
            </DefSmall>
            <Confetti
              color="white"
              pieces={presets.basic}
              style={{position: 'absolute', left: 320, top: -100}}
            />
          </Definition>
        </Container>
        <Container style={{marginTop: '130px', position: 'relative'}}>
          <Content>
            <p>
              Somos inovadores, apaixonados por tecnologia e o que ela pode
              proporcionar às pessoas. Acreditamos que soluções por meio de
              aplicações mobile e web com auxílio da inteligência artificial
              podem levar às pessoas o que elas mais precisam, TEMPO.
            </p>
            <p>
              Necessitamos de mais tempo para fazer aquela viagem que sempre
              sonhamos, ficarmos com os nossos filhos, aproveitar nossos amigos
              e curtir a vida da melhor maneira.
            </p>
            <p>
              Contamos com especialistas no desenvolvimento de sistema web
              utilizando as ferramentas mais modernas.
            </p>
            <p>
              Oferecemos a solução completa para que você fique conectado com
              seus clientes à qualquer momento , desde a criação do app até a
              publicação.
            </p>
            <p>
              Adicionamos tecnologias de Inteligência Artificial e estratégias
              analíticas para o seu negócios .
            </p>
            <p>Temos a missão de darmos mais tempo para as pessoas.</p>
            <p>
              Utilizamos o que for mais acessível na tecnologia para atingir
              nossa missão de otimizar tarefas e assim entregarmos para mais
              negócios e pessoas, tempo.
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </Content>
          <Hidable hideFor={device.below.tabletLandscape}>
            <Confetti
              pieces={[
                {
                  type: 'square',
                  size: 26,
                  left: 0,
                  top: 0,
                  thickness: 1,
                  color: 'aquamarine',
                  angle: 45,
                  rotate: 23,
                },
              ]}
              style={{position: 'absolute', top: '-150px', right: '30%'}}
            />
            <Confetti
              pieces={[
                {
                  type: 'circle',
                  size: 26,
                  left: 0,
                  top: 0,
                  thickness: 1,
                  color: 'flushOrange',
                  angle: 90,
                },
              ]}
              style={{position: 'absolute', top: '40%', right: '20%'}}
            />
            <Confetti
              pieces={[
                {
                  type: 'circle',
                  size: 9,
                  left: 0,
                  top: 0,
                  fill: true,
                  color: 'electricViolet',
                  angle: -45,
                },
              ]}
              style={{position: 'absolute', bottom: '20%', left: '27%'}}
            />
            <RectAnim
              src="/static/rectangle-anim2.svg"
              width="361"
              height="21"
              style={{left: '0px', top: '12vh'}}
            />
            <RectAnim
              src="/static/rectangle-anim3.svg"
              width="269"
              height="22"
              style={{right: '0px', top: '45vh'}}
            />
          </Hidable>
          <Hidable
            hideFor={device.above.tabletLandscape}
            style={{position: 'relative'}}
          >
            <RectAnim
              src="/static/rectangle-anim3.svg"
              width="269"
              height="22"
              style={{right: '0px', bottom: '40px'}}
            />
            <Shape.Circle
              color="flushOrange"
              size="26px"
              style={{position: 'absolute', bottom: '150px', left: '44%'}}
            />
          </Hidable>
        </Container>
        {/* <Graph /> */}
      </IntroSection>
    );
  }
}

export default Intro;
