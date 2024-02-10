import { useNavigate } from 'react-router-dom';
import { Arrow } from './icons/Arrow';

type NavigateLink = {
  label: string;
  path: string;
};

export const NavigateLink = ({ label, path }: NavigateLink) => {
  const navigate = useNavigate();

  return (
    <a
      onClick={() => navigate(path)}
      className="mt-3 text-indigo-500 inline-flex items-center self-end cursor-pointer"
    >
      <Arrow isBackward />
      {label}
    </a>
  );
};
