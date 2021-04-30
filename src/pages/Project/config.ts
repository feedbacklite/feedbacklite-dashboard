export interface colors {
  [key: string]: string
}

export const sideBarList: Array<string> = [
  'all',
  'issue',
  'idea',
  'other',
  'archive',
]

export const sideBarColors: colors = {
  all: 'primary-normal',
  issue: 'error',
  idea: 'warning',
  other: 'grey-700',
  archive: 'grey-500',
}
