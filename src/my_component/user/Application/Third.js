import React,{useState} from 'react'

export const Third = ({onNext}) => {
    const [photo, setPhoto] = useState(null);
    const [passportFile, setPassportFile] = useState(null);
    const [financial, setFinancial] = useState(null);
    const [signature, setSignature] = useState(null);


    const handleFileUplaod = (event) => {
      const file = event.target.files[0];
      switch (event.target.id) {
        case 'photo':
            setPhoto(file);
            break;
        case 'signature':
            setSignature(file);
            break;
        case 'financial':
            setFinancial(file);
            break;
        case 'passportFile':
            setPassportFile(file);
            break;
        default:
            break;
      }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            onNext({photo, passportFile, financial, signature})
            alert("Data Saved");
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
            <h4>Upload Document</h4><hr />
            <div class="row mb-3">
                <div className='col'>
                    <label htmlFor="photo" class="form-label">Upload passport-size photograph</label>
                    <input class="form-control form-control-sm bg-light" id="photo" type="file" onChange={handleFileUplaod}/>

                </div>
                <div className='col-5 mt-4'>
                    <button type='button' className='btn btn-link' disabled={!photo} onClick={()=>alert("Document uploaded successfully")}>Upload</button>
                </div>
            </div>

            <div class="row mb-3">
                <div className='col'>
                    <label htmlFor="signature" class="form-label" >Upload signature</label>
                    <input class="form-control form-control-sm bg-light" id="signature" type="file" onChange={handleFileUplaod}/>
                </div>
                <div className='col-5 mt-4'>
                    <button type='button' className='btn btn-link' disabled={!signature} onClick={()=>alert("Document uploaded successfully")}>Upload</button>
                </div>
            </div>  

            <div class="row mb-3">
                <div className='col'>
                    <label htmlFor="financial" class="form-label">Upload proof of financial means</label>
                    <input class="form-control form-control-sm bg-light" id="financial" type="file" onChange={handleFileUplaod}/>
                </div>
                <div className='col-5 mt-4'>
                    <button type='button' className='btn btn-link' disabled={!financial} onClick={()=>alert("Document uploaded successfully")}>Upload</button>
                </div>
            </div>  

            <div class="row mb-3">
                <div className='col'>
                    <label htmlFor="passportFile" class="form-label">Upload passport</label>
                    <input class="form-control form-control-sm bg-light" id="passportFile" type="file" onChange={handleFileUplaod}/>
                </div>
                <div className='col-5 mt-4'>
                    <button type='button' className='btn btn-link' disabled={!passportFile} onClick={()=>alert("Document uploaded successfully")}>Upload</button>
                </div>
            </div> 
            <center><button type="submit" class="btn btn-sm btn-outline-primary my-3 mx-2">Save & Next</button>
                    <button type="reset" class="btn btn-sm btn-outline-secondary my-3">Reset</button>
                </center>
                </form> 
        </div>
    )
}
