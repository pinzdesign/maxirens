"use client";

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState<null | 'sending' | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('sending');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: "tyrael2101@hotmail.com",
          html: `
            <div>
              <p><strong>Navn:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Besked:</strong></p>
              <p>${formData.message}</p>
            </div>
          `,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Error sending email:', await res.json());
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <>
    <div className="container-fluid colorPink">
        <div className="row">
            <div className="col-lg breakerWrap">
                <h2 className="breaker" id="contact">Kontakt Os</h2>
            </div>
        </div>
    </div>

    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg">
                    <div className="form-group">
                        <label htmlFor="message">Besked</label>
                        <textarea className="form-control txtarea" id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="name">Navn</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" aria-describedby="emailHelp" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                    </div>

                    <button className="btnSend" type="submit">SEND</button>
                </div>

                <div className="col-md-6">
                    <div className="contactInfo">
                        <strong>
                            Kontakt os i dag!
                        </strong>
                        <p>
                            Vi kan sagtens udarbejde en særlig aftale efter behov, kontakt os og lad os finde en løsning som passer dig bedst
                        </p>
                        {status === 'sending' && <p>Sender...</p>}
                        {status === 'success' && <p>Beskeden er sendt. Vi henvender os snarest muligt.</p>}
                        {status === 'error' && <p>Der skete en fejl.</p>}
                    </div>
                </div>
            </div>
        </form>
    </div>
    </>        
  );
};

export default ContactForm;