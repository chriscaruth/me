import React from 'react';
import './App.css';
import ComingSoon from './components/ComingSoon';
import Name from './components/Name/Name';
import useScreenDimensions from './hooks/useScreenDimensions';

const App = () => {
    const screen = useScreenDimensions();

    return (
        <div style={{ height: '4000px'}}>
            {screen.width != undefined &&
                <div style={{ position: 'fixed', width: '100%', top: '50%', transform: 'translate(0, -60%)' }}>
                    <Name first="Chris" last="Caruth" allowEdit={false} width={screen.width} />
                    <ComingSoon />
                </div>
            }
        </div>
        
    );
}

export default App;
