import { useState } from 'react';
import { DATA } from '../data/data';
import AccordionItem from './AccordionItem';
import "../styles/AccordionCard.css";

export default function AccordionCard() {
    const [activeAccordionNumber, setActiveAccordionNumber] = useState<null | number>(null);

    const handeClick = (accordionNumber: number | null) => {
        if (activeAccordionNumber === accordionNumber) {
            setActiveAccordionNumber(null);
        } else {
            setActiveAccordionNumber(accordionNumber);
        }
    }

    return (
        <div className='accordion-card'>
            <div className='image-container'>
                <div className='illustration-box-images'>
                    <div className='box'></div>
                </div>
            </div>
            <div className='list-container'>
                <h1>FAQ</h1>
                <div className='list'>
                    {DATA.map((item) => (
                        <AccordionItem
                            key={item.itemNumber}
                            activeAccordionNumber={activeAccordionNumber}
                            handeClick={handeClick}
                            itemNumber={item.itemNumber}
                            title={item.title}
                            content={item.content}
                            littleHint={item.littleHint}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
