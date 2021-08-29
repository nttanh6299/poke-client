interface Pokemon {
  pokemon: Model.RawProp
}

export interface Type {
  pokemon: Pokemon[]
}

export as namespace Extend
