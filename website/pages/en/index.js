/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
  
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer background="dark">
        {/* <Logo img_src={imgUrl('docusaurus.svg')} />  */}
        <div className="inner">
          <ProjectTitle />
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="threeColumn"
  background="light">
    
    {[
      {
        content: 'Testes Laboratoriais aprovam o uso de nematoides entomopatogênicos',
        image: imgUrl('micro.png'),
        imageAlign: 'top',
        title: 'Aprovado',
      },
      {
        content: 'Combate a praga ainda na fase de pupa.',
        image: imgUrl('kakuna.png'),
        imageAlign: 'top',
        title: 'Incomparavel',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('micro.png'),
        imageAlign: 'top',
        title: 'Feature Three',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('micro.png'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
      {
        content: 'The content of my second feature hbjdsuyatiivte The content of my second featureThe content of my second featureThe content of my second featureThe content of my second featureThe content of my second featureThe content of my second featureThe content of my second featureThe content of my second featureThe content of my second featureThe content of my second feature',
 
        image: imgUrl('micro.png'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
      
    ]}
  </Block>
);


const FeatureCallout = props => (

  <div class='dark'
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    {/* <h2>banner</h2> */}
    {/* <MarkdownBlock>
    ![Imagem linda](https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350)
    </MarkdownBlock> */}
 
      <img src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" ></img>
      <img src="https://images.pexels.com/photos/5808/food-healthy-vegetables-village.jpg?auto=compress&cs=tinysrgb&h=350" width="100%"></img>
  </div>
);
  const slide = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('lavoura.jpg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
  );


const TryOut = props => (
  <Block id="try">
    {[
      {
        title: 'Bom e sustentavel',
        content: 'aprenda utilizar o controle biologico em sua lavoura, protegendo seu produto e garantindo a sustentabilidade!',
        image: imgUrl('lavoura.jpg'),
        imageAlign: 'left',
       
      },
    ]}
  </Block>
);


const Description = props => (
  <div>
    <Block background="dark">
      {[
        {
          content: 'Proteja sua lavoura de inimigos naturais', 
          image: imgUrl('diabrotica.jpg'),
          imageAlign: 'right',
          title: 'Proteja',
          
        },
      ]}
    </Block>

    
  </div>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          {/* <img src={user.image} alt={user.caption} title={user.caption} /> */}
        </a>
      );
    });

  return (
    
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Pronto para utilizar o Guiatoide?"}</h2>
      <a href="doc2.md">Leia as informacoes</a>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          start {siteConfig.title} 
        </a>
      </div>
    </div>
 
  );
};



class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
            
        <HomeSplash language={language} />
        <div className="mainContainer">
         
         
           {/* <TryOut />
          <Description /> */}
          <FeatureCallout />
          <Features />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
