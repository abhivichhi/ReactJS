import './App.css';
import IncDecFunctional from './components/IncDecFunctional';
import IncDecClass from './components/IncDecClass';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Assignment-1 Counter Application</h1>
                <div class="container">
                    <div class="col-md-6">
                        <IncDecFunctional/>
                    </div>
                    <div class="col-md-6">
                        <IncDecClass/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
