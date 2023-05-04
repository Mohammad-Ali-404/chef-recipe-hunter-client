/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { FaFilePdf } from "react-icons/fa";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Blog = () => {
  const [loader, setLoader] = useState(false)
    const captureRef = useRef(null);
  
      const downloadPDF = () =>{
        const capture = captureRef.current;
  // const capture= document.querySelector('.actual-receipt');
  setLoader(true);
  html2canvas(capture).then((canvas)=>{
    const imgData = canvas.toDataURL('img/png');
    const doc = new jsPDF('p','mm','a4');
    const componentWidth = doc.internal.pageSize.getWidth();
    const componentHeight = doc.internal.pageSize.getHeight();
    doc.addImage(imgData,'PNG', 0, 0, componentWidth, componentHeight);
    setLoader(false);
    doc.save('BlogPage.pdf');
  })
      }
    
  return (
    <div>
      <div ref={captureRef}>
        <h1 className="text-2xl  font bold ">1. Tell us the differences between uncontrolled and controlled components.</h1>
        <p className='mt-4'>An uncontrolled component is a component that manages its state internally, without relying on React state. The component's state is managed by the browser's DOM, and is accessed using refs. Because the component's state is managed by the browser, the component does not have any control over its value.On the other hand, a controlled component is a component that receives its value from the parent component, and notifies the parent component when the value changes. The value of the component is passed as a prop from the parent component, and the parent component has complete control over the value.The main difference between the two is the way they handle state. In uncontrolled components, state is handled internally, while in controlled components, state is handled externally, by the parent component.</p>
      </div>
      <div>
        <h2></h2>
      </div>
      <div  className="text-center">
      <button className="mt-5 btn"  onClick={downloadPDF} disabled={!(loader === false)}>
        {loader?(
          <span>Downloading...</span>
        ):(
          <span>Download Pdf <FaFilePdf/> </span>
        )}
      </button>
    </div>
    </div>
  );
};

export default Blog;