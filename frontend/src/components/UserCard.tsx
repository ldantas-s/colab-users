import { useNavigate } from 'react-router-dom';
import { User } from '../entities/User';
import { Profile } from './icons/Profile';

type UserCard = {
  user: User;
};

export const UserCard = ({ user }: UserCard) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <article
      data-testid="user-card"
      onClick={onClick}
      className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer hover:scale-[1.02] active:scale-100"
    >
      <div className="h-full flex items-center border-indigo-100 border p-4 rounded-lg">
        <img
          src={user.profilePhoto}
          alt="Profile Photo"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
        />
        <div className="flex-grow">
          <h2
            data-testid="user-card_name"
            className="text-gray-900 title-font font-medium text-xl"
          >
            {user.name}
          </h2>
          <p
            data-testid="user-card_state"
            className="text-gray-500 italic"
          >{`${user.state}, ${user.nationality}`}</p>
        </div>
      </div>
    </article>
  );
};

export const UserCardSkeleton = () => (
  <div className="p-2 lg:w-1/3 md:w-1/2 w-full h-28">
    <div className="h-full flex items-center border-indigo-100 border p-4 rounded-lg">
      <Profile />
      <div>
        <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  </div>
);
