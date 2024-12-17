import logo from './logo.svg';
import  './App.css';
import Header from './components/Header.jsx';
import Top from './components/Top.jsx'
import Gallery from './components/gallery.jsx';
import Form from './components/form.jsx';
import Footer from './components/footer.jsx';

function App() {

  
  return (
    <div className="App bg-gray-100">
      <Header />
      <Top />
      <Gallery />
      <Form />
      <Footer />
      
    </div>
  );
}

export default App;
