import './App.css'
import { useRoutes } from 'react-router-dom';
import { routeList } from './routes/routeList';




function App() {
  const element = useRoutes(routeList);
  return element;
  // return <DashboardUser></DashboardUser>
};

export default App
