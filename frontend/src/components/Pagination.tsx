import { PaginationButtons } from './PaginationButtons';
import { PaginationLabels } from './PaginationLabels';

type Pagination = {
  actualPage: number;
  perPage: number;
  pages: number;
  backwardClick: () => void;
  forwardClick: () => void;
};

export const Pagination = ({
  actualPage,
  perPage,
  pages,
  backwardClick,
  forwardClick,
}: Pagination) => {
  const showForwardButton = actualPage < pages;
  const showBackwardButton = actualPage > 1;

  return (
    <>
      <div className="flex flex-col items-center">
        <PaginationLabels
          actualPage={actualPage}
          pages={pages}
          perPage={perPage}
        />
        <PaginationButtons
          backwardClick={backwardClick}
          forwardClick={forwardClick}
          showBackwardButton={showBackwardButton}
          showForwardButton={showForwardButton}
        />
      </div>
    </>
  );
};
