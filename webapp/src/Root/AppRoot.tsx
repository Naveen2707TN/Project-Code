import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';       
import TestPage from '../Pages/TestPage';
import MainPage from '../Pages/MainPage';

function AppRoot() {
    const[isdev] = useState<boolean>(false);
    return(
        <BrowserRouter>
            {
                isdev ? 
                    <Routes>
                        <Route path='/' element={<TestPage/>} />
                    </Routes>
                    :
                    <Routes>
                        <Route path='/' element={<MainPage/>} />
                    </Routes>
            }
        </BrowserRouter>
    )
}

export default AppRoot