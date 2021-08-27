export enum Color {
  Green = '#72AA58',
  Yellow = '#F5CD3E',
  Orange = '#F5A63A',
  Red = '#E15859',
}

export default function getBarColor(value: number): string {
  if (value >= 75) return Color.Green
  if (value >= 50) return Color.Yellow
  if (value >= 25) return Color.Orange
  return Color.Red
}
