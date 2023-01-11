import DownArrow from '../assets/icons/icon-arrow-down.svg';
import '../styles/AccordionItem.css';

interface Props {
    activeAccordionNumber: number | null;
    handeClick: (accordionNumber: number | null) => void;
    itemNumber: number;
    title: string;
    content: string;
    littleHint: string | undefined;
}

export default function AccordionItem(props: Props) {
    const { handeClick, title, content, itemNumber, activeAccordionNumber, littleHint } = props;
    return (
        <div>
            <div onClick={() => handeClick(itemNumber)}>

                {activeAccordionNumber === itemNumber
                    ? <p
                        className='title'
                        style={{ fontWeight: 700, color: '#1E1F36' }}
                    >{title}
                        <img
                            className='down-arrow flipped'
                            src={DownArrow}
                            alt='down-arrow'
                        />
                    </p>
                    : <p className='title'>{title}
                        <img
                            className='down-arrow'
                            src={DownArrow}
                            alt='down-arrow'
                        />
                    </p>}
                {activeAccordionNumber === itemNumber
                    ? <p className='hidden-texts'>
                        {content}
                    </p>
                    : null
                }
                {activeAccordionNumber === itemNumber
                    ? <p className='hidden-hint'>
                        {littleHint ? <span><br />{littleHint}</span> : null}
                    </p>
                    : null
                }
            </div>
            <hr />
        </div>
    )
}
