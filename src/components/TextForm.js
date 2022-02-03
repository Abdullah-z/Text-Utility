import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick =()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }

    const handleLowClick =()=>{
        let newText= text.toLowerCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    
    const handleClearClick =()=>{
        let newText= "";
        setText(newText);
    }
    
    const handleCopyClick= ()=>{
        var text= document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const handleRSClick= ()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleACClick= ()=>{
      
        let newText = text.split(" ");

    for (let i = 0; i < newText.length; i++) {
     newText[i] = newText[i][0].toUpperCase() + newText[i].substr(1);
    }

setText(newText.join(" "));
     

    }

    const [text, setText] = useState("");
    return (
<>

        <div className="container">
            
            <div className="mb-3">
                <h1 className="my-4">{props.boxTitle}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange}  value={text}></textarea>
            </div>
            <div className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Upercase</div>
            <div className="btn btn-primary " onClick={handleLowClick} >Convert to Lowercase</div>
            <div className="btn btn-primary mx-1" onClick={handleACClick} >Capitalize First Alphabets</div>
            <div className="btn btn-primary " onClick={handleRSClick} >Remove Extra Spaces</div>
            <div className="btn btn-success mx-1" onClick={handleCopyClick} >Copy to Clipboard</div>
            <div className="btn btn-danger" onClick={handleClearClick} >Clear All</div>
        </div>


<div className="my-3 container border">

    <h3 className="my-2">Text Summary</h3>
    <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> Minutes required to read</p>

<h3>Preview</h3>
<p>{text}</p>


</div>



  </>      
    )
}





 

