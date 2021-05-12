import React from 'react'
import profilePic from '../assets/profilePicture.jfif'
import { makeStyles } from '@material-ui/core/styles';

import Portifolio from '../components/Portifolio'
import { Box, Grid, Paper, Typography } from '@material-ui/core';
// import Icon from '../components/Icon';
import Background from '../components/Background';
import SocialIcon from '../components/SocialIcon'

// import {ReactComponent as Gmail} from '../assets/icons/gmail.svg'
// import {ReactComponent as Github} from '../assets/icons/github.svg'
// import {ReactComponent as Linkedin} from '../assets/icons/linkedin.svg'
import { Email, GitHub, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center'
  },
  profilePicture: {
    height: '200px',
    borderRadius: '50%',
    border: `4px solid ${theme.palette.primary.main}`,
  },
  profileTitle: {
    color: theme.palette.primary.main
  },
  profileComponent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  profileText: {
    // width: '50'
  },
  portifolioTitle: {
    color: theme.palette.primary.main,
  },
  socialIcon: {
    color: theme.palette.primary.main,
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.profileComponent}>

        <img className={classes.profilePicture} src={profilePic} />
        <h1 className={classes.profileTitle}>Chrystian de Matos</h1>
        <Grid justify="center" container spacing={2}>

          <Grid item>
            <SocialIcon
              iconComponent={<Email className={classes.socialIcon} fontSize="large" />}
              link='mailto:chrystiandematos@gmail.com'
              tooltip='chrystiandematos@gmail.com'
            />
          </Grid>
          <Grid item>
            <SocialIcon
              iconComponent={<GitHub className={classes.socialIcon} fontSize="large" />}
              link='https://github.com/CristianDrift'
              tooltip='CristianDrift'
            />
          </Grid>
          <Grid item>
            <SocialIcon
              iconComponent={<LinkedIn className={classes.socialIcon} fontSize="large" />}
              link='https://www.linkedin.com/in/chrystian-de-matos/'
              tooltip='Chrystian de Matos'
            />
          </Grid>

        </Grid>
        <Box mx={[0, 24, 36, 48]}>
          <Paper className={classes.profileText} elevation={3}>
            <Box m={2}>
              <Typography>Programador C# autodidata, apaixonado por tecnologia, atualmente fazendo projetos de programação em grupos e individuais. Buscando experiência na área, portanto estou disposto a aprender e me esforçar ao máximo para conquistar a vaga.</Typography>
            </Box>
          </Paper>
        </Box>
        <Background />
      </Box>

      <h1>Portifolio</h1>

      <Portifolio />

    </React.Fragment>

  )
}
