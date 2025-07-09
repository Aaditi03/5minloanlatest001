import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box, Container, Paper } from "@mui/material";
import Swal from "sweetalert2";
// import "../css/Common.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const brandBlue = '#0b2747';
const brandOrange = '#ff8800';

const infoCards = [
    {
        icon: <FaEnvelope size={32} className="info-card-icon" />,
        title: 'Email Us',
        lines: ['info@5minuteloan.com', 'care@5minuteloan.com']
    },
    {
        icon: <FaPhone size={32} className="info-card-icon" />,
        title: 'Call Us',
        lines: ['+91 9090999941, 9099909941', 'Care: 18003092760']
    },
    {
        icon: <FaBuilding size={32} className="info-card-icon" />,
        title: 'Corporate Office',
        lines: ['F 40, Phase 1, Sector 6, Noida', 'Gautambuddha Nagar, Uttar Pradesh 201301']
    },
    {
        icon: <FaMapMarkerAlt size={32} className="info-card-icon" />,
        title: 'Registered Office',
        lines: ['276, First Floor, Gagan Vihar,', 'Shahdara, Delhi- 110051']
    }
];

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.5minuteloan.com'
  : 'http://localhost:3001';

await fetch(`${API_URL}/contact-api/send-email`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Failed to send message');
            Swal.fire({
                icon: 'success',
                title: 'Message Sent Successfully!',
                text: 'Thank you for contacting us. We will get back to you within 24 hours.',
                confirmButtonColor: brandBlue,
                background: '#f8f9fa',
            });
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops! Something went wrong',
                text: 'Please try again or contact us directly at +91 90999 09941',
                confirmButtonColor: brandBlue,
                background: '#f8f9fa'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            {/* Contact Info Cards with Hover Effects */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: brandBlue, mb: 1, textAlign: 'center' }}>Contact Information</Typography>
            <Box sx={{ width: 60, height: 4, background: brandOrange, mx: 'auto', mb: 4, borderRadius: 2 }} />
            <Grid container spacing={3} justifyContent="center" sx={{ mb: 5 }}>
                {infoCards.map((card, idx) => (
                    <Grid item xs={12} sm={6} md={3} key={idx}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 3,
                                textAlign: 'center',
                                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
                                transition: 'all 0.3s ease',
                                border: '1px solid transparent',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
                                    borderColor: brandOrange,
                                    '& .info-card-icon': {
                                        color: `${brandOrange} !important`
                                    },
                                    '& h6': {
                                        color: brandBlue
                                    }
                                }
                            }}
                        >
                            <Box sx={{
                                mb: 1,
                                '& .info-card-icon': {
                                    color: '#000000',
                                    transition: 'color 0.3s ease'
                                }
                            }}>
                                {card.icon}
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: brandBlue, mb: 1 }}>{card.title}</Typography>
                            {card.lines.map((line, i) => (
                                <Typography key={i} sx={{ color: '#222', fontSize: 15 }}>{line}</Typography>
                            ))}
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Map and Form Section */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: brandBlue, mb: 2 }}>
                Find Us Here
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 4, md: 5 },
                width: '100%',
                maxWidth: 1200,
                mx: 'auto'
            }}>
                {/* Map Section - Left Half */}
                <Box sx={{
                    flex: 1,
                    minHeight: {
                        xs: 250, // Mobile phones
                        sm: 300, // Small tablets
                        md: 400, // Tablets
                        lg: 500, // Laptops
                        xl: 600 // Large screens
                    },
                    maxHeight: {
                        xs: 300, // Prevent too tall on mobile
                        md: 'none' // No limit on larger screens
                    },
                    borderRadius: {
                        xs: 1, // Slight rounding on mobile
                        md: 0 // Square corners on desktop
                    },
                    overflow: 'hidden',
                    boxShadow: {
                        xs: 1, // Subtle shadow on mobile
                        md: 3 // Stronger shadow on desktop
                    },
                    width: '100%',
                    aspectRatio: '16/9', // Maintain aspect ratio
                    mx: 'auto', // Center horizontally
                    my: {
                        xs: 2, // Small vertical margin on mobile
                        md: 0 // No vertical margin on desktop
                    }
                }}>
                    <iframe
                        title="Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566260107028!2d77.3248684150821!3d28.613757982425915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%20Sector%206!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{
                            border: 0,
                            minHeight: 250 // Ensures visibility on all devices
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Box>

                {/* Form Section - Right Half */}
                <Box sx={{
                    flex: 1,
                    minWidth: { md: 400 },
                    // marginLeft:'100px',
                    display: 'flex',
                    // minWidth:'100px',
                    // marginLeft:'70px',
                    justifyContent: 'center'
                }}>
                    <Paper elevation={0} sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: 2,
                        boxShadow: 3,
                        width: { xs: '100%', sm: 490 },
                        backgroundColor: '#f9f9f9',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        // marginLeft:'100px'
                    }}>
                        <Typography variant="h5" sx={{
                            fontWeight: 'bold',
                            color: brandBlue,
                            mb: 5,
                            textAlign: 'center'
                        }}>
                            Send us a Message
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: {
                                    xs: 0, // No margin on mobile (0px)
                                    sm: '16px', // Small margin on small devices (16px)
                                    md: '24px', // Medium margin on tablets (24px)
                                    lg: '33px', // Your original margin on laptops (33px)
                                    xl: '40px'
                                },
                                flex: 1,

                                // minWidth:'100px'
                            }}
                        >
                            <Grid container spacing={2}>
                                {/* First Name and Last Name */}
                                <Grid item xs={12} sm={6}>
                                    <TextField name="name" label="Full Name" variant="outlined" fullWidth required value={formData.name} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField name="email" label="Email" variant="outlined" fullWidth required type="email" value={formData.email} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField name="phone" label="Phone Number" variant="outlined" fullWidth required type="tel" value={formData.phone} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField name="subject" label="Subject" variant="outlined" fullWidth required value={formData.subject} onChange={handleChange} />
                                </Grid>
                                {/* Full Width Message */}
                                <Grid item xs={12}>
                                    <TextField name="message" label="Message" variant="outlined" fullWidth multiline rows={5} required value={formData.message} onChange={handleChange}

                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                height: '100px',
                                                minWidth: { xs: '100%', sm: '405px' },
                                                alignItems: 'flex-start', // Align text to top
                                                padding: '16px', // Add internal padding
                                            },
                                            '& .MuiInputBase-input': {
                                                textAlign: 'left', // Explicit left alignment
                                                marginLeft: '8px', // Small left margin
                                            },
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: brandBlue, // Optional: match your theme
                                            }
                                        }}
                                    />
                                </Grid>

                                {/* Submit Button - Centered below message */}
                                <Grid item xs={12}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: '100%',
                                        mt: 3
                                    }}>
                                        <Button
                                            variant="contained"
                                            type="submit"
                                            size="large"
                                            disabled={loading}
                                            sx={{
                                                py: 2, // Increased vertical padding
                                                px: 6, // Increased horizontal padding
                                                backgroundColor: brandBlue,
                                                '&:hover': { backgroundColor: brandOrange },
                                                borderRadius: 2,
                                                marginLeft: {
                                                    xs: 0, // No margin on mobile
                                                    sm: '40px', // 120px on small screens and up
                                                    md: '800px', // 150px on medium screens
                                                    lg: '110px' // 180px on large screens
                                                },
                                                fontSize: '1.1rem', // Slightly larger font
                                                fontWeight: 700, // Bolder text
                                                minWidth: 200, // Minimum width
                                                width: { xs: '100%', md: 'auto' }, // Full width on mobile, auto on desktop
                                                height: 50, // Fixed height
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }} >
                                            {loading ? 'Sending...' : 'Submit'}
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Container>
    );
};


export default ContactUs;