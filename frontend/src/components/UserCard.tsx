import { useNavigate } from 'react-router-dom';
import { User } from '../entities/User';

type UserCard = {
  user: User;
};

export const UserCard = ({ user }: UserCard) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/user/${user.id}`);
  };

  return (
    <li data-testid="user-card" onClick={onClick}>
      <img src={user.profilePhoto} alt="Profile Photo" />
      <p data-testid="user-card_name">{user.name}</p>
      <p data-testid="user-card_state">{`${user.state}, ${user.nationality}`}</p>
    </li>
  );
};
