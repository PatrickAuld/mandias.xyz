
import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"
import { Box, Paper, Divider } from "@material-ui/core"
import Image from 'next/image'
import Head from 'next/head'

const useStyles = makeStyles(theme => ({
  heroBox: {
    display: "grid",
    height: "100%",
  },
  heroContainer: {
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  heroImage: {
    backgroundImage: "url('/splash-image.jpg')",
    position: "relative",
    height: "800px",
    maxHeight: "100vh",
    width: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroTitle: {
    textAlign: "right",
    paddingRight: "8px",
  },
  heroText: {
    position: "absolute",
    bottom: "5%",
    paddingLeft: "5%",
    color: theme.palette.background.paper,
  },
  aboutBox: {
    padding: "8px"
  },
  aboutContainer: {
    backgroundColor: theme.palette.background.paper,
    height: "auto"
  },
  aboutHeadshot: {
    borderRadius: "50%",
    width: "100%",
    maxWidth: "500px",
    height: "auto"
  },
  contactBox: {
    backgroundColor: theme.palette.background.default,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

function MainFooter(props: { classes: { footer: string } }) {
  return (
    <footer className={props.classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Mandias
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        See Systems
      </Typography>
      <Copyright />
    </footer>
  )
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mandias.xyz/">
        Mandias
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  )
}

function ContactDetail(props: { linkHref: string, title: string, link: string }) {
  return (
    <Box minWidth="220px" minHeight="80px">
        <Typography variant="h5" align="center" color="textPrimary">
          {props.title}
        </Typography>
        <Divider variant="middle" />
        <Typography align="center" color="textSecondary">
          <Link href={props.linkHref}>{props.link}</Link>
      </Typography>
    </Box>
  )
}

{/* Main splash screen and motto */ }
function Hero(props: any) {
  return (
    <Box className={props.classes.heroBox}>
      <Container className={props.classes.heroContainer}>
        <Box className={props.classes.heroImage}>
          <Link color="primary" href="https://mandias.xyz/">
            <Typography
              className={props.classes.heroTitle}
              variant="h6"
              color="textSecondary"
              noWrap
            >
              Mandias
              </Typography>
          </Link>
          <Box className={props.classes.heroText}>
          <Typography

            component="h2"
            variant="h2"
            align="left"
            gutterBottom
          >
            Leaders work in Systems
            </Typography>
            <Typography

              component="h4"
              variant="h4"
              align="left"
              gutterBottom
            >
              Coaching and Mentoring for Engineering Leaders
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

{/* Site and offering description */ }
function AboutPatrick(props: any) {
  return (
    <Box className={props.classes.aboutBox}>
      <Container>
        <Grid
          container
          className={props.classes.aboutContainer}
          spacing={2}
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Box>
              <Image
                src="/headshot.jpg"
                alt="Patrick Profile"
                className={props.classes.aboutHeadshot}
                width={500}
                height={500}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Patrick is a Software Architect, Manager, Developer, and Entrepreneur.
              <p />
              He has been the first employee at startups and responsible for dozens of individuals and teams in public companies.
              <p />
              These experiences lead him to recognize the commonality in realizing an idea and the strong interactions between companies' organizational and technical aspects.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

function ServiceDetail(props: { title: string, description: string, classes: { serviceCard: any } }) {
  return (
    <Paper
      className={props.classes.serviceCard}
    >
      <Typography
        variant="h4"
        align="center"
        color="textPrimary"
      >
        {props.title}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        paragraph
      >
        {props.description}
      </Typography>
    </Paper>
  )
}

{/* Contact info 3 box */ }
function ContactInfo(props: any) {
  return (
    <Box className={props.classes.contactBox}>
      <Container>
        <Grid container
          spacing={2}
          justify="center"
        >
          <Grid item>
            <ContactDetail
              title="Email"
              link="patrick@patrickauld.com"
              linkHref="mailto:patrick+mandias@patrickauld.com"
            />
          </Grid>
          <Grid item>
            <ContactDetail
              title="LinkedIn"
              link="/in/PatrickAuld"
              linkHref="https://linkedin.com/in/patrickauld"
            />
          </Grid>
          <Grid item>
            <ContactDetail
              title="Twitter"
              link="@PatrickAuld"
              linkHref="https://twitter.com/patrickauld"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default function HomePage() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <React.StrictMode>
        <CssBaseline />
        <Head>
          <title>Mandias Consulting</title>
          <meta name="Description" content="Mentoring and coaching for engineering leadership." />
        </Head>
        <main>
          <Hero classes={classes} />
          <AboutPatrick classes={classes} />
          <ContactInfo classes={classes} />
        </main>
        <MainFooter classes={classes} />
      </React.StrictMode>
    </React.Fragment>
  )
}