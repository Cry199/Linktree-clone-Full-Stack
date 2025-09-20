import React from 'react';

import { 
  FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaTiktok, FaTwitch, FaDiscord, FaGlobe
} from 'react-icons/fa';

// 2. Crie uma lista com as "regras" para cada ícone
const iconMappings = [
  { key: 'github.com', Icon: FaGithub },
  { key: 'instagram.com', Icon: FaInstagram },
  { key: 'linkedin.com', Icon: FaLinkedin },
  { key: 'youtube.com', Icon: FaYoutube },
  { key: 'twitter.com', Icon: FaTwitter },
  { key: 'x.com', Icon: FaTwitter },
  { key: 'tiktok.com', Icon: FaTiktok },
  { key: 'twitch.tv', Icon: FaTwitch },
  { key: 'discord.gg', Icon: FaDiscord }
];

const LinkIcon = ({ url }) => {
  const lowerCaseUrl = url.toLowerCase();

  const matchedIcon = iconMappings.find(mapping => lowerCaseUrl.includes(mapping.key));

  const IconComponent = matchedIcon ? matchedIcon.Icon : FaGlobe;

  return <IconComponent size={20} style={{ marginRight: '10px' }} />;
};

export default LinkIcon;