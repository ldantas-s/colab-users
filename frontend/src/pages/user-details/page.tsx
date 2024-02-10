import { useLoaderData } from 'react-router-dom';
import { UserLoaderReturn } from './loader';

export const UserDetails = () => {
  const data = useLoaderData() as UserLoaderReturn;

  if (!data.user) return <h1>empty</h1>;

  return (
    <div>
      <img src={data.user.profilePhoto} alt="Profile Photo" />
      <h1 data-testid="user-detail_name">{data.user.name}</h1>
      <p data-testid="user-detail_username">@{data.user.username}</p>
      <p data-testid="user-detail_email">{data.user.email}</p>
      <p data-testid="user-detail_cell">{data.user.cell}</p>
      <p data-testid="user-detail_timezone">{data.user.timezone}</p>
      <p data-testid="user-detail_registered">
        {data.user.getRegisteredTime()}
      </p>
    </div>
  );
};
