import React, {Fragment, useState} from "react";

const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map( (item, index) => {

        const active = index === activeIndex ? 'active' : '';

        return (
            <Fragment key={index}>
                <div 
                className={`title ${active}`}
                onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    <h1>{item.title}</h1>    
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </Fragment>
            

        )
    });
    return <div className="ui styled accordion">
        {renderedItems}
        <h1>{activeIndex}</h1>
    </div>
}

export default Accordion;