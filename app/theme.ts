export const colors = {
  // Main brand colors
  primary: {
    50: 'bg-blue-50',
    100: 'bg-blue-100',
    500: 'bg-blue-500',
    600: 'bg-blue-600',
    700: 'bg-blue-700',
    textPrimary: 'text-blue-600',
    textLight: 'text-blue-500',
    textDark: 'text-blue-700',
    border: 'border-blue-200',
    ring: 'ring-blue-500/20'
  },
  secondary: {
    50: 'bg-slate-50',
    100: 'bg-slate-100',
    200: 'bg-slate-200',
    700: 'text-slate-700',
    800: 'text-slate-800',
    900: 'text-slate-900'
  },
  neutral: {
    white: 'bg-white',
    textPrimary: 'text-slate-900',
    textSecondary: 'text-slate-600',
    textMuted: 'text-slate-500',
    border: 'border-slate-200'
  },
  
  // Specific Tailwind CSS classes for components
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-700",
    accent: "text-navy",
    light: "text-white",
    hoverPrimary: "hover:text-blue-600",
    hoverLight: "hover:text-white",
    mobile: "text-slate-700",
    mobileHover: "hover:text-blue-600",
    gradientFrom: "from-blue-400",
    gradientTo: "to-cyan-300",
  },
  bg: {
    primary: "bg-blue-600",
    primaryHover: "hover:bg-blue-700",
    secondary: "bg-gray-100",
    section: "bg-white",
    hero: "#0a192f", // This is the hex code for navy
    overlayGradient: "from-transparent to-black/70",
    headerScrolled: "bg-white/90 shadow-lg backdrop-blur-lg",
    headerTransparent: "bg-transparent",
    mobileMenu: "bg-white shadow-lg",
    mobileHover: "hover:bg-blue-50",
    buttonGradientFrom: "from-blue-600",
    buttonGradientTo: "to-cyan-500",
    eventUpcoming: "bg-blue-500",
    eventOngoing: "bg-red-500",
    eventEnded: "bg-gray-500",
  },
  border: {
    default: "border border-gray-200",
    accent: "border-blue-500",
  },
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg shadow-blue-900/10',
    xl: 'shadow-xl shadow-blue-900/15',
    card: "shadow-lg shadow-slate-200/50",
    button: "shadow-lg shadow-blue-600/40",
    buttonHover: "hover:shadow-2xl hover:shadow-cyan-500/50",
  },
  gradient: {
    primary: "bg-gradient-to-r from-blue-600 to-cyan-500",
    heading: "bg-gradient-to-r from-blue-400 to-cyan-300",
    primary_br: 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800',
    accent: 'bg-gradient-to-r from-blue-500 to-blue-600',
    text: 'bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent'
  },
  status: {
    upcoming: { bg: "bg-blue-500", text: "text-white" },
    ongoing: { bg: "bg-red-500", text: "text-white animate-pulse" },
    ended: { bg: "bg-gray-500", text: "text-white" },
  },
  
};

export const shadows = {
  // Standard Tailwind shadow classes
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  none: 'shadow-none',

  // Custom shadows with specific colors/opacities
  primary: 'shadow-lg shadow-blue-900/10',
  strong: 'shadow-xl shadow-blue-900/15',
  card: 'shadow-lg shadow-slate-200/50',
  button: 'shadow-lg shadow-blue-600/40', // shadow mặc định cho button
  buttonHover: 'hover:shadow-2xl hover:shadow-cyan-500/50', // shadow khi hover button
};
