import { Box, Grid, IconButton, styled } from "@mui/material"
import { contactsList, getSocialMediaList } from "src/constants/staticInfo";
import { ContactTypeEnum } from "src/types/enums/contact-type.enum";
import { WhiteTypography16Styled } from "src/views/styled/typography";

const BoxStyled = styled(Box)(() => ({
  padding: '18px',
  width: '100vw',
  paddingInline: '1.5rem',
  marginTop: '100px'
}));

const GridStyled = styled(Box)(() => ({
  width: '100%',
  flexDirection: 'column',
  marginLeft: 20,
  display: 'flex',
  gap: 15

  // [theme.breakpoints.down('md')]: {
  //   marginLeft: 30
  // }
}));

type Props = {
  menuOpenHandler: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuContent = ({ menuOpenHandler }: Props) => {

  return (
    <>
      <BoxStyled
        role='presentation'
      >
        <GridStyled>
          <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
           
          </Grid>
          <Grid mt={3}>
          </Grid>
          <Grid mt={3}>
          </Grid>

          <Grid mt={3}>
          </Grid>
        </GridStyled>
        <Grid sx={{ display: 'flex', gap: 2, flexDirection: 'column', marginTop: 10 }}>
          {contactsList.map((el, index) => (
            <Grid key={index} sx={{ display: 'flex' }}>
              {el.type === ContactTypeEnum.PHONE ? (
                <a href={`tel:${el.value}`} style={{ textDecoration: 'none' }}>
                  <WhiteTypography16Styled>{el.value}</WhiteTypography16Styled>
                </a>
              ) : el.type === ContactTypeEnum.EMAIL ? (
                <a href={`mailto:${el.value}`} style={{ textDecoration: 'none' }}>
                  <WhiteTypography16Styled>{el.value}</WhiteTypography16Styled>
                </a>
              ) : (
                <WhiteTypography16Styled>{el.value}</WhiteTypography16Styled>
              )}
            </Grid>
          ))}
        </Grid>
        <Grid sx={{ display: 'flex', gap: '1.5rem', marginTop: 10 }}>
          {getSocialMediaList().map((socialMedia, index) => (
            <Grid key={index}>
              <IconButton sx={{ padding: 0 }} onClick={() => window.open(socialMedia.url)}>
                <img src={socialMedia.iconSrc} alt='socialLink' />
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </BoxStyled>
    </>
  )
}

export default MenuContent