import Home from "./components/Home";
import { Analytics } from '@vercel/analytics/react';
function App() {
    return (
        <div className="">
            <Home />
            <Analytics />
        </div>
    );
}

export default App;
