type Props = {
  data?: Record<string, unknown>;
  className?: string;
};

const Delimiter = ({ data, className = "" }: Props) => {
  return (
    <div className={`px-4 ${className}`}>
      <span className="my-8 block w-full border-b border-dashed border-brand-95" />
    </div>
  );
};

export default Delimiter;
