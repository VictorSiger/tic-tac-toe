import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './square.css'

export default function Square({value, onSquareClick}) {

  return (
    <button className="btn btn-light btn-outline-secondary btn-lg botaoTic"
    onClick={onSquareClick}>
        {value}
        </button>
  )
}
