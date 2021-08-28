export interface InitialType {
  name: string
  color: string
}

export interface RawProp {
  name: string
  url: string
}

export interface Ability {
  ability: RawProp
}

export interface Sprites {
  other?: {
    'official-artwork'?: {
      front_default?: string
    }
  }
}

export interface Stat {
  base_stat: number
  stat: RawProp
}

export interface Type {
  type: RawProp
}

export interface Pokemon {
  id: number
  name: string
  weight: number
  height: number
  abilities: Ability[]
  species: RawProp
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  url: string
}

export as namespace Model
