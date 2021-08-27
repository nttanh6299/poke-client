import React from 'react'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

interface ITypographyProps {
  variant?: Variant
  fontWeight?: 300 | 400 | 500 | 600 | 700
  fontSize?: number
  color?: string
  uppercase?: boolean
}

const Typography: React.FC<ITypographyProps> = ({
  variant = 'p',
  fontWeight,
  fontSize,
  color,
  uppercase,
  children,
}) => {
  const Component = variant as any
  const style: React.CSSProperties = {
    fontWeight,
    fontSize: `${fontSize}rem`,
    color,
    textTransform: uppercase ? 'uppercase' : 'initial',
  }

  return <Component style={style}>{children}</Component>
}

export default Typography
