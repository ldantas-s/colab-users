type LabelInfo = {
  label: string;
  info: string;
  testId: string;
};

export const LabelInfo = ({ label, info, testId }: LabelInfo) => {
  return (
    <>
      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4 uppercase">
        {label}
      </h2>
      <p data-testid={testId} className="leading-relaxed">
        {info}
      </p>
    </>
  );
};
