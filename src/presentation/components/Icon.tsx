import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";

import FGApple from '@/assets/icons/apple.svg';
import FGGaming from '@/assets/icons/gaming.svg';
import FGGraph from '@/assets/icons/graph.svg';
import FGGoogle from '@/assets/icons/google.svg';
import FGHome from '@/assets/icons/home.svg';
import FGNotifications from '@/assets/icons/notification.svg';
import FGProfile from '@/assets/icons/profile.svg';
import FGUsers from '@/assets/icons/users.svg';

const IconSets = {
  Ionicons,
};

export type IconSetsKeys = keyof typeof IconSets;

type ExpoVectorIcons = keyof typeof Ionicons.glyphMap

type SvgIconElement = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type IconType =
  | ExpoVectorIcons
  | keyof typeof CustomIcons
  | SvgIconElement;

interface IconProps {
  type?: IconSetsKeys;
  name: IconType;
  size?: number;
  color?: string;
  customSvg?: string;
  fill?: string;
}

const CustomIcons = {
  FGApple,
  FGGaming,
  FGGraph,
  FGGoogle,
  FGHome,
  FGNotifications,
  FGProfile,
  FGUsers,
}

export function Icon({
  type = "Ionicons",
  name,
  size = 24,
  color = "black",
  customSvg,
  fill,
}: IconProps) {
  try {
    const existsCustomIcon = Object.keys(CustomIcons).includes(name as string)

    if (existsCustomIcon) {
      const Icon = CustomIcons[name as keyof typeof CustomIcons];
      return (
        <Icon width={size} height={size} color={color} fill={fill} />
      )
    }

    if (customSvg) {
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d={customSvg} fill={color} />
        </Svg>
      );
    }

    const IconComponent = IconSets[type];
    return <IconComponent name={name as ExpoVectorIcons} size={size} color={color} />;
  } catch (error) {
    return <Ionicons name="stop" size={size} color={color} />;
  }
}
