export interface Collection<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export as namespace Api
