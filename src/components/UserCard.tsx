import type { IUsers } from '../types/Users';

interface UserCardProps {
  user: IUsers;
  onClick: (user: IUsers) => void;
}

export const UserCard = ({ user, onClick }: UserCardProps) => {
  return (
    <div
      onClick={() => onClick(user)}
      className="bg-white h-64 flex flex-col items-center p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer hover:scale-105"
    >
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
        {user.username.charAt(0).toUpperCase()}
      </div>
      <h1 className="text-xl text-gray-800 font-bold mt-6 text-center line-clamp-1">
        {user.username}
      </h1>
      <p className="text-sm text-gray-600 mt-2 text-center line-clamp-1">
        {user.email}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        {user.address.city}
      </p>
    </div>
  );
};