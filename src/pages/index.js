import {Routes, Route, Link, Outlet} from 'react-router-dom';
import Home from '@/pages/home';
import Layout from '@/components/Layout'

const App = props => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path='*' element={
                <main style={{padding: '1rem'}}>
                    <p>There's nothing here!</p>
                </main>
            } />
        </Routes>
    )
}

export default App;
