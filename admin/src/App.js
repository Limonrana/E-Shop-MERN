/* eslint-disable react-hooks/exhaustive-deps */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/App.css';
import './assets/css/theme.minc619.css';
import AppFooter from './components/Footer/AppFooter';
import AppHeader from './components/Header/AppHeader';
import SideNavBar from './components/Header/SideNavBar';
import Routes from './routes/Routes';

function App() {
    const { isOpenMainNav } = useSelector((state) => state.isOpenMainNav);
    let classAll = 'footer-offset has-navbar-vertical-aside navbar-vertical-aside-show-xl';

    if (isOpenMainNav) {
        classAll =
            'footer-offset has-navbar-vertical-aside navbar-vertical-aside-show-xl navbar-vertical-aside-mini-mode';
    }
    return (
        <div className={classAll}>
            <BrowserRouter>
                <AppHeader />
                <SideNavBar />
                <main id="content" className="main">
                    <Routes />
                    <AppFooter />
                </main>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                />
            </BrowserRouter>
        </div>
    );
}

export default App;
