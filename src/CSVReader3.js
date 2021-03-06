import React, { Component } from 'react'
import { CSVReader } from 'react-papaparse'

export class CSVReader3 extends Component {
  handleOnDrop = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }
/*
  handleComplete = (results, file) => {
    console.log("Parsing complete:", results, file);
  }
  */

  render() {
    return (
      <>
        <h5>Drag ( No Click ) Upload</h5>
        <CSVReader
          onDrop={this.handleOnDrop}
          onError={this.handleOnError}
          noClick
          config={{
              complete: (results, file) => {
                console.log("Parsing complete:", results, file);
              }
          }}
        >
          <span>Drop CSV file here to upload.</span>
        </CSVReader>
      </>
    )
  }
}