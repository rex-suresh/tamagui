import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="M18 21a8 8 0 0 0-16 0" stroke={color} />
      <_Circle cx="10" cy="8" r="5" stroke={color} />
      <Path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'UsersRound'

export const UsersRound = memo<IconProps>(themed(Icon))