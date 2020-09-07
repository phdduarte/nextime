import * as React from 'react';
import styled from 'styled-components';

import {device} from '/util/device';
import AmpImage from '/component/amp/AmpImage';
import ParallaxAnimation from '/component/amp/ParallaxAnimation';
import PositionObserver from '/component/amp/PositionObserver';
import Container from '/component/base/Container';
import Grid from '/component/base/Grid';
import Text from '/component/base/Text';
import Confetti, {presets} from '/component/base/Confetti';
import DatingCard from '/component/base/DatingCard';
import SpacedContent from '/component/base/SpacedContent';
import PaddedContent from '/component/base/PaddedContent';
import MobilePadding from '/component/base/MobilePadding';
import SleepIntro from './SleepIntro';

const RelationshipsSection = styled.section`
  background: ${({theme}) => theme.colors.carnationPink};
  color: ${({theme}) => theme.colors.paprika};
  position: relative;
  z-index: 7;
  padding: 200px 0 0 0;
`;

const SleepBackground = styled.div`
  background: linear-gradient(180deg, #fc9ebe 0%, #20233f 100%);
  position: absolute;
  left: 0;
  right: 0;
  bottom: -300px;
  height: 800px;
  display: none;
`;
const TitleCap = styled.div`
  position: relative;
  left: -250px;
  bottom: -54px;
  z-index: 1;
  ${device.below.tabletLandscape`
    left: -150px;
    bottom: -47px;
  `}
  ${device.below.tabletPortrait`
    left: -150px;
    bottom: -32px;
  `}
`;
const Accent = styled(Text.Accent)`
  padding-top: 80px;

  ${device.below.tabletPortrait`
    font-size: 90px;
    padding-top: 0;
    margin-top: -40px;
  `}
`;
const CalloutImage = styled(AmpImage)`
  margin-top: 120px;
  margin: 120px auto 0 auto;
  ${device.below.tabletPortrait`
    margin-top: 240px;
  `}
`;
const Title = styled(Text.Title)`
  font-size: 120px;
  ${device.below.tabletLandscape`
    text-align: center;
    font-size: 22vw;
  `};
`;

class Relationships extends React.Component {
  render() {
    return (
      <RelationshipsSection id="marketingDigital">
        <SleepBackground />
        <Container>
          <SpacedContent f={12} style={{position: 'relative', zIndex: '2'}}>
            <Grid>
              <Grid.Col
                cols={5}
                offset={2}
                colsAtTabletLandscape={7}
                offsetAtTabletLandscape={0}
                colsAtTabletPortrait={12}
                offsetAtTabletPortrait={0}
              >
                <MobilePadding>
                  <TitleCap>
                    <Confetti
                      pieces={presets.basic}
                      color="white"
                      style={{position: 'absolute', right: '30%', top: -56}}
                    />
                    <AmpImage
                      layout="responsive"
                      width="436"
                      height="185"
                      src="/static/relationships/woman-lying-down@2x.png"
                    />
                  </TitleCap>
                  <Title style={{color: '#fff'}}>MARKETING</Title>
                  <Title>DIGITAL</Title>
                </MobilePadding>

                <MobilePadding>
                  <Grid
                    hideFor={device.above.phone}
                    style={{marginTop: '60px'}}
                  >
                    <Grid.Col cols={6} style={{zIndex: 2}}>
                      <SpacedContent f={6}>
                        <DatingCard
                          id="date-card-mobile-1"
                          layout="responsive"
                          flyoutDirection="left"
                          width="233"
                          height="278"
                          src="/static/relationships/card1@2x.png"
                        />
                        <div
                          style={{
                            position: 'relative',
                            width: '100%',
                            paddingTop: '100%',
                          }}
                        >
                          <DatingCard
                            id="date-card-mobile-2"
                            layout="intrinsic"
                            flyoutDirection="left"
                            width="405"
                            height="276"
                            src="/static/relationships/card9@2x.png"
                            style={{
                              position: 'absolute',
                              top: 0,
                              right: 0,
                              width: '170%',
                            }}
                          />
                        </div>
                        <DatingCard
                          id="date-card-mobile-3"
                          layout="responsive"
                          flyoutDirection="left"
                          width="233"
                          height="278"
                          src="/static/relationships/card8@2x.png"
                        />
                        <DatingCard
                          id="date-card-mobile-4"
                          layout="responsive"
                          flyoutDirection="left"
                          width="233"
                          height="278"
                          src="/static/relationships/card10@2x.png"
                        />
                        <DatingCard
                          id="date-card-mobile-5"
                          layout="responsive"
                          flyoutDirection="left"
                          width="233"
                          height="278"
                          src="/static/relationships/card7@2x.png"
                        />
                      </SpacedContent>
                    </Grid.Col>
                    <Grid.Col cols={6} style={{zIndex: 2}}>
                      <SpacedContent f={6}>
                        <DatingCard
                          id="date-card-mobile-6"
                          layout="responsive"
                          flyoutDirection="right"
                          width="233"
                          height="278"
                          src="/static/relationships/card2@2x.png"
                          style={{marginTop: '100px'}}
                        />
                        <DatingCard
                          id="date-card-mobile-7"
                          layout="responsive"
                          flyoutDirection="right"
                          width="233"
                          height="278"
                          src="/static/relationships/card3@2x.png"
                        />
                        <DatingCard
                          id="date-card-mobile-8"
                          layout="responsive"
                          flyoutDirection="right"
                          width="233"
                          height="278"
                          src="/static/relationships/card4@2x.png"
                        />
                        <DatingCard
                          id="date-card-mobile-9"
                          layout="responsive"
                          flyoutDirection="right"
                          width="233"
                          height="278"
                          src="/static/relationships/card5@2x.png"
                        />
                        <DatingCard
                          id="date-card-mobile-10"
                          layout="responsive"
                          width="233"
                          height="278"
                          src="/static/relationships/card6@2x.png"
                        />
                      </SpacedContent>
                    </Grid.Col>
                    <Grid.Col cols={12} style={{zIndex: 1}}>
                      <Confetti
                        pieces={presets.basic}
                        color="white"
                        style={{margin: '-30% auto 0 auto'}}
                      />
                    </Grid.Col>
                  </Grid>
                </MobilePadding>

                <Grid
                  style={{marginTop: '150px'}}
                  hideFor={device.below.tabletPortrait}
                >
                  <Grid.Col cols={6}>
                    <div
                      style={{
                        width: '100%',
                        height: '276px',
                        position: 'relative',
                      }}
                    >
                      <DatingCard
                        id="date-card-10"
                        flyoutDirection="left"
                        width="405"
                        height="276"
                        src="/static/relationships/card9@2x.png"
                        style={{
                          position: 'absolute',
                          top: '0',
                          right: '0%',
                          marginTop: '50%',
                        }}
                      />
                    </div>
                  </Grid.Col>
                  <Grid.Col cols={6} textAlign="right">
                    <SpacedContent f={6}>
                      <DatingCard
                        id="date-card-8"
                        flyoutDirection="left"
                        width="233"
                        height="278"
                        src="/static/relationships/card8@2x.png"
                      />
                      <DatingCard
                        id="date-card-9"
                        flyoutDirection="right"
                        width="233"
                        height="278"
                        src="/static/relationships/card10@2x.png"
                      />
                    </SpacedContent>
                  </Grid.Col>
                </Grid>

                <SpacedContent f={4}>
                  <MobilePadding style={{marginTop: '60px'}}>
                    <Text.P color="paprika">
                      Marketing Digital é o conjunto de atividades que uma
                      empresa (ou pessoa) executa online com o objetivo de
                      atrair novos negócios, criar relacionamentos e desenvolver
                      uma identidade de marca. Dentre as suas principais
                      estratégias estão o SEO, Inbound Marketing e o Marketing
                      de Conteúdo.
                    </Text.P>
                    <Text.P color="paprika">
                      Existem centenas de ferramentas desse nicho, no entanto,
                      nem todas são adequadas às diversas empresas e sectores. A
                      chave para o sucesso é a combinação do marketing
                      tradicional com as novas ferramentas online, para
                      desenvolver uma plano de e-marketing que se ajuste às
                      necessidades e características de cada empresa.
                    </Text.P>
                    <Text.P color="paprika">
                      O Marketing viral é também conhecido como palavra
                      electrónico ou “word of mouse” o equivalente no digital ao
                      word of mouth do marketing tradicional, é uma estratégia
                      que permite propagar mensagens comerciais a um ritmo
                      exponencial. Normalmente designada de comunicação
                      comercial autopropagada. Um exemplo clássico de um caso de
                      sucesso de viral marketing é o Hotmail. Um dos primeiros
                      serviços gratuitos de web-mail que devido à simples frase
                      que surgia em cada mensagem que cada utilizador enviava
                      “Get your free and private e-mail at" nos primeiros seis
                      meses após o seu lançamento atingiu um milhão de
                      utilizadores e ao fim de um ano e meio 12 milhões de
                      utilizadores, altura em que foi vendido à Microsoft por
                      cerca de 400 milhões de dólares. A promoção do filme The
                      Blair Witch Project é outro caso de sucesso de viral
                      marketing, um filme com um orçamento extremamente reduzido
                      que foi um dos filmes mais rentáveis e mais vistos de
                      sempre, devido à divulgação online, sugerindo que o filme
                      (de terror) era um documentário (retratando eventos reais)
                      e à propagação exponencial dessa mensagem.
                    </Text.P>
                    <Text.P color="paprika">
                      O SEO nada mais é do que a otimização de uma página (ou
                      até do site inteiro) para ser melhor compreendido pelas
                      ferramentas de busca. A conseqüência da utilização das
                      técnicas de SEO é o melhor posicionamento de um site em
                      uma página de resultados de uma busca. Por exemplo, ao
                      pesquisar no Google por “Marketing de Busca”, o primeiro
                      resultado é este site. O SEO é uma prática sem garantias,
                      ou seja, nenhuma empresa ou pessoa pode garantir que seu
                      site fique em primeiro em uma busca, pois o único capaz
                      disto seria o próprio site de busca como o Google ou o
                      Yahoo.
                    </Text.P>
                  </MobilePadding>
                </SpacedContent>
              </Grid.Col>
              <Grid.Col cols={2} offset={1} hideFor={device.below.phone}>
                <SpacedContent f={6}>
                  <DatingCard
                    id="date-card-1"
                    flyoutDirection="left"
                    width="233"
                    height="278"
                    src="/static/relationships/card1@2x.png"
                    style={{marginTop: '100px'}}
                  />
                  <DatingCard
                    id="date-card-2"
                    flyoutDirection="right"
                    width="233"
                    height="278"
                    src="/static/relationships/card2@2x.png"
                  />
                  <DatingCard
                    id="date-card-3"
                    flyoutDirection="right"
                    width="233"
                    height="278"
                    src="/static/relationships/card3@2x.png"
                  />
                  <DatingCard
                    id="date-card-4"
                    flyoutDirection="right"
                    width="233"
                    height="278"
                    src="/static/relationships/card4@2x.png"
                  />
                  <DatingCard
                    id="date-card-5"
                    flyoutDirection="left"
                    width="233"
                    height="278"
                    src="/static/relationships/card5@2x.png"
                  />
                  <DatingCard
                    id="date-card-6"
                    flyoutDirection="right"
                    width="233"
                    height="278"
                    src="/static/relationships/card7@2x.png"
                  />
                  <DatingCard
                    id="date-card-7"
                    width="233"
                    height="278"
                    src="/static/relationships/card6@2x.png"
                  />
                  <Confetti
                    pieces={presets.basic}
                    color="white"
                    style={{transform: 'rotate(45deg)'}}
                  />
                </SpacedContent>
              </Grid.Col>
            </Grid>
            <Grid style={{marginTop: '-150px'}}>
              <Grid.Col
                cols={4}
                offset={1.5}
                colsAtTabletLandscape={12}
                offsetAtTabletLandscape={0}
              >
                <PaddedContent f={2}>
                  <PositionObserver
                    id="relCallout2Observer"
                    instersection-ratios="1"
                    on="scroll:relCallout2ParallaxAnim.seekTo(percent=event.percent)"
                  />
                  <ParallaxAnimation
                    id="relCallout2ParallaxAnim"
                    selector="#relationship-callout2"
                    transform="translateY(-60%)"
                  />
                  <div
                    id="relationship-callout2"
                    style={{position: 'relative', textAlign: 'center'}}
                  >
                    <CalloutImage
                      layout="intrinsic"
                      width="385"
                      height="385"
                      src="/static/relationships/callout@2x.png"
                    />
                    <Confetti
                      color="white"
                      pieces={presets.small}
                      style={{
                        position: 'absolute',
                        bottom: '200px',
                        left: '45%',
                        transform: 'translateX(-50%)',
                      }}
                    />
                  </div>
                </PaddedContent>
              </Grid.Col>
              <Grid.Col
                cols={4}
                offset={1}
                colsAtTabletPortrait={12}
                offsetAtTabletPortrait={0}
              >
                <MobilePadding>
                  <div style={{maxWidth: '320px'}}>
                    <Accent color="white">3h30</Accent>
                    <Text style={{marginTop: '15px'}}>
                      O brasileiro está entre os dois primeiros no ranking da
                      população que fica mais tempo nas redes sociais, sendo em
                      média mais de 3h30 por dia.
                    </Text>
                  </div>
                  <div style={{margin: '150px 0 0 0'}}>
                    <Text.P color="paprika">
                      Da busca por referências à selfie lacradora, a juventude
                      brasileira escolheu o Instagram como a rede social do
                      momento. De acordo com um levantamento realizado pela
                      Cuponation, jovens de classe média, entre 17 e 25 anos,
                      passam em média 1h e 32 minutos conectados à rede social
                      por dia.
                    </Text.P>
                    <Text.P color="paprika">
                      Podemos te ajudar nessa rede social do momento.
                    </Text.P>
                  </div>
                </MobilePadding>
              </Grid.Col>
            </Grid>
          </SpacedContent>
        </Container>

        {/* <SleepIntro /> */}
      </RelationshipsSection>
    );
  }
}

export default Relationships;
