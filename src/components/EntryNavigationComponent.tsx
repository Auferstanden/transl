import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Entry from '@/models/Entry'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
)

interface Props {
  nextEntry?: Entry
}

export default function FloatingActionButtons(props: Props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {(props.nextEntry !== undefined && (
        <Fab
          variant="extended"
          onClick={() => {
            if (props.nextEntry !== undefined) {
              location.href = `#!/entries/${props.nextEntry.id}`
            }
          }}
        >
          <ArrowForwardIcon className={classes.extendedIcon} />
          {props.nextEntry.series}: {props.nextEntry.title.en}
        </Fab>
      )) || (
        <Fab
          variant="extended"
          onClick={() => {
            location.href = `#!/`
          }}
        >
          <ArrowForwardIcon className={classes.extendedIcon} />
          一覧に戻る
        </Fab>
      )}
    </div>
  )
}
