import React from 'react';
import Name from './components/Name/Name';

const App = () => {
    return (
        <div style={{ height: '4000px'}}>
            <div style={{ position: 'fixed', width: '100%', top: '50%', transform: 'translate(0, -60%)' }}>
                <Name first="Chris" last="Caruth" allowEdit={true} />
            </div>
        </div>
        
    );
}

export default App;
