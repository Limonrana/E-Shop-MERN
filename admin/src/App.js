import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/App.css';
import './assets/css/theme.minc619.css';
import AppFooter from './components/Footer/AppFooter';
import AppHeader from './components/Header/AppHeader';
import SideNavBar from './components/Header/SideNavBar';
import Routes from './routes/Routes';

function App() {
    const [navMini, setNavMini] = useState(false);

    const handleNavMini = () => setNavMini(!navMini);
    return (
        <div
            className={
                navMini
                    ? 'footer-offset has-navbar-vertical-aside navbar-vertical-aside-show-xl navbar-vertical-aside-mini-mode'
                    : 'footer-offset has-navbar-vertical-aside navbar-vertical-aside-show-xl'
            }
        >
            <BrowserRouter>
                <AppHeader />
                <SideNavBar />
                <main id="content" className="main">
                    <Routes handleNavMini={handleNavMini} navMini={navMini} />
                    <AppFooter />
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
