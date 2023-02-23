import React, { useState } from 'react'

function Form(props) {
    const onChangeFunction = (event) => {
        setNewText(event.target.value)
    }

    const onClickFunction1 = () => {
        let myupper = text.toUpperCase();
        setNewText(myupper);
        props.showAlert("UpperCase Converted","success");
    }

    const onClickFunction2 = () => {
        let myupper = text.toLowerCase();
        setNewText(myupper);
        props.showAlert("LowerCase Converted","success");
    }

    const onClickFunction3 = () => {
        let myupper = text.charAt(0).toUpperCase();
        setNewText(myupper);
        props.showAlert("Capitalized Converted","success");
    }

    const onClickFunction4 = () => {
        let newtext = text.split(/[ ]+/);
        setNewText(newtext.join(" "));
    }

    const onClickFunction5 = () => {
        var copyText = document.getElementById('myinputbox');
        copyText.select(text);
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text Copied SuccessFully..!","success");
    }

    const onClickFunction6 = () => {
        let myupper = ' ';
        setNewText(myupper);
        props.showAlert("Text Cleared","success");
    }


    const [text, setNewText] = useState("");
    return (
        <>
            < div className="mb-3 container my-3">
                <textarea className="form-control border border-info" onChange={onChangeFunction} value={text} id="myinputbox" rows="7"></textarea>
                <button type="button" className="btn btn-outline-primary  my-3 mx-2" onClick={onClickFunction1}>Convert To Uppercase</button>
                <button type="button" className="btn btn-outline-primary my-3 mx-2" onClick={onClickFunction2}>Convert To Lowercase</button>
                <button type="button" className="btn btn-outline-primary my-3 mx-2" onClick={onClickFunction3}>Convert To Capitalized</button>
                <button type="button" className="btn btn-outline-primary my-3 mx-2" onClick={onClickFunction4}>Remove Extra Space</button>
                <button type="button" className="btn btn-outline-primary my-3 mx-2" onClick={onClickFunction5}>Copy Text</button>
                <button type="button" className="btn btn-outline-primary my-3 mx-2" onClick={onClickFunction6}>Clear Text</button>
            </div>
            <div className="container my-3 style={{color:props.mode=='success'?'red':'yellow'}}" id='mytext'>
                <h4>Your Text Summery Is Here : </h4>
                <p>The Words in Your Text Is : {text.split(" ").length}  <br /> The Total Character In Your Text Is : {text.length} <br />  Time Required For Read This Text Is : {text.length * 0.008} </p>
            </div>
        </>
    )
}

export default Form
