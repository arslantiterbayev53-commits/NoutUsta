import {
  Laptop,
  BatteryCharging,
  Droplets,
  Cpu,
  Flame,
  Keyboard,
  HardDrive,
  Settings,
  Plug,
  Wrench,
  Power,
  Wifi,
  Shield,
  MemoryStick,
  Mouse,
  Monitor,
  Headphones,
  Camera,
  Volume2,
  Usb,
  Briefcase,
} from "lucide-react";

export const ICONS = {
  Laptop,
  BatteryCharging,
  Droplets,
  Cpu,
  Flame,
  Keyboard,
  HardDrive,
  Settings,
  Plug,
  Wrench,
  Power,
  Wifi,
  Shield,
  MemoryStick,
  Mouse,
  Monitor,
  Headphones,
  Camera,
  Volume2,
  Usb,
  Briefcase,
};

export const ICON_NAMES = Object.keys(ICONS);

const ServiceIcon = ({ name, ...props }) => {
  const Icon = ICONS[name] || Laptop;
  return <Icon {...props} />;
};

export default ServiceIcon;
