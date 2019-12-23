import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    offset: theme.mixins.toolbar,
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }),
)

interface Props {
  title: string
}

export default function SearchAppBar(props: Props) {
  const classes = useStyles()

  document.title = props.title

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Go to home"
            href="#!/"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.offset} />
    </div>
  )
}
