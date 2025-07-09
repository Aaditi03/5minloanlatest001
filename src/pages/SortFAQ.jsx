import React, { useEffect, useRef, useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SortFAQ = () => {
    const [isVisible, setIsVisible] = useState(false);
    const faqRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (faqRef.current) observer.observe(faqRef.current);

        return () => {
            if (faqRef.current) observer.unobserve(faqRef.current);
        };
    }, []);

    return (
        <Box
            ref={faqRef}
            sx={{
                padding: 4,
                background: '#f1fdfc',
                width: 'calc(100% - 80px)',
                mx: '40px', // margin left & right
                borderRadius: '12px',
                boxShadow: 3,
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#00CBB8',
                    mb: 4,
                    fontSize: '2.8rem',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                Frequently Asked Questions
            </Typography>

            <Box
                sx={{
                    padding: '2rem',
                    backgroundColor: '#ffffff',
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                    borderRadius: '8px',
                }}
            >
                <Paper elevation={3} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <div
                        className="accordion-wrapper"
                        style={{
                            transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
                            transition: 'transform 1s ease-in-out',
                        }}
                    >
                        {faqItems.map((faq, index) => (
                            <Accordion
                                key={index}
                                sx={{
                                    marginBottom: '1rem',
                                    backgroundColor: '#f9f9f9',
                                    border: `1px solid #00CBB8`,
                                    animation: isVisible
                                        ? `dropDownAnimation 0.5s ease-in-out ${index * 0.2}s forwards`
                                        : 'none',
                                    opacity: isVisible ? 1 : 0,
                                    '@keyframes dropDownAnimation': {
                                        '0%': {
                                            opacity: 0,
                                            transform: 'translateY(-20px)',
                                        },
                                        '100%': {
                                            opacity: 1,
                                            transform: 'translateY(0)',
                                        },
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: '#007BDA' }} />}
                                    aria-controls={`faq${index}-content`}
                                    id={`faq${index}-header`}
                                    sx={{
                                        backgroundColor: 'white',
                                        color: '#007BDA',
                                        fontWeight: 600,
                                        transition: '0.3s ease-in-out',
                                        '&:hover': {
                                            backgroundColor: '#e0f7fa',
                                        },
                                        '&.Mui-expanded': {
                                            backgroundColor: '#00CBB8',
                                            color: 'white',
                                        },
                                    }}
                                >
                                    <Typography sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 600 }}>
                                        {index + 1}. {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: 'Arial, sans-serif', color: '#444' }}>
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </Paper>
            </Box>
        </Box>
    );
};

const faqItems = [
    {
        question: 'What is 5MinuteLoan?',
        answer: '5MinuteLoan.com is a digital platform that provides fast and easy personal loans to salaried professionals in India.',
    },
    {
        question: 'Who can apply for a personal loan on 5MinuteLoan?',
        answer: 'Any salaried individual aged 21 to 60, employed full-time, can apply for a personal loan on 5MinuteLoan.com.',
    },
    {
        question: 'How much loan amount can I get from 5MinuteLoan?',
        answer: 'We offer personal loans ranging from ₹5,000 to ₹1,00,000, depending on your salary and credit history.',
    },
    {
        question: 'How do I apply for a loan on 5MinuteLoan?',
        answer: 'Applying for a loan on 5MinuteLoan.com is easy. Just fill out the form, submit the required documents, and receive instant approval from our end.',
    },
    {
        question: 'What documents do I need to apply for a loan?',
        answer: 'The required documents include a valid ID proof, address proof, salary slips, and bank statements.',
    },
];

export default SortFAQ;
