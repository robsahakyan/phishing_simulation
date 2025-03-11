import { Slider, styled } from "@mui/material";

export const SliderStyled = styled(Slider)(({ theme }) => ({
    color: theme.palette.customColors.yellow,
    width: '100%',
    height: '4px',
    borderRadius: 0,
    '.MuiSlider-thumb': {
        '&:before': {
            all: 'unset'
        },
        '&:active': {
            height: '1.25rem',
            width: '0.5rem'
        },
        height: '1.25rem',
        width: '0.5rem',
        borderRadius: 0,
        border: `2px solid #3E4142`,
        backgroundColor: theme.palette.customColors.yellow
    },
    '.MuiSlider-track': {
        border: 'none'
    }, 
    '.MuiSlider-rail': {
        backgroundColor: '#3E4142'
    }  
}));