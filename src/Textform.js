import React,{useState} from 'react'

export default function Textform(props) {
            const handleupclick = () => {
                        // console.log("upper case clicked");
                        let newText = Text.toUpperCase();
              setText(newText)
              props.showalert("convert to uppercase!","success")
            }
            const handleloclick=()=>{
                         let newText2=Text.toLocaleLowerCase();
                         setText(newText2)
              props.showalert("convert to lowercase!","success")           
            }
            const handleonchange = (event) => {
                        // console.log("onchage");
                        setText(event.target.value)
            }
  const handlecopyclick = () => {
    navigator.clipboard.writeText(Text);
    props.showalert("copy the text!","success")
  }
  const handlespace = () => {
    let newtext = Text.split(' ').filter(s => s).join(' ')
    setText(newtext)
    props.showalert("remove additional space!","success")
  }
  const handleclrclick = () => {
    setText("")
    props.showalert("clear text!","success")
  }
            const [Text, setText] = useState("");
  return (
              <>
      <div className="container" style={{color: props.mode ==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
          <textarea className="form-control" value={Text} onChange={handleonchange} style={{backgroundColor:props.mode==='light'?'white':'#134',color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleupclick}>change to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleloclick}>change to lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlecopyclick}>copy text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlespace}>remove extra spaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleclrclick}>clear text</button>
        </div>
        <div className="container my-2"style={{color: props.mode ==='light'?'black':'white'}}>
          <h2>your text summary</h2>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  words and {Text.length} characters</p>
        <p>{0.008 *Text.split(" ").filter((element)=>{return element.length!==0}).length} minnutes read</p>
        <h2>preview</h2>
        <p>{Text.length>0?Text:"enter something in the textbox to preview it here"}</p>
        </div>
      
      </>
            )
}
