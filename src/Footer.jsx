// import { ResetTvRounded } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
const year=new Date().getFullYear();
 return(
     <>
         <footer>
             <p>copyright © {year}</p>
         </footer>
     </>
 )
}

export default Footer;