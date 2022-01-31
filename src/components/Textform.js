import React,{useState} from 'react';

export default function Textform(props) {
  
   const handleOnChange=(event)=>{        
       setText(event.target.value)
        
    }

    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert('converted to UpperCase','success')
    }


    const handleDownClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert('converted to LowerCase','success')
    }

    const handleOnCopy=()=>{
        
      var text=document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert('text copied to clipboard','success')

    }

    const handleOnClear=()=>{
        const newText=""
        setText(newText)
        props.showAlert('text cleared','success')
    }

    const [text,setText]=useState('')
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="form-group">
            <textarea className="form-control text-red" value={text} onChange={handleOnChange} id="myBox" rows="8" 
            style={{backgroundColor:props.mode==='dark'?'#34166e':'white',color:props.mode==='dark'?'white':'black'
            }} 
            
            placeholder='Enter Your Text' ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary m-2" onClick={handleDownClick} >Convert to Lowercase</button>
        <button className="btn btn-primary m-2" onClick={handleOnCopy} >Copy Text</button>
        <button className="btn btn-primary m-2" onClick={handleOnClear} >Clear Text</button>
     </div>

     <div className="container">
       <h1>Your Text Summary:</h1>
       <h3>No. of Words : {text.split(" ").filter((element)=>{return element.length!==0}).length}</h3>
       <h3>No. of characters : {text.length}</h3>
       <h3>Time to read : {text.length/125} Min</h3>
       <h3>Preview: </h3>
       <p> {text.length>0?text:'Enter something to preview'}</p>
     </div>

     
    </>

  )
}
