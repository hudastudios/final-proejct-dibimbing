import './App.css'
import { useRoutes } from 'react-router-dom';
import { routeList } from './routes/routeList';
import LogOutSuccess from './assets/modal/LogOutSuccessModal';
import LoginSuccessModal from './assets/modal/LoginSuccessModal';
import AutoPlay from './assets/components/PromoSlider';

function App() {
  const element = useRoutes(routeList);
  return element;
};

export default App
