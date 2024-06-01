import React, {useState} from 'react'


export default function Textform(props) {
    const [text, setText] = useState("")

    const handleUpChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!", "success");
    }

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "success");
    }    

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("text is removed!", "success");
    }

    const handleCopy = ()=>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text is copied!", "success");
    }

    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra space is removed!", "success");
    }

    // setText("Enter Something here")
  return (
    <React.Fragment>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
            <textarea className="form-control" value={text} onChange={handleUpChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"/>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="conatiner my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008*(text.split(" ").length-1)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above it here"}</p>
    </div>
    </React.Fragment>
  )
}
