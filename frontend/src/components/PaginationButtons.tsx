import { PaginationButton } from './PaginationButton';
import { BackwardArrow } from './icons/BackwardArrow';
import { ForwardArrow } from './icons/ForwardArrow';

type PaginationButtons = {
  showBackwardButton: boolean;
  showForwardButton: boolean;
  backwardClick: () => void;
  forwardClick: () => void;
  styleClasses?: string;
};
export const PaginationButtons = ({
  showBackwardButton,
  showForwardButton,
  backwardClick,
  forwardClick,
  styleClasses,
}: PaginationButtons) => (
  <div className={`inline-flex mt-2 xs:mt-0 ${styleClasses}`}>
    {showBackwardButton && (
      <PaginationButton
        label="Prev"
        backIcon={<BackwardArrow />}
        onClick={backwardClick}
        styleClasses="rounded-s"
      />
    )}
    {showForwardButton && (
      <PaginationButton
        label="Next"
        frontIcon={<ForwardArrow />}
        onClick={forwardClick}
        styleClasses="rounded-e"
      />
    )}
  </div>
);
