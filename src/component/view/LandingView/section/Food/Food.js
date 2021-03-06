import * as React from 'react';
import styled from 'styled-components';

import {device} from '/util/device';
import AmpImage from '/component/amp/AmpImage';
import ParallaxAnimation from '/component/amp/ParallaxAnimation';
import PositionObserver from '/component/amp/PositionObserver';
import Container from '/component/base/Container';
import Grid from '/component/base/Grid';
import Text from '/component/base/Text';
import LightboxLink from '/component/base/LightboxLink';
import MobilePadding from '/component/base/MobilePadding';
import SpacedContent from '/component/base/SpacedContent';
import PaddedContent from '/component/base/PaddedContent';
import FoodBurger from './FoodBurger';
import Confetti, {presets} from '/component/base/Confetti';

const FoodSection = styled.section`
  background: ${({theme}) => theme.colors.tumbleweed};
  color: ${({theme}) => theme.colors.punga};
  padding: 540px 0 0 0;
  position: relative;
  overflow: hidden;
`;

const CalloutContent = styled.div`
  position: relative;
  color: ${({theme}) => theme.colors.white};
  max-width: 215px;

  ${device.below.tabletLandscape`
    margin: -10% auto 200px auto;
  `};
`;

const CalloutBackground = styled(AmpImage)`
  position: absolute;
  top: 0;
  left: 0;

  ${device.below.tabletLandscape`
    left: 50%;
    transform: translateX(-50%);
  `};
`;

const Box = styled.div`
  background: #fff;
  border-radius: 8px;
  color: #503114;
  font-size: 18px;
  letter-spacing: 0.13px;
  line-height: 34px;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.17);
  z-index: 2;
`;

const Hr = styled.hr`
  border-width: 1px 0 0 0;
  border-color: ${({theme}) => theme.colors.punga};
  opacity: 0.1;
`;

const RobotArm = styled(AmpImage)`
  position: absolute;
  left: 0;
  top: 0;
  transform-origin: bottom left;
  transform: translate(190px, -350px);

  ${device.above.desktop`
    transform: none;
    left: auto;
    right: 0;
    top: 150px;
  `};

  ${device.below.tabletLandscape`
    transform: translate(40%, -340px) rotate(-35deg);
  `};

  ${device.below.tabletPortrait`
    transform: translate(200px, -400px) rotate(-35deg);
  `};
`;

const Title = styled(Text.Title)`
  margin-top: 400px;
  ${device.below.tabletLandscape`
    margin-top: 40px;
    font-size: 18vw;
  `};
`;

const BelowTitle = styled(SpacedContent)`
  margin-top: -300px;
  ${device.below.tabletLandscape`
    margin-top: 20px;
  `};
`;

const CustomTitle = styled(Text.Accent)`
  font-size: 64px;
  ${device.below.tabletLandscape`
    font-size: 12vw;
  `};
`;

const CustomP = styled(Text.P)`
  font-size: 24px;
  text-align: left;

  ${device.below.tabletLandscape`
    font-size: 18px;
  `};
`;

const LightboxLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1100px;
  margin: 0 auto;
`;

class Callout extends React.Component {
  render() {
    return (
      <div>
        {/* <CalloutBackground
          layout="fixed"
          src="/static/food/stat-bg.png"
          width="280"
          height="280"
        /> */}
        <PositionObserver
          id="foodCalloutObserver"
          instersection-ratios="1"
          on="scroll:foodCalloutParallaxAnim.seekTo(percent=event.percent)"
        />
        <ParallaxAnimation
          id="foodCalloutParallaxAnim"
          selector="#food-callout"
          transform="translateY(-60%)"
        />
        {/* <CalloutContent id="food-callout">
          <Text.Accent style={{fontSize: '120px'}}>55%</Text.Accent>
          <Text>
            percent of millennials who say convenience is a top driver when
            buying food
          </Text>
          <Confetti
            pieces={presets.foodColoured}
            style={{
              position: 'absolute',
              top: -100,
              left: '-50%',
            }}
          />
        </CalloutContent> */}
      </div>
    );
  }
}

class Food extends React.Component {
  render() {
    return (
      <FoodSection id="equipe">
        <RobotArm
          layout="fixed"
          width="1043"
          height="567"
          src="/static/food/robot@2x.png"
          hideFor={device.below.desktop}
        />
        <Container>
          <Grid>
            <Grid.Col
              offset={1}
              cols={3}
              offsetAtTabletLandscape={0}
              colsAtTabletLandscape={12}
            >
              <RobotArm
                layout="fixed"
                width="1043"
                height="567"
                src="/static/food/robot@2x.png"
                hideFor={device.above.desktop}
              />
              {/* <FoodBurger /> */}
            </Grid.Col>
            <Grid.Col cols={8} colsAtTabletLandscape={12}>
              <MobilePadding>
                <Title color="white">
                  NOSSA
                  <br /> EQUIPE
                </Title>
              </MobilePadding>
            </Grid.Col>
          </Grid>
        </Container>
        <BelowTitle f={25} footer>
          <Container>
            <Grid alignItems="center">
              <Grid.Col
                cols={3}
                offset={2}
                hideFor={device.below.tabletLandscape}
              >
                <Callout />
              </Grid.Col>
              <Grid.Col
                cols={5}
                offset={1}
                colsAtTabletLandscape={12}
                offsetAtTabletLandscape={0}
              >
                <SpacedContent f={4}>
                  <MobilePadding>
                    {/* <Text.P>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi tortor justo, facilisis id lobortis ac, elementum et
                      sem. Nam quis turpis eget ipsum fermentum malesuada.
                      Praesent ante metus, dignissim ut ullamcorper vitae,
                      lobortis in enim. Sed nec dapibus dui, eget lobortis enim.
                      Suspendisse vehicula nunc ut ante consequat, at suscipit
                      sapien volutpat. Donec sit amet ante ut tellus vulputate
                      lobortis blandit mollis enim. Donec vel elit hendrerit,
                      congue metus nec, sagittis nibh. Maecenas non tincidunt
                      sapien, ac ullamcorper nulla. Pellentesque egestas cursus
                      neque quis cursus. Aenean non rhoncus turpis. Integer nec
                      mi consequat, tempor nisl sit amet, interdum lectus.
                      Vivamus consequat sapien quis mi sagittis congue. Sed
                      mollis ut risus a faucibus.
                    </Text.P>
                    <Text.P>
                      Aenean pharetra convallis nisl, vel rhoncus lectus tempus
                      a. Cras lectus nisl, lobortis eget ipsum quis, mattis
                      sollicitudin lectus. Duis auctor ligula leo. Aliquam
                      finibus sed est nec ornare. Duis tincidunt nisi non
                      facilisis lacinia. Nam fermentum, enim non placerat
                      euismod, magna massa commodo dui, in convallis ipsum diam
                      lobortis velit. Cras volutpat facilisis felis at volutpat.
                    </Text.P> */}

                    {/* <Box>
                      <SpacedContent f={4} header footer>
                        <PaddedContent h={8}>
                          <AmpImage
                            src="/static/food/spookyphone@2x.png"
                            layout="fixed"
                            width="125"
                            height="125"
                          />
                        </PaddedContent>
                        <PaddedContent h={8}>
                          <Text size="18px" weight="bold">
                            Millenials: a generation of photographers
                          </Text>
                          <Text.P>
                            Millennials take and share photos (especially of
                            their food). It looks like there is an insatiable
                            thirst to share photos of their life within their
                            social sphere with the hope it will generate
                            thousands of "likes".
                          </Text.P>
                        </PaddedContent>
                        <Hr />
                        <PaddedContent
                          h={8}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Text size="18px" weight="bold">
                            Read the story
                          </Text>
                          <AmpImage
                            layout="fixed"
                            src="/static/food/next-arrow.png"
                            width="32"
                            height="32"
                          />
                        </PaddedContent>
                      </SpacedContent>
                    </Box> */}
                    <Confetti
                      pieces={presets.basic}
                      color="white"
                      style={{
                        position: 'absolute',
                        bottom: -50,
                        left: '-20%',
                        zIndex: 1,
                      }}
                    />
                    <Confetti
                      pieces={presets.basic}
                      color="white"
                      style={{
                        position: 'absolute',
                        bottom: -50,
                        right: '-20%',
                        zIndex: 1,
                        transform: 'rotate(45deg)',
                      }}
                    />
                  </MobilePadding>
                </SpacedContent>
              </Grid.Col>
            </Grid>
          </Container>
          <Container>
            <SpacedContent f={8}>
              <Grid>
                <Grid.Col cols={12} hideFor={device.above.tabletLandscape}>
                  <Callout />
                </Grid.Col>

                <Grid.Col
                  offset={3.5}
                  cols={6}
                  colsAtTabletLandscape={12}
                  offsetAtTabletLandscape={0}
                >
                  {/* <MobilePadding>
                    <SpacedContent f={4}>
                      <CustomTitle>
                        They love
                        <br /> customization
                      </CustomTitle>
                      <CustomP>
                        Aenean pharetra convallis nisl, vel rhoncus lectus
                        tempus a. Cras lectus nisl, lobortis eget ipsum quis,
                        mattis sollicitudin lectus. Duis auctor ligula leo.
                        Aliquam finibus sed est nec ornare. Duis tincidunt nisi
                        non facilisis lacinia. Nam fermentum, enim non placerat
                        euismod, magna massa commodo dui, in convallis ipsum
                        diam lobortis velit. Cras volutpat facilisis felis at
                        volutpat.
                      </CustomP>
                    </SpacedContent>
                  </MobilePadding> */}
                </Grid.Col>
              </Grid>

              <LightboxLinks>
                <LightboxLink
                  title="PEDRO"
                  bgColor="bilobaFlower"
                  cardImgSrc="/static/food/pedro.png"
                  cardImgWidth="441"
                  cardImgHeight="622"
                >
                  CEO (Chief Executive Officer) <br />
                  Sabe o que eu adoro na minha vida? Eu sei qual é o meu PORQUÊ.
                  Procuro me levantar todo dia para fazer alguma coisa que pode
                  devolver às pessoas o seu bem mais precioso, o TEMPO. Acredito
                  que pensando diferente conseguimos utilizar esse recurso
                  finito de uma melhor forma. O mais interessante é que temos
                  diferentes maneiras para conseguir devolver o tempo as pessoas
                  e uma delas é utilizarmos a tecnologia. Por isso sou Bacharel
                  em Ciência da Computação pela Universidade Federal de Ouro
                  Preto — UFOP. Fui presidente da empresa júnior Voluta Soluções
                  Digitais — UFOP. Presidente do Centro Acadêmico do Curso de
                  Ciência da Computação — UFOP gestão 2013/14. Professor pelo
                  programa PRONATEC e pela Let’s Code, escola de programação.
                  Especialista AMP Cognizant/Google e desenvolvedor front-end na
                  Toro Investimentos. Tenho muita sorte de ter trabalhado em
                  lugares que me ajudaram e me ajudam nesse porquê.
                </LightboxLink>

                <LightboxLink
                  title="DANIEL"
                  bgColor="fountainBlue"
                  cardImgSrc="/static/food/daniel.png"
                  cardImgWidth="441"
                  cardImgHeight="622"
                >
                  CPO (Chief Product Officer) <br />
                  Graduado em ciência da computação pela Universidade Federal de
                  Ouro Preto (UFOP). Fui tesoureiro do centro acadêmico de meu
                  curso e exerci a função de Product Owner no laboratório
                  TerraLAB que tem parceria com INPE e outra empresas da região.
                  No terraLAB trabalhei com levantamento de requisitos, montagem
                  de cenários de testes, histórias de usuário, priorização de
                  backlog e elaboração da sprint backlog. Sou um profissional
                  que através da minha criatividade busco sempre por inovação,
                  quero a todo momento levar para a sociedade por meio da
                  tecnologia soluções para com que as pessoas possam ter uma
                  qualidade de vida cada vez melhor. A tecnologia está presente
                  em nossas vidas desde a hora em que acordamos, então ela tem o
                  poder de nos proporcionar melhorias a todo instante e é isso o
                  que busco.
                </LightboxLink>

                <LightboxLink
                  title="LUIZ"
                  bgColor="magicMint"
                  cardImgSrc="/static/food/luiz.png"
                  cardImgWidth="441"
                  cardImgHeight="622"
                >
                  CTO (Chief Technology Officer) <br />
                  Poucas coisas me deixam mais empolgado do que a criação de
                  algo novo, criar algo que facilite a vida das pessoas, que
                  seja útil, e que as pessoas gostem, e como diria Carl Jung, “A
                  criação de algo novo é consumado pelo intelecto, mas
                  despertado pelo instinto de uma necessidade pessoal. A mente
                  criativa age sobre algo que ela ama”. Buscando o intelecto me
                  graduei na Universidade Federal de Ouro Preto — UFOP fazendo
                  estágio na Fundação Gorceix por 1 ano, além disso fui monitor
                  de programação e membro do centro acadêmico por 2 anos. Após
                  graduado trabalhei na Fitec em um projeto internacional com
                  milhares de desenvolvedores ao redor do mundo. Posteriormente
                  trabalhei na Engineering em um projeto de auxílio no
                  monitoramento de barragens para a Vale. Mesmo durante o
                  trabalho, nunca parei de me divertir criando novas
                  ferramentas, atualmente minha diversão é aplicações celulares
                  multi-plataformas.
                </LightboxLink>

                {/* <LightboxLink
                  title="MAYRON"
                  bgColor="vividTangerine"
                  cardImgSrc="/static/food/sushi@2x.png"
                  cardImgWidth="403"
                  cardImgHeight="334"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  tortor justo, facilisis id lobortis ac, elementum et sem. Nam
                  quis turpis eget ipsum fermentum malesuada. Praesent ante
                  metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed
                  nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc
                  ut ante consequat, at suscipit sapien volutpat. Donec sit amet
                  ante ut tellus vulputate lobortis blandit mollis enim. Dat
                  euismod, magna massa commodo dui, in convallis ipsum diam
                  lobortis velit. Cras volutpat facilisis felis at volutpat.
                </LightboxLink>

                <LightboxLink
                  title="GUSTAVO"
                  bgColor="macAndCheese"
                  cardImgSrc="/static/food/avocado@2x.png"
                  cardImgWidth="340"
                  cardImgHeight="378"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  tortor justo, facilisis id lobortis ac, elementum et sem. Nam
                  quis turpis eget ipsum fermentum malesuada. Praesent ante
                  metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed
                  nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc
                  ut ante consequat, at suscipit sapien volutpat. Donec sit amet
                  ante ut tellus vulputate lobortis blandit mollis enim. Dat
                  euismod, magna massa commodo dui, in convallis ipsum diam
                  lobortis velit. Cras volutpat facilisis felis at volutpat.
                </LightboxLink>

                <LightboxLink
                  title="PAULO"
                  bgColor="parisDaisy"
                  cardImgSrc="/static/food/coffee@2x.png"
                  cardImgWidth="368"
                  cardImgHeight="407"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  tortor justo, facilisis id lobortis ac, elementum et sem. Nam
                  quis turpis eget ipsum fermentum malesuada. Praesent ante
                  metus, dignissim ut ullamcorper vitae, lobortis in enim. Sed
                  nec dapibus dui, eget lobortis enim. Suspendisse vehicula nunc
                  ut ante consequat, at suscipit sapien volutpat. Donec sit amet
                  ante ut tellus vulputate lobortis blandit mollis enim. Dat
                  euismod, magna massa commodo dui, in convallis ipsum diam
                  lobortis velit. Cras volutpat facilisis felis at volutpat.
                </LightboxLink> */}
              </LightboxLinks>
            </SpacedContent>
          </Container>
        </BelowTitle>
      </FoodSection>
    );
  }
}

export default Food;
