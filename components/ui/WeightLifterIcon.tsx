import * as React from 'react';
import Svg, { Path, Line, Circle, SvgProps } from 'react-native-svg';

interface WeightLifterIconProps extends SvgProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function WeightLifterIcon({
  width = 24,
  height = 24,
  color = 'currentColor',
  ...rest
}: WeightLifterIconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      {...rest}
    >
      {/* Głowa */}
      <Circle cx='12' cy='4' r='1.5' />

      {/* Tułów */}
      <Path d='M12 5.5 L12 10' />

      {/* Ręce ze sztangą */}
      <Path d='M7 9 L17 9' />
      <Path d='M6 8 L8 9 L6 10' />
      <Path d='M18 8 L16 9 L18 10' />

      {/* Nogi */}
      <Path d='M10 14 L12 10 L14 14' />
      <Path d='M10 19 L12 14 L14 19' />
    </Svg>
  );
}
