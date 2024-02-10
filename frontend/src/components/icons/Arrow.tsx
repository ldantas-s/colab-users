type Arrow = {
  isBackward?: boolean;
};
export const Arrow = ({ isBackward = false }: Arrow) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`w-4 h-4 ml-2 ${isBackward ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  );
};
