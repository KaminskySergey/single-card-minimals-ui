'use client'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ICharacteristic } from '@/interface/card.interface';
interface IAccordionCard {
    description: string
    characteristics: ICharacteristic[]
    reviews: string 
 }



export default function AccordionCard({description, characteristics, reviews }: IAccordionCard) {
    return <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: '#101D62' }} />}
                aria-controls="description"
                id="description"
            >
                <Typography style={{color: '#101D62', fontSize: '14px', fontWeight: '700', padding: '0'}} >Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className="text-[#A7B0C8] text-[12px] font-normal">
                   {description}
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: '#101D62' }} />}
                aria-controls="characteristics"
                id="characteristics"
            >
                <Typography style={{color: '#101D62', fontSize: '14px', fontWeight: '700', padding: '0'}}>Characteristics</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className="text-[#A7B0C8] text-[12px] font-normal">
                        {characteristics.map((el, idx) => (
                            <span key={idx}>
                                {el.name}
                                {idx !== characteristics.length - 1 && ", "}
                            </span>
                        ))}
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: '#101D62' }} />}
                aria-controls="reviews"
                id="reviews"
            >
                <Typography style={{color: '#101D62', fontSize: '14px', fontWeight: '700', padding: '0'}}>Reviews</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className="text-[#A7B0C8] text-[12px] font-normal">
                    {reviews}
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
}
