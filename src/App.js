import Portada from './components/Portada';
import Voucher from './components/Voucher';
import PagoForm from './components/PagoForm';
import Result from './components/Result';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './components/FormContext';
import './App.css';
import ComprarCard from './components/ComprarCard';
import PdfViewer from './components/PdfViewer';

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
     <Routes>
      <Route path='/' element={<Portada/>} />
      <Route path='/pagoform' element={<PagoForm/>} />
      <Route path='/pdfviewer' element={<PdfViewer/>} />
      <Route path='/result' element={<Result/>} />
      <Route path='/comprarcard' element={<ComprarCard/>} />
      <Route path='/voucher' element={<Voucher/>} />
    </Routes>
    </CartContextProvider>
    </BrowserRouter>
  
  );
}

export default App;
