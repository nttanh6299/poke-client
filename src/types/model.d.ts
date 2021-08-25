export interface ICollection<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export as namespace Model
