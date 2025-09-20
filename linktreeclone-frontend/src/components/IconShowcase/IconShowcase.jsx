import React from 'react';

import { FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaTiktok, FaTwitch } from 'react-icons/fa';

const showcaseStyle = {
  marginTop: '40px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '24px',
  color: 'var(--secondary-text-color)',
};

const IconShowcase = () => {
  return (
    <div style={showcaseStyle}>
      <FaGithub size={32} />
      <FaInstagram size={32} />
      <FaLinkedin size={32} />
      <FaYoutube size={32} />
      <FaTiktok size={32} />
      <FaTwitch size={32} />
    </div>
  );
};

export default IconShowcase;