import '../../scss/main.scss';
import '../../scss/media.scss';

import { DribbbleSVG, LogoSVG, GithubSVG, TwitterSVG } from '../../image/svg/librarySVG';
import SignIn from './SignIn';
import Language from './Language';
import Logo from './Logo';




const App = () => {
  return (
    <div className="MainContainer">
      <div className="MainToning"></div>


      <div className="MainHeader">

        <Logo />

        <div className="buttonWrap">
          <Language />
          <SignIn />
        </div>

      </div>


      <div className="MainFooter">
        <div className="buttonMain">
          <GithubSVG className="buttonIcon" />
        </div>
        <div className="buttonMain">
          <DribbbleSVG className="buttonIcon" />
        </div>
        <div className="buttonMain">
          <TwitterSVG className="buttonIcon" />
        </div>
      </div>

    </div>
  );
}

export default App;
