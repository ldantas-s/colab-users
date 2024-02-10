import { LabelInfo } from './LabelInfo';

type DetailsInfo = {
  profilePhoto: string;
  name: string;
  username: string;
  registeredAt: string;
  cell: string;
  email: string;
  address: string;
};

export const DetailsInfo = ({
  profilePhoto,
  name,
  username,
  registeredAt,
  cell,
  email,
  address,
}: DetailsInfo) => {
  return (
    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
      <div className="lg:w-1/2 lg:flex-row flex flex-col gap-4 w-full px-6">
        <img
          src={profilePhoto}
          alt=""
          className="rounded-full w-3/6 self-center"
        />
        <div className="lg:flex flex-col text-center justify-center">
          <h2
            data-testid="user-detail_name"
            className="title-font font-semibold text-gray-900 tracking-widest text-xl"
          >
            {name}
          </h2>
          <p
            data-testid="user-detail_username"
            className="text-gray-500 italic"
          >
            @{username}
          </p>
          <p
            className="text-gray-500 italic text-xs mt-2"
            data-testid="user-detail_registered"
          >
            {registeredAt}
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <LabelInfo label="Email" info={email} testId="user-detail_email" />
        <LabelInfo label="Phone" info={cell} testId="user-detail_cell" />
        <LabelInfo
          label="Address"
          info={address}
          testId="user-detail_location"
        />
      </div>
    </div>
  );
};
