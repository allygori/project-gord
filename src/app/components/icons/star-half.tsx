type Props = {
  className?: string;
};

const StarHalf = ({ className = "" }: Props) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      version="1.2"
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6zm8.9 5v-10.5l1.7 3.8c.1.3.5.5.8.6l4.2.5-3.1 2.8c-.3.2-.4.6-.3 1 0 .2.5 2.2.8 4.1l-3.6-2.1c-.2-.2-.3-.2-.5-.2z" />
    </svg>
  );
};

export default StarHalf;
