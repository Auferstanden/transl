import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import RateReviewIcon from '@material-ui/icons/RateReview'
import Entry from '../models/Entry'
import { Avatar } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 600,
      margin: '0 auto',
    },
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {},
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
  }),
)

interface Props {
  entries: Entry[]
}

export default function BottomAppBar(props: Props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />

      <List className={classes.list}>
        {props.entries.map(({ id, series, title }: Entry) => (
          <div
            key={id}
            onClick={() => {
              location.href = `#!/entries/${id}`
            }}
          >
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <RateReviewIcon />
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={title.en}
                secondary={`${series}: ${title.ja}`}
              />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  )
}
