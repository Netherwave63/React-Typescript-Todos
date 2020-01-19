import { action } from 'typesafe-actions'

// constants
export enum actionTypes {
  ADD = 'ADD',
  DELETE = 'DELETE',
  TOGGLE = 'TOGGLE'
}

// action creators
export const actions = {
  add: (text: string) => action(actionTypes.ADD, text),
  delete: (index: number) => action(actionTypes.DELETE, index),
  toggle: (index: number) => action(actionTypes.TOGGLE, index)
} 

