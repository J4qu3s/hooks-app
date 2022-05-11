import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Finnish',
        value: 'fi'
    }
]

const GOOGLE_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
    


const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("")
    return(
        <div className="ui form">
            <div className="field">
                <label htmlFor="">Enter text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            
            <Dropdown 
            label="Select a language"
            options={options}
            selected={language}
            onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="ui header">output</h3>
            <Convert text={text} language={language}/>
        </div>
    )

}

export default Translate;