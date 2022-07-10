import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayOut from '~/compoment/Layout/DefaultLayout/DefaultLayout';
import { publicRouter } from '~/compoment/routers';
import AuthProvider from './compoment/component/authProvider/AuthProvide';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((router, index) => {
                        const Page = router.component;
                        const Layout = DefaultLayOut;
                        return (
                            <Route
                                path={router.path}
                                key={index}
                                element={
                                    <AuthProvider>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </AuthProvider>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
