import { styled } from "@mui/material";
import { WhiteTypographyStyled, TertiaryTypographyStyled, YellowTypographyStyled, SecondaryWhiteTypographyStyled } from "src/@core/components/styled/Typography";

// export const WhiteTypographyStyled = styled(Typography)(({ theme }) => ({
//     color: theme.palette.primary.main
// }));

// export const TertiaryTypographyStyled = styled(Typography)(({ theme }) => ({
//     color: theme.palette.customColors.tertiaryColor
// })); 



// export const SecondaryWhiteTypographyStyled = styled(Typography)(({ theme }) => ({
//     color: theme.palette.secondary.main
// })); 

export const WhiteTypography14Styled = styled(WhiteTypographyStyled)({
    fontSize: '14px'
});

export const WhiteTypography16Styled = styled(WhiteTypographyStyled)({
    fontSize: '16px'
});

export const WhiteTypography18Styled = styled(WhiteTypographyStyled)({
    fontSize: '18px'
});

export const WhiteTypography20Styled = styled(WhiteTypographyStyled)(({ theme }) => ({
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
        fontSize: '18px'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px'
    }
}));

export const WhiteTypography24Styled = styled(WhiteTypographyStyled)(({ }) => ({
    fontSize: '24px'
}));

export const WhiteTypography32Styled = styled(WhiteTypographyStyled)({
    fontSize: '32px'
});

export const WhiteTypography40Styled = styled(WhiteTypographyStyled)(({ theme }) => ({
    fontSize: '40px',
    [theme.breakpoints.down('md')]: {
        fontSize: '32px'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '28px'
    }
}));


export const WhiteTypography48Styled = styled(WhiteTypographyStyled)(({ theme }) => ({
    fontSize: '48px',
    [theme.breakpoints.down('md')]: {
        fontSize: '40px'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '32px'
    }
}));

export const TertiaryTypography12Styled = styled(TertiaryTypographyStyled)({
    fontSize: '12px'
});

export const TertiaryTypography14Styled = styled(TertiaryTypographyStyled)({
    fontSize: '14px'
});

export const TertiaryTypography16Styled = styled(TertiaryTypographyStyled)({
    fontSize: '16px'
});

export const TertiaryTypography18Styled = styled(TertiaryTypographyStyled)(({ theme }) => ({
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
        fontSize: '16px'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px'
    }
}));

export const TertiaryTypography20Styled = styled(TertiaryTypographyStyled)(({ theme }) => ({
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
        fontSize: '18px'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px'
    }
}));

export const SecondaryWhiteTypography12Styled = styled(SecondaryWhiteTypographyStyled)({
    fontSize: '12px'
});

export const SecondaryWhiteTypography14Styled = styled(SecondaryWhiteTypographyStyled)({
    fontSize: '14px'
});

export const SecondaryWhiteTypography16Styled = styled(SecondaryWhiteTypographyStyled)({
    fontSize: '16px'
});

export const SecondaryWhiteTypography18Styled = styled(SecondaryWhiteTypographyStyled)({
    fontSize: '18px'
});

export const SecondaryWhiteTypography20Styled = styled(SecondaryWhiteTypographyStyled)(({ theme }) => ({
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
        fontSize: '18px'
    }
}));

export const YellowTypography18Styled = styled(YellowTypographyStyled)(() => ({
    fontSize: '18px'
})); 

export const YellowTypography64Styled = styled(YellowTypographyStyled)({
    fontSize: '64px'
})
