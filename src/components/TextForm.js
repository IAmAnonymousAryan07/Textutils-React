import React , {useState} from 'react'

export default function TextForm(props) {
  const handleupClick = () => {
    // console.log("Uppercase button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!" , "success")
  }

  const handleloClick = () => {
    // console.log("Lowercase button was clicked" + text);
    let newloText = text.toLowerCase();
    setText(newloText)
    props.showAlert("Converted to lowercase!" , "success")
  }

  const handleclearClick = () => {
    // console.log("Clear text button was clicked" + text);
    let newclText = ' ';
    setText(newclText)
    props.showAlert("Text cleared!" , "success")
  }

  const handleExtraSpaces = () => {
    // console.log("Clear text button was clicked" + text);
    let newclText = text.split(/[ ]+/);
    setText(newclText.join(" "))
    props.showAlert("Extra spaces removed!" , "success")
  }

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!" , "success")
  }

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="conatiner" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white' , color: props.mode==='dark'?'white':'#042743'}}id="mybox" rows="7"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupClick}>Convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>Time taken to read this text : {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}