import '../../scss/style.scss';
import '../../scss/media.scss';
import { ReactComponent as IconMenu } from './../../image/svg/menu.svg'
import { ReactComponent as IconLogo } from './../../image/svg/logo.svg'
import { ReactComponent as IconAuth } from './../../image/svg/auth.svg'
import { ReactComponent as IconNotify } from './../../image/svg/notify.svg'

function App() {
  return (
    <div className="MainContainer">
      <div className="MainToning"></div>
      <div className="MainHeader">
        <div className="Logo">
          <IconLogo className="iconLogo" />
          <div className="textLogo">RNK</div>
        </div>
        <div className="ButtonHeader">
          <IconNotify className="iconMenu" />
          <IconAuth className="iconMenu" />
          <IconMenu className="iconMenu" />
        </div>
      </div>
      <div className="MainFooter">
        <div>321</div>
      </div>

    </div>
  );
}

export default App;
