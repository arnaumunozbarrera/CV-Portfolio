import React, {Component} from 'react';
import '../../styles/pdf.css'; 

class Notepad extends Component {
    render() {
        const { url } = this.props;

        return ( 
            // w-[1020px] h-[430px]
            <div className="pdf-viewer w-[83.5%] h-[90%] max-h-[500px] flex flex-row items-center justify-center absolute z-1000 top-1 ">
                <object data={url} type="application/pdf"
                className='w-[100%] h-[100%] rounded-lg'></object>
            </div>
        );
    }
}

export default Notepad;