import './css/App.css'
import { useRef } from 'react'
import Nav from './components/Footer'
import Main from './components/Main'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function App() {
  const previewRef = useRef();

  const downloadPdf = async () => {
    if (!previewRef) {
      return
    }
    const canvas = await html2canvas(previewRef.current, {scale: 2});
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("preview.pdf");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav onDownload={downloadPdf} />
      <Main previewRef={previewRef} />
    </div>
  )
}

export default App

// const AppStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   minHeight: '100%',
// };