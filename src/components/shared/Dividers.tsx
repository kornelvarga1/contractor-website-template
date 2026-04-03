// Wave — bottom of a dark section transitioning to white below.
export const WaveDivider = () => (
  <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden z-20" aria-hidden="true">
    <svg
      viewBox="0 0 1440 48"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute bottom-0 w-full h-full"
    >
      <path
        d="M0,24 C360,48 720,0 1080,24 C1260,36 1380,16 1440,24 L1440,48 L0,48 Z"
        fill="white"
      />
    </svg>
  </div>
);

// Wave — top of a dark section transitioning from white above.
export const WaveDividerTop = () => (
  <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden z-20" aria-hidden="true">
    <svg
      viewBox="0 0 1440 48"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute top-0 w-full h-full"
    >
      <path
        d="M0,24 C360,0 720,48 1080,24 C1260,12 1380,32 1440,24 L1440,0 L0,0 Z"
        fill="white"
      />
    </svg>
  </div>
);
