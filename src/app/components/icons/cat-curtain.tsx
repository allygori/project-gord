type Props = {
  className?: string;
};

const CatCurtain = ({ className = "" }: Props) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      version="1.1"
      viewBox="0 0 128 128"
    >
      <g id="g1" transform="translate(-165.032 -180.782)">
        <path
          id="path1"
          stroke="currentColor"
          strokeWidth=".250184"
          // stroke-width=".373"
          d="m177.053 303.268-.563-.398V197.821h-1.234c-1.173 0-1.27.053-1.946 1.06-1.698 2.528-5.2 2.907-7.13.771-1.822-2.014-1.423-5.266.828-6.755 2.147-1.422 5.362-.641 6.41 1.556.395.828.472.866 1.743.866h1.33l.005-1.563c.008-2.08.642-3.45 2.02-4.362l1.065-.705h13.779c15.402 0 14.647-.084 16.08 1.795.602.79.713 1.194.79 2.877l.089 1.958h37.421l.09-1.958c.076-1.683.187-2.088.79-2.877 1.431-1.878.694-1.795 15.936-1.795 12.908 0 13.686.026 14.595.477 1.513.752 2.268 2.122 2.379 4.317l.093 1.836h1.318c1.23 0 1.34-.05 1.631-.755.647-1.563 2.722-2.667 4.549-2.422 1.42.19 2.904 1.262 3.47 2.506 1.582 3.485-1.303 7.037-5.133 6.319-1.014-.19-2.481-1.367-3.032-2.432-.33-.64-.498-.714-1.613-.714h-1.245v52.366c0 44.834-.051 52.435-.355 52.851-.55.75-2.25.568-4.605-.495-1.09-.493-2.31-.896-2.71-.896-.398 0-1.566.408-2.595.905-2.676 1.296-4.406 1.301-7.098.023-1.074-.51-2.299-.928-2.722-.928-.422 0-1.612.418-2.644.928-1.596.788-2.126.927-3.54.927-1.415 0-1.945-.14-3.54-.927-1.032-.51-2.129-.928-2.437-.928-1.321 0-1.529-.357-1.529-2.635v-2.118h-37.528v1.984c0 2.208-.296 2.77-1.463 2.77-.373 0-1.519.407-2.547.904-1.535.743-2.163.91-3.513.928-1.418.02-1.903-.106-3.522-.905-1.035-.512-2.252-.928-2.715-.928-.462 0-1.68.416-2.715.928-1.59.785-2.128.927-3.523.927s-1.934-.142-3.523-.927c-1.058-.523-2.25-.928-2.732-.928-.47 0-1.65.386-2.624.858-2.21 1.07-3.563 1.309-4.335.763zm5.69-10.33c.001-3.713.103-6.273.26-6.568.367-.684 1.605-.642 2.105.072.326.465.39 1.534.392 6.567l.002 6.011 1.56.75c.86.413 1.646.788 1.75.835.102.046.187-19.006.187-42.338v-42.421l.609-.399c.747-.49 1.543-.158 1.905.794.147.388.238 16.592.238 42.496v41.87l1.75-.793 1.75-.794v-36.914c.002-28.376.072-36.984.302-37.215.387-.387 1.515-.387 1.902 0 .23.23.3 8.851.3 37.277 0 31 .055 36.978.34 36.978.187 0 .973.337 1.747.75.773.413 1.465.75 1.536.75.071 0 .13-11.756.13-26.126 0-23.417.04-26.167.393-26.52.502-.501 1.213-.501 1.716 0 .352.353.393 3.103.393 26.52 0 14.37.053 26.127.117 26.127.065 0 .783-.338 1.595-.75.812-.414 1.604-.751 1.759-.751.208 0 .281-13.95.281-53.3v-53.301l-.614-.615c-.49-.49-.87-.614-1.876-.614h-1.262v17.588c0 13.346-.073 17.66-.3 17.888-.388.387-1.515.387-1.902 0-.228-.227-.3-4.542-.3-17.888v-17.588h-3.503v10.742c0 6.12-.101 11.008-.236 11.362-.313.824-1.128 1.06-1.903.553l-.613-.402V191.316h-3.502v5.863c0 3.225-.106 6.143-.236 6.484-.313.823-1.129 1.06-1.903.553l-.613-.402v-12.498h-3.502v38.598c0 34.53-.042 38.656-.39 39.154-.5.714-1.738.756-2.104.072-.175-.328-.259-12.976-.259-39.154v-38.67h-1.25c-.918 0-1.385.134-1.752.5-.497.498-.5.835-.5 54.646v54.145l1.75-.793 1.75-.794zm19.066-52.886c-.194-.194-.3-1.195-.3-2.827 0-2.728.16-3.127 1.25-3.127 1.085 0 1.252.404 1.252 3.034 0 1.88-.09 2.524-.394 2.827-.466.467-1.387.514-1.808.093zm52.238 34.456V248.37l.614-.402c.774-.507 1.59-.27 1.902.553.143.374.236 10.846.236 26.353v25.733l1.75-.793 1.75-.793.001-36.915c.001-28.376.071-36.984.302-37.215.165-.165.593-.3.95-.3.358 0 .786.135.951.3.231.23.3 8.851.3 37.277 0 31 .055 36.978.34 36.978.188 0 .973.337 1.747.75.774.413 1.465.75 1.536.75.072 0 .13-19.08.13-42.4v-42.4l.626-.41c.58-.38.671-.38 1.25 0l.626.41v42.421c0 23.332.09 42.384.2 42.338a253 253 0 0 0 1.877-.827l1.676-.744v-6.274c0-6.707.03-6.874 1.25-6.874 1.222 0 1.252.164 1.252 6.93 0 4.526.08 6.33.281 6.33.155 0 .947.337 1.76.75.812.413 1.53.75 1.596.75.065 0 .09-24.383.055-54.186l-.065-54.187-.59-.478c-.402-.325-.982-.479-1.814-.479h-1.223v38.854c0 29.886-.07 38.923-.3 39.154-.387.387-1.515.387-1.902 0-.23-.231-.3-9.268-.3-39.154v-38.854h-3.753v6.371c0 6.043-.025 6.385-.484 6.63-.679.363-1.167.323-1.625-.134-.336-.336-.393-1.294-.393-6.63v-6.237h-3.752v22.528l-.616.28c-.492.224-.741.197-1.25-.136l-.636-.417V191.316H256.8v17.333c0 15.281-.047 17.397-.39 17.888-.5.713-1.738.756-2.104.072-.171-.32-.259-6.37-.259-17.888v-17.405h-1.25c-.918 0-1.385.134-1.752.5-.497.498-.5.83-.494 53.853l.007 53.352 1.557.784c.857.431 1.642.797 1.745.813.103.016.188-11.734.188-26.11zm.393-34.549c-.303-.303-.393-.948-.393-2.827 0-2.63.167-3.034 1.251-3.034 1.091 0 1.251.4 1.251 3.127 0 1.632-.106 2.633-.3 2.827-.421.421-1.342.374-1.809-.093zm-6.647 52.307v-1.877h-7.825c-6.678 0-7.907-.057-8.382-.39l-.556-.389v-87.007l.556-.39c.475-.332 1.705-.389 8.392-.389h7.836l-.073-1.939-.073-1.939H210.39l-.073 1.94-.073 1.938h7.836c6.687 0 7.917.057 8.392.39l.556.389v87.007l-.556.39c-.475.332-1.704.39-8.381.39h-7.826v3.752h37.528zm-23.518-46.16v-41.53h-14.01v83.061h14.01zm23.518 0v-41.53h-14.26v83.061h14.26zM170.84 197.81c.607-.583.62-1.829.024-2.486-.564-.624-2.028-.673-2.673-.09-.6.544-.612 2.125-.02 2.642.906.788 1.803.766 2.67-.066zm119.046.069c.6-.527.566-1.93-.062-2.559-1.12-1.12-3.086-.329-3.086 1.241 0 1.7 1.838 2.468 3.148 1.318z"
        />
      </g>
    </svg>
  );
};

export default CatCurtain;