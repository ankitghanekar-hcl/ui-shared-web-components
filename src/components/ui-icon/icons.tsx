import { h } from '@stencil/core';

export const icons = {
  search: {
    viewBox: '0 0 24 24',
    content: (
      <path
        fill="currentColor"
        d="M21.668 20.108l-3.59-3.562c2.803-3.588 2.508-8.698-.713-11.917A8.948 8.948 0 0010.998 2c-2.41 0-4.671.934-6.368 2.629A8.937 8.937 0 002 10.992c0 2.408.934 4.669 2.63 6.364a8.948 8.948 0 006.368 2.628 8.893 8.893 0 005.532-1.916l3.565 3.612c.22.221.492.32.786.32.295 0 .566-.123.787-.32.443-.417.443-1.13 0-1.572zm-3.884-9.116a6.723 6.723 0 01-1.992 4.792 6.777 6.777 0 01-4.794 1.99 6.773 6.773 0 01-4.795-1.99 6.769 6.769 0 01-1.991-4.792c0-1.818.712-3.514 1.991-4.791a6.777 6.777 0 014.795-1.99c1.819 0 3.516.711 4.794 1.99a6.729 6.729 0 011.992 4.791z"
      />
    ),
  },
  bag: {
    viewBox: '0 0 21 21',
    content: (
      <g>
        <path
          fill="currentColor"
          d="m 1.573013,0.95981479 17.995268,0 0,2.45390021 1.289871,0.7865065 -0.03146,14.4087985 c -0.214975,0.747788 -0.472995,1.289367 -1.761774,1.541553 l -16.9885398,0 C 1.0964915,20.037816 0.37578471,19.618757 0.31460259,18.420259 l 0,-14.282958 1.22695011,-0.6292052 z"
        />
        <circle r="1.2898706" cy="7.3147874" cx="6.04037" fill="#fff" />
        <circle cx="14.975083" cy="7.3147874" r="1.2898706" fill="#fff" />
        <path
          d="m 6.6381147,8.4473566 c -0.029178,3.6032694 2.146418,4.6204984 4.0326393,4.6375324 1.86741,0.01686 3.659503,-1.470167 3.769505,-4.700453 l 1.25841,-0.125841 c -0.09959,4.565509 -2.467711,6.106906 -5.128022,6.10329 C 6.8231278,14.320164 5.3929038,11.946652 5.4111646,8.2271347 Z"
          fill="#fff"
        />
        <path d="m 2.9258041,2.1867649 15.2267659,0 -1.22695,1.2584104 0.471903,0.5977449 -13.7481329,0 0.5033641,-0.5977449 z" fill="#fff" />
      </g>
    ),
  },
  heart: {
    viewBox: '0 0 24 24',
    content: (
      <path
        fill="currentColor"
        d="M12 20.273a.85.85 0 01-.52-.177l-.442-.341c-4.064-3.13-6.517-5.018-7.945-7.539-1.369-2.409-1.204-4.31-.827-5.482.46-1.423 1.496-2.569 2.918-3.225A5.605 5.605 0 017.544 3c1.764 0 3.394.748 4.456 1.98C13.06 3.748 14.69 3 16.455 3c.834 0 1.628.17 2.36.507 1.422.657 2.458 1.801 2.918 3.226.379 1.17.542 3.072-.827 5.482-1.429 2.52-3.885 4.412-7.954 7.546l-.432.335a.856.856 0 01-.52.177zM7.544 4.69c-.587 0-1.14.118-1.647.351-.987.456-1.703 1.24-2.015 2.21-.394 1.218-.155 2.648.689 4.134 1.251 2.21 3.45 3.91 7.427 6.975 3.978-3.063 6.176-4.766 7.428-6.974.844-1.486 1.082-2.917.69-4.135-.314-.969-1.03-1.754-2.017-2.21a3.898 3.898 0 00-1.645-.35c-1.594 0-3.075.88-3.686 2.19a.849.849 0 01-1.54 0c-.61-1.31-2.09-2.19-3.684-2.19z"
      />
    ),
  },
  heartFilled: {
    viewBox: '0 0 24 24',
    content: (
      <path
        fill="currentColor"
        d="M12 20.429a.878.878 0 01-.52-.168l-.442-.325c-4.064-2.976-6.517-4.773-7.945-7.17-1.369-2.291-1.204-4.1-.827-5.215.46-1.353 1.496-2.443 2.918-3.067A5.85 5.85 0 017.544 4c1.764 0 3.394.711 4.456 1.883C13.06 4.711 14.69 4 16.455 4c.835 0 1.628.162 2.36.483 1.422.624 2.458 1.713 2.918 3.067.379 1.113.542 2.923-.827 5.215-1.429 2.397-3.885 4.196-7.954 7.176l-.432.32a.884.884 0 01-.52.168z"
      />
    ),
  },
  avatarUser: {
    viewBox: '0 0 23.8 29.5',
    content: (
      <g>
        <path
          d="m 0,29.48381 c 0,0 0.39974,-11.36425 4.04061,-14.39467 4.90355,4.60886 9.16066,4.7208 14.83661,-10e-6 3.65566,3.10787 4.86136,14.39468 4.86136,14.39468 z"
          fill="currentColor"
        />
        <ellipse cx="11.553617" cy="7.8760314" rx="7.9549513" ry="7.8760333" fill="currentColor" />
      </g>
    ),
  },
  profile: {
    viewBox: '0 0 24 24',
    content: (
      <path
        fill="currentColor"
        d="M20.667 21.024a.978.978 0 01-.977.976H4.977A.98.98 0 014 21.024c0-4.58 3.73-8.292 8.333-8.292s8.333 3.712 8.333 8.292zm-8.334-7.317c-4.06 0-7.352 3.276-7.352 7.317 0-.002 14.71 0 14.71 0-.005-4.041-3.296-7.317-7.358-7.317zm0-1.95c-2.707 0-4.901-2.185-4.901-4.879C7.432 4.184 9.626 2 12.333 2c2.708 0 4.902 2.184 4.902 4.878s-2.194 4.878-4.902 4.878zm0-.976c2.166 0 3.922-1.748 3.922-3.903 0-2.155-1.756-3.902-3.922-3.902-2.165 0-3.921 1.747-3.921 3.902 0 2.155 1.756 3.902 3.921 3.902z"
      />
    ),
  },
  home: {
    viewBox: '0 0 24 24',
    content: (
      <g>
        <path
          fill="currentColor"
          d="M19.354 9.45v11.27c.001-.13-.002.099-.002.043 0 .053.025-.074.002-.026a.172.172 0 00-.015.053c-.008.05.041-.061.008-.024a.208.208 0 00-.026.045c-.02.045.056-.05.015-.02a.197.197 0 00-.037.036c-.02.026.072-.05-.002 0l-.012.007c-.031.016-.031.016 0 .001l.024-.01-.039.013c-.098.024.076.004-.029.006H5.65c-.28 0-.556.002-.835 0h-.045c-.076 0 .02-.004.026.004-.002-.004-.045-.012-.054-.014-.077-.018.027.004.023.01-.001.001-.04-.024-.046-.027-.072-.034.046.056 0-.001a.292.292 0 01-.037-.04c.01-.012.045.076.016.018a.687.687 0 01-.026-.047c.015-.008.025.087.01.023a.93.93 0 01-.015-.053c.012-.002.004.092.004.026V9.43c-.067.119-.135.236-.203.354L5.962 8.68l.989-.726c.621-.458 1.245-.915 1.866-1.374l2.174-1.6c.4-.293.814-.576 1.204-.886a.35.35 0 00.018-.012h-.414l1 .737c.712.523 1.424 1.045 2.135 1.57l1.969 1.45c.256.19.512.378.77.567.61.451 1.221.902 1.835 1.353.016.013.034.025.05.04.175.127.467.034.563-.148.113-.213.04-.425-.148-.562a604.21 604.21 0 01-1.691-1.247c-.267-.197-.532-.392-.798-.586l-1.86-1.369c-.729-.534-1.456-1.07-2.184-1.607-.402-.296-.797-.609-1.21-.89a.396.396 0 00-.432-.012l-1.456 1.07c-.902.664-1.805 1.327-2.706 1.992a1276.537 1276.537 0 00-3.582 2.64.446.446 0 00-.205.366c-.002.05 0 .098 0 .148v9.86c0 .42-.01.843 0 1.263a.96.96 0 00.948.945H19.037c.24 0 .47-.002.685-.14a.968.968 0 00.453-.826V9.44c0-.215-.189-.42-.41-.41-.225.02-.411.19-.411.42z"
        />
        <path
          fill="currentColor"
          d="M19.557 9.806l1.314.97.191.14c.174.127.466.035.562-.147.113-.214.037-.425-.148-.562l-1.314-.97-.191-.141c-.174-.127-.466-.035-.562.148-.112.215-.036.426.148.562zM2.937 10.917L4.916 9.46c.195-.144.392-.287.586-.433.173-.128.278-.361.148-.562-.11-.171-.377-.283-.562-.148l-2.093 1.54c-.158.116-.316.23-.472.348-.172.127-.277.361-.148.562.111.172.378.284.562.149zM14.05 13.809V20.34c0 .302-.012.607 0 .909v.014l.41-.41H9.56l.41.41V13.785c0-.066.01.026-.006.026a.727.727 0 01.02-.078c.019-.08-.042.07 0 0a.95.95 0 01.042-.067c.014.01-.062.066-.015.023.004-.004.056-.056.057-.053.01.014-.083.049-.008.01.007-.002.057-.033.057-.032-.016.007-.032.015-.049.02a.336.336 0 01.051-.016l.053-.012c-.064.008-.073.008-.026.007h3.719c.089.001-.012.004-.012-.005a.74.74 0 01.078.021c.074.018-.07-.045 0 0l.067.041c-.004.007-.075-.072-.023-.015a.651.651 0 01.054.058c-.007.004-.056-.089-.017-.02.002.003.041.066.04.069-.018.006-.027-.086-.013-.025l.02.078a.459.459 0 00-.007-.056v.05c.004.215.184.42.41.41.217-.01.417-.18.41-.41a1.04 1.04 0 00-1.024-1.024c-.094-.002-.19 0-.285 0h-3.089c-.1 0-.2-.002-.302 0-.548.01-.98.425-1.023.968-.015.182-.002.369-.002.551v4.746c0 .726-.01 1.452 0 2.175v.033c0 .221.189.41.41.41h4.901c.222 0 .41-.189.41-.41v-6.532c0-.301.009-.605 0-.908v-.015c0-.215-.188-.42-.41-.41a.426.426 0 00-.406.416z"
        />
      </g>
    ),
  },
  close: {
    viewBox: '-0.5 -0.5 13 13',
    content: (
      <g>
        <path fill="currentColor" d="M0.6,12c-0.1,0-0.3-0.1-0.4-0.2c-0.2-0.2-0.2-0.6,0-0.8L11.1,0.2c0.2-0.2,0.6-0.2,0.8,0s0.2,0.6,0,0.8 L0.9,11.8C0.8,11.9,0.7,12,0.6,12z" />
        <path fill="currentColor" d="M11.4,12c-0.1,0-0.3-0.1-0.4-0.2L0.2,0.9c-0.2-0.2-0.2-0.6,0-0.8s0.6-0.2,0.8,0l10.9,10.9 c0.2,0.2,0.2,0.6,0,0.8C11.7,11.9,11.6,12,11.4,12z" />
      </g>
    ),
  },
};