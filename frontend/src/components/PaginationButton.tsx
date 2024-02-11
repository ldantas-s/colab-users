type PaginationButton = {
  frontIcon?: React.ReactElement;
  backIcon?: React.ReactElement;
  label: string;
  onClick: () => void;
  styleClasses?: string;
};

export const PaginationButton = ({
  frontIcon,
  backIcon,
  label,
  onClick,
  styleClasses,
}: PaginationButton) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 ${styleClasses}`}
  >
    {backIcon} {label} {frontIcon}
  </button>
);
