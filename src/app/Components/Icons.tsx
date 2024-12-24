type dimensions = {
  height: number;
  width: number;
};
export const MedicineIcon = ({ height, width }: dimensions) => (
  <svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_2003_2024)">
      <path
        d="M7.00065 13.6673L13.6673 7.00065C13.9788 6.69537 14.2267 6.33136 14.3967 5.92967C14.5667 5.52798 14.6553 5.09658 14.6575 4.66042C14.6597 4.22426 14.5754 3.79198 14.4095 3.3886C14.2436 2.98521 13.9994 2.61871 13.691 2.3103C13.3826 2.00188 13.0161 1.75766 12.6127 1.59177C12.2093 1.42587 11.7771 1.34159 11.3409 1.34379C10.9047 1.34599 10.4733 1.43464 10.0716 1.6046C9.66995 1.77456 9.30594 2.02247 9.00065 2.33399L2.33399 9.00065C2.02247 9.30594 1.77456 9.66995 1.6046 10.0716C1.43464 10.4733 1.34599 10.9047 1.34379 11.3409C1.34159 11.7771 1.42587 12.2093 1.59177 12.6127C1.75766 13.0161 2.00188 13.3826 2.3103 13.691C2.61871 13.9994 2.98521 14.2436 3.3886 14.4095C3.79198 14.5754 4.22426 14.6597 4.66042 14.6575C5.09658 14.6553 5.52798 14.5667 5.92967 14.3967C6.33136 14.2267 6.69537 13.9788 7.00065 13.6673Z"
        stroke="#3A643B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.66797 5.6665L10.3346 10.3332"
        stroke="#3A643B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2003_2024">
        <rect width={width} height={height} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const EduIcon = ({ height, width }: dimensions) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <path
      d="M21 10V16M21 10L11 5L1 10L11 15L21 10Z"
      stroke="#3A643B"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 11.9985V16.9985C8 19.9985 14 19.9985 17 16.9985V11.9985"
      stroke="#3A643B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const LangIcon = ({ height, width }: dimensions) => (
  <svg width={width} height={height} viewBox="0 0 18 16" fill="none">
    <rect width="18" height="16" fill="url(#pattern0_2003_2034)" />
    <defs>
      <pattern
        id="pattern0_2003_2034"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use transform="matrix(0.00390625 0 0 0.00439453 0 -0.0625)" />
      </pattern>
    </defs>
  </svg>
);
export const CommentIcon = ({ height, width }: dimensions) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill={"none"}>
    <path
      d="M8 13.5H16M8 8.5H12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
export const CloseIcon = ({ height, width }: dimensions) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill={"none"}>
    <path
      d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
