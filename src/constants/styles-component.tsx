import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const loginPageStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageGrid: {
      minHeight: '100vh',
      verticalAlign: 'middle'
    },
    innerGrid: {
      width: '600px',
      maxWidth: '80vw'
    },
    loginGrid: {
      marginTop: '0.25em'
    },
    signupGrid: {
      marginTop: '2em',
      marginBottom: '2em'
    },
    logo: {
      width: '500px',
      maxWidth: '80vw',
      height: 'auto'
    },
    loadProgress: {
      margin: theme.spacing(3)
    },
    snackbarMargin: {
      margin: theme.spacing(1),
      width: '100%'
    }
  })
);

const signupPageStyles = makeStyles(
  createStyles({
    pageGrid: {
      minHeight: '100vh',
      verticalAlign: 'middle'
    },
    innerGrid: {
      width: '600px',
      maxWidth: '80vw'
    },
    createUserGrid: {
      marginTop: '0.25em'
    },
    headerText: {
      marginTop: '1.5em'
    }
  })
);

const alertSnackbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    },
  })
);

export { loginPageStyles, signupPageStyles, alertSnackbarStyles };