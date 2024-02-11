type PaginationButton = {
  frontIcon?: React.ReactElement;
  backIcon?: React.ReactElement;
  label: string;
  onClick: () => void;
  styleClasses?: string;
  testId?: string;
};

export const PaginationButton = ({
  frontIcon,
  backIcon,
  label,
  onClick,
  styleClasses,
  testId,
}: PaginationButton) => (
  <button
    data-testid={testId}
    onClick={onClick}
    className={`flex items-center justify-center px-4 h-10 text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-900 ${styleClasses}`}
  >
    {backIcon} {label} {frontIcon}
  </button>
);
