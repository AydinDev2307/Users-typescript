import { X } from 'lucide-react';
import type { IUsers } from '../types/Users';
import { DetailItem } from './DetailItem';

interface UserDetailProps {
  user: IUsers | null;
  onClose: () => void;
}

export const UserDetail = ({ user, onClose }: UserDetailProps) => {
  if (!user) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-3xl flex justify-between items-center">
          <h2 className="text-3xl font-bold">{user.username}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-5xl font-bold">
              {user.username.charAt(0).toUpperCase()}
            </div>
          </div>

          <div className="space-y-4">
            <DetailItem label="Email" value={user.email} />
            <DetailItem label="Phone" value={user.phone} />
            <DetailItem label="Website" value={user.website} />
          </div>

          <div className="border-t pt-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Address</h3>
            <DetailItem label="Street" value={`${user.address.street}, ${user.address.suite}`} />
            <DetailItem label="City" value={user.address.city} />
            <DetailItem label="Zipcode" value={user.address.zipcode} />
            <DetailItem label="Coordinates" value={`Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`} />
          </div>

          <div className="border-t pt-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Company</h3>
            <DetailItem label="Name" value={user.company.name} />
            <DetailItem label="Catch Phrase" value={user.company.catchPhrase} />
            <DetailItem label="Business" value={user.company.bs} />
          </div>
        </div>
      </div>
    </div>
  );
};
