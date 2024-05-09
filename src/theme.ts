import {extendTheme, ThemeConfig} from "@chakra-ui/react" ; 


const config : ThemeConfig = { 
    initialColorMode: 'light', 
    useSystemColorMode: false,
}



const theme= extendTheme({ 
    config,
    colors: {
      sea:{ 
        50:"#f9f9f9",    // Not Defined yet
        100:"#E8E8E8",   // Platinum
        200:"#DCDCDC",   // Gainsboro
        300:"#A9A9A9",   // Dark Gray
        400:"#989898",   // Spanish Gray
        500:"#808080",   // Neon Gray
        600: "#555555",  // Davy's Gray
        700:"#353839" ,  // Onyx
        800: "#010B13", // Rich Black 
        900: "#100C08"   // Smoky Black
        
      }

    },

    styles: {

        body: {
          bg: 'gray.100', // Change the background color for light mode
          color: 'gray.900', // Change the text color for light mode
        },
        global: {
  
        // Override styles for dark mode
        // Note: This example uses a CSS class to change dark mode styles
        '.chakra-ui-dark &': {
          bg: 'gray.900', // Change the background color for dark mode
           // Change the text color for dark mode
          color:"gray.100",
      
        
        },
      },



    },
  
    
    
    fonts: { 
        heading: `'Abril Fatface', sans-serif`,
        body: `'Roboto', sans-serif`,
        },
    fontWeights: {
        thin:100,
        light: 300, // Use the desired font weight value
        regular:400, 
        medium: 500,
        bold: 700,
        black:900
    },
    })


export default theme; 