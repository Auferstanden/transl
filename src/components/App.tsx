import React, { useState, useEffect } from 'react'
import entries from '../data/entries.json'
import { makeStyles, Theme, createStyles } from '@material-ui/core'
import Entry from '@/models/Entry'
import HeaderComponent from './HeaderComponent'
import EntryListComponent from './EntryListComponent'
import { HashRouter, Route } from 'react-router-dom'
import EntryComponent from './EntryComponent'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: 'Roboto, arial, sans-serif',
    },
  }),
)

export default function() {
  const classes = useStyles()
  const [title, setTitle] = useState('')

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <HashRouter hashType="hashbang">
      <div className={classes.root}>
        <HeaderComponent title={title} />

        <Route
          path="/entries/:id"
          render={({ match }: any) => {
            let entry = undefined

            for (let i in entries) {
              if (match.params.id == entries[i].id) {
                entry = entries[i]
                setTitle(`${entry.series}: ${entry.title.en}`)
              }
            }

            if (entry !== undefined) {
              let nextEntry = undefined

              for (let i in entries) {
                if (entry.next == entries[i].id) {
                  nextEntry = entries[i]
                }
              }

              return <EntryComponent entry={entry} nextEntry={nextEntry} />
            }

            return null
          }}
        />

        <Route
          path="/"
          exact
          render={() => {
            setTitle('翻訳済みテキスト')

            return <EntryListComponent entries={entries as Array<Entry>} />
          }}
        />
      </div>
    </HashRouter>
  )
}
