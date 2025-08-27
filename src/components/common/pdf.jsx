import React, {Component} from 'react';
import '../../styles/pdf.css'; 

class PDF extends Component {

    render() {
        const { url } = this.props;

        const closePDF = () => {
            const pdfViewer = document.querySelector('.pdf-viewer');
            if (pdfViewer) {
                pdfViewer.style.display = 'none';
            }
        }

        return ( 
            // w-[1020px] h-[430px]
            <div className="pdf-viewer w-[83.5%] h-[90%] max-h-[500px] flex flex-row items-center justify-center absolute z-1000 top-1 ">
                <object data={url} type="application/pdf"
                className='w-[100%] h-[100%] rounded-lg'></object>
                {/* <button className=' top-0 absolute mt-2 mb-2'>
                    <X  color='white' size={16} onClick={closePDF}/>
                </button> */}
            </div>
        );
    }
}

export default PDF;