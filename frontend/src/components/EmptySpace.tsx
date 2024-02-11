type EmptySpace = {
  title: string;
};
export const EmptySpace = ({ title }: EmptySpace) => (
  <div className="h-[28rem] flex flex-col items-center justify-center">
    <h1
      data-testid="user-card__empty-space"
      className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
    >
      {title}
    </h1>
    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-4">
      Try to reload the page!
    </p>
  </div>
);
