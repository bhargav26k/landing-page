import { useColorModeValue } from '@chakra-ui/react';

export const GoogleLensLogo = ({ ...rest }) => {
  const fillBlue = useColorModeValue('#1A73E8', '#4285F4');
  const fillRed = useColorModeValue('#EA4335', '#E53935');
  const fillYellow = useColorModeValue('#FBBC04', '#FBC02D');
  const fillGreen = useColorModeValue('#34A853', '#4CAF50');
  const fillLightBlue = useColorModeValue('#4285F4', '#1A73E8');
  
  return (
    <svg viewBox="0 0 150 150" {...rest} xmlns="http://www.w3.org/2000/svg">
      <g>
        <path className="st9" fill={fillYellow} d="M94.3,43.6c6.6,0,12.1,5.4,12.1,12.1v9.7h12.1v-9.7c0-13.3-10.8-24.2-24.2-24.2h-9.7v12.1H94.3z" />
        <path className="st7" fill={fillRed} d="M43.6,55.7c0-6.6,5.4-12.1,12.1-12.1h9.7V31.5h-9.7c-13.3,0-24.2,10.8-24.2,24.2v9.7h12.1V55.7z" />
        <path className="st0" fill={fillBlue} d="M55.7,106.4c-6.6,0-12.1-5.4-12.1-12.1v-9.7H31.5v9.7c0,13.3,10.8,24.2,24.2,24.2h9.7v-12.1L55.7,106.4L55.7,106.4z" />
        <circle className="st6" fill={fillLightBlue} cx="75" cy="75" r="16.9" />
        <g>
          <circle className="st5" fill={fillGreen} cx="104" cy="104" r="9.7" />
        </g>
      </g>
    </svg>
  );
};
