import { Router } from './routes/Routes'
import ReactGA from "react-ga4";

ReactGA.initialize("G-VDCDDWYD9E");

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
