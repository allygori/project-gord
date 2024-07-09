type Props = {
  className?: string;
};

const SewingMachine = ({ className = "" }: Props) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      className={className}
    >
      <g id="orgami" />
      <g id="embroidery" />
      <g id="craftsman" />
      <g id="pottery" />
      <g id="sculpt" />
      <g id="yarn" />
      <g id="scissors" />
      <g id="sewing_machine">
        <g>
          <path d="M58,13h-1.1c-0.5-2.5-2.4-4.4-4.9-4.9V4c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1v4H18V4c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1    v4h-2c-1.7,0-3,1.3-3,3v5H4c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h3v5c0,1.7,1.3,3,3,3v3c0,0.6,0.4,1,1,1h1v3c0,0.6,0.4,1,1,1h3v5    c0,0.6,0.4,1,1,1s1-0.4,1-1v-5h3c0.6,0,1-0.4,1-1v-3h1c0.6,0,1-0.4,1-1v-3h8.5c4.1,0,7.5,3.4,7.5,7.5S36.6,51,32.5,51H10    c-1.7,0-3,1.3-3,3v6c0,0.6,0.4,1,1,1h48c0.6,0,1-0.4,1-1v-2.9c0-1.6-0.6-3.2-1.8-4.3C54.4,52,54,51,54,49.9V37.1    c0-1.1,0.4-2.1,1.2-2.9c0.9-0.9,1.5-2,1.7-3.2H58c1.7,0,3-1.3,3-3V16C61,14.3,59.7,13,58,13z M48,5h2v3h-2V5z M14,5h2v3h-2V5z     M5,26v-8h2v8H5z M20,42h-6v-2h6V42z M22,38h-1h-8h-1v-2h10V38z M53.8,32.8c-1.2,1.2-1.8,2.7-1.8,4.3v12.8c0,1.6,0.6,3.2,1.8,4.3    C54.6,55,55,56,55,57.1V59H9v-5c0-0.6,0.4-1,1-1h22.5c5.2,0,9.5-4.3,9.5-9.5S37.7,34,32.5,34H23H11h-1c-0.6,0-1-0.4-1-1v-6V17v-6    c0-0.6,0.4-1,1-1h3h4h30h3.9c2.3,0,4.1,1.8,4.1,4.1v15.8C55,31,54.6,32,53.8,32.8z M59,28c0,0.6-0.4,1-1,1h-1V15h1    c0.6,0,1,0.4,1,1V28z" />
          <path d="M51,13H39c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S51.6,13,51,13z" />
          <path d="M51,17H39c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S51.6,17,51,17z" />
          <path d="M51,21H39c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S51.6,21,51,21z" />
          <path d="M18,13c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S21.3,13,18,13z M18,23c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S20.2,23,18,23z    " />
        </g>
      </g>
      <g id="knitting" />
      <g id="stationary" />
      <g id="stapler" />
      <g id="compass" />
      <g id="cutter" />
      <g id="pin_tool" />
      <g id="wood_chisel" />
      <g id="adhesive_tape" />
      <g id="sewing_clothes" />
      <g id="anvil" />
      <g id="glue_gun" />
      <g id="roller_brush" />
    </svg>
  );
};

export default SewingMachine;