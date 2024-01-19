import StarRatings from 'react-star-ratings'

import { theme } from '../../styles/theme'
import { Rating } from './styles'

export function MovieRating({ rate, maxRate = 5, size = 'sm', ...rest }) {
  const sizes = {
    sm: {
      dimension: '0.75rem',
      spacing: '0.25rem',
    },
    md: {
      dimension: '1.25rem',
      spacing: '0.625rem',
    },
  }

  const { dimension, spacing } = sizes[size] ?? sizes['sm']

  return (
    <Rating {...rest}>
      <StarRatings
        rating={rate}
        numberOfStars={maxRate}
        starRatedColor={theme.colors.pink}
        starEmptyColor="transparent"
        starDimension={dimension}
        starSpacing={spacing}
      />
    </Rating>
  )
}
