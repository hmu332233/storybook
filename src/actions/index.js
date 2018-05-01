export const types = {
  INCREMENT: 'INCREMENT'
}

export function increment(diff) {
  return {
    type: types.INCREMENT,
    diff: diff
  }
}
