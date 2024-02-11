type PaginationLabels = { actualPage: number; perPage: number; pages: number };
export const PaginationLabels = ({
  actualPage,
  perPage,
  pages,
}: PaginationLabels) => (
  <p className="text-sm text-gray-700 ">
    Showing <PaginationLabel label={String(actualPage)} /> to{' '}
    <PaginationLabel label={String(perPage)} /> of{' '}
    <PaginationLabel label={String(pages)} /> Pages
  </p>
);

type PaginationLabel = {
  label: string;
};
const PaginationLabel = ({ label }: PaginationLabel) => (
  <span className="font-semibold text-gray-900">{label}</span>
);
