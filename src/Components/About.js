import React,{useState} from 'react'

function About() {
    const [myDarkstyle, setmyDarkStyle] = useState({
        color:'black',
        backgroundColor:'white'   
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")


    const onoffmode=()=>{
        if (myDarkstyle.color==="white") {
            setmyDarkStyle({
                color:'black',
                backgroundColor:'white',
                border:'1px solid white'
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setmyDarkStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode")
        }
    }

    return (
        <>
        <div className="accordion accordion-flush container my-3 border border-primary rounded"  id="accordionFlushExample"style={myDarkstyle}>
            <div className="accordion-item" style={myDarkstyle}>
            <h4 style={myDarkstyle}>Welcome to the Convert Case Text Tool</h4>
            
                <h2 className="accordion-header" id="flush-headingOne">
                    
                    <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myDarkstyle}>
                        Upper case 
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={myDarkstyle}>
                    <div className="accordion-body" style={myDarkstyle}>The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.
                        THIS IS AN EXAMPLE OF UPPER CASE.</div>
                </div>
            </div>
            <div className="accordion-item" style={myDarkstyle}>
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myDarkstyle}>
                        Lower Case
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.this is an example of lower case.</div>
                </div>
            </div>
            <div className="accordion-item" style={myDarkstyle}>
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myDarkstyle}>
                        Capitalized Text
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capitalized Case tab.This Is An Example Of Capitalized Case.</div>
                </div>
            </div>
            <div className="accordion-item" style={myDarkstyle}>
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myDarkstyle}>
                        Copy Text
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capitalized Case tab.This Is An Example Of Capitalized Case.</div>
                </div>
            </div>
       
        <button type="button" onClick={onoffmode} className="btn btn-outline-success my-3 mx-2">{btnText}</button>
        </div>
    </>
    )
}

export default About
