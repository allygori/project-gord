type Props = {
  className?: string;
};

const Quality = ({ className = "" }: Props) => {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      className={className}
    >
      <rect fill="none" height="256" width="256" />
      <rect
        fill="none"
        height="176"
        rx="8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        width="176"
        x="40"
        y="40"
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        x1="176"
        x2="176"
        y1="24"
        y2="56"
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        x1="80"
        x2="80"
        y1="24"
        y2="56"
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        x1="40"
        x2="216"
        y1="88"
        y2="88"
      />
      <polyline
        fill="none"
        points="164 128 117.3 172 92 148"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </svg>
  );
};

export default Quality;
