
import './App.css';
import Pagination from './components/Pagination';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/users'
  const initialPageSize=2;
  return (
    <div >
 <Pagination API_URL={API_URL} initialPageSize={initialPageSize}/>
    </div>
  );
}

export default App;
