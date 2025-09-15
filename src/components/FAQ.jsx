import './FAQ.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
function FAQ({question, answer}) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }, [open]);
    return (
        <div className="faq-item" style={{ borderLeft: open ? "5px solid rgba(0, 132, 255, 1)" : "5px solid rgba(0, 0, 0, 1)", backgroundColor: open ? "rgba(0, 132, 255, 0.1)" : "rgb(255, 255, 255)" }}>
            <div className="faq-question">
                <h3>{question}</h3>
                <button className="faq-toggle" onClick={() => setOpen(!open)}>
                    {open ? <FaMinus color='rgba(0, 132, 255, 1)' size={24}/> : <FaPlus size={24}/>}
                </button>
            </div>
            <div className="faq-answer" style={{ height: height }} ref={contentRef}>
                {answer}
            </div>
        </div>
    );
}

export default FAQ;
