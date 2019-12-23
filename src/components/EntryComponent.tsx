import React from 'react'
import Entry from '../models/Entry'
import { Typography, makeStyles, Theme, createStyles } from '@material-ui/core'
import EntryNavigationComponent from './EntryNavigationComponent'

interface Props {
  entry: Entry
  nextEntry?: Entry
}

interface State {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 640,
      margin: '0 auto',
      padding: theme.spacing(1.8),
    },
    headlines: {
      padding: theme.spacing(2.4, 0.9),
    },
    text: {},
    trans: {
      padding: theme.spacing(1.8, 0.9),
      borderTop: '3px solid #eee',
    },
    sentence: {
      padding: theme.spacing(1.2, 0),
    },
    transEn: {
      padding: theme.spacing(0.6, 0),
    },
    transJa: {
      padding: theme.spacing(0.6, 0),
    },
    navigation: {
      padding: theme.spacing(1.8, 0),
    },
  }),
)

export default function(props: Props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.headlines}>
        <Typography
          color="primary"
          variant="subtitle2"
          component="p"
          gutterBottom
        >
          {props.entry.series}
        </Typography>
        <Typography variant="h5" component="h1" gutterBottom>
          {props.entry.title.en}
        </Typography>
        <Typography
          color="textSecondary"
          variant="subtitle1"
          component="h2"
          gutterBottom
        >
          {props.entry.title.ja}
        </Typography>
      </div>

      <div className={classes.text}>
        {props.entry.text.length === 0 && (
          <div className={classes.trans}>
            <Typography color="textSecondary">
              まだデータは入力されていません。
            </Typography>
          </div>
        )}
        {props.entry.text.map((paragraph, index) => {
          return (
            <React.Fragment key={index}>
              <div className={classes.trans}>
                {paragraph.map(sentence => {
                  return (
                    <div className={classes.sentence}>
                      <Typography lang="ja" className={classes.transJa}>
                        {sentence.ja}
                      </Typography>

                      <Typography
                        lang="en"
                        className={classes.transEn}
                        color="textSecondary"
                      >
                        {sentence.en}
                      </Typography>
                    </div>
                  )
                })}
              </div>
            </React.Fragment>
          )
        })}

        <div className={classes.navigation}>
          <EntryNavigationComponent nextEntry={props.nextEntry} />
        </div>
      </div>
    </div>
  )
}
