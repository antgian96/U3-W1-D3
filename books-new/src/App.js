import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/NavBar';
import CustomFooter from './Components/MyFooter'; 
import MyAlert from './Components/MyAlert';
import Searchbar from './Components/Searchbar';
import BookList from './Components/BookList';

function App() {
  return (
    <div className="App">
      <header >
      
        <CustomNavbar subtitle="Libri" isFluid={true} />
        <MyAlert/>
      </header>
      <main>
        <BookList/>
       
        
      </main>
      <footer>
        <CustomFooter subtitle="Libri" isFluid={true} />
      </footer>
      
    </div>
    );
}

export default App;
