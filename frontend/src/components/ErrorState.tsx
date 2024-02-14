type ErrorState = {
  title: string;
  content: string;
};
export const ErrorState = ({ title, content }: ErrorState) => {
  return (
    <div className="h-[28rem] flex flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 md:text-4xl">
        {title}
      </h1>
      <p className="text-gray-400">{content}</p>
    </div>
  );
};
