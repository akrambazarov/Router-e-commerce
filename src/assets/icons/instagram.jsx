export const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg 
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M17.5 6.51l.01-.011"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);