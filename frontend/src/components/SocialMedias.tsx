import { Facebook } from './icons/Facebook';
import { Instagram } from './icons/Instagram';
import { LinkedIn } from './icons/LinkedIn';
import { X } from './icons/X';

const socialMediasList = [
  { id: 1, Component: Facebook, url: '#facebook' },
  { id: 2, Component: X, url: '#x' },
  { id: 3, Component: Instagram, url: '#instagram' },
  { id: 4, Component: LinkedIn, url: 'linkedin' },
];

export const SocialMedias = () => {
  return (
    <span className="flex gap-4 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      {socialMediasList.map(({ Component, id, url }) => (
        <a
          key={id}
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          className="text-gray-500 cursor-pointer"
        >
          <Component />
        </a>
      ))}
    </span>
  );
};
