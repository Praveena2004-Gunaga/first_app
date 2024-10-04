import React ,{useState}from 'react'

function Text(props) {
    
    const handleUpperCase=()=>{
        let newtext = text.toUpperCase();
        setClick(newtext);
    }
    const handleLowerCase=()=>{
        let newtext = text.toLowerCase();
        setClick(newtext);
    }
    const handleOnchange=((event)=>{
        setClick(event.target.value);
    })
    
    const [text, setClick] = useState('Enter th text here');
  return (
    <>
    <div className='container'>
        <div className="mb-3 my-5">
            <h2>Cases of Text</h2>
  
  <textarea className="form-control"value={text} onChange={handleOnchange}  id="exampleFormControlTextarea1" rows="3" style={{backgroundColor:props.mode=='light'?'white':'gray' , color:props.mode=='light'?'black':'white' }}></textarea>
</div>
<button type="button" onClick={handleUpperCase}  className="btn btn-primary">Upper Case</button>
<button type="button" onClick={handleLowerCase}   className="btn btn-primary mx-3">Lower Case</button>
<h3>Text Summary</h3>
<p className='my-3'>Words :{text.split(" ").length} and letters :{text.length}</p>
<p className='my-3'>Maximum time taken to read the sentence :{0.008*text.split(" ").length} </p>
<h3>Preview </h3>
<p>{text}</p>
    </div>
   

    
    </>
  )
}

export default Text