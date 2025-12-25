import { useState, useMemo } from 'react';
import type { IUsers } from '../types/Users';
import { useUsers } from '../hooks/useHooks';
import { SearchBar } from '../components/SearchBar';
import { UserCard } from '../components/UserCard';
import { UserDetail } from '../components/UserDetail';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedUser, setSelectedUser] = useState<IUsers | null>(null);

  const { data: users, isLoading, isError } = useUsers();

  const filteredAndSortedUsers = useMemo(() => {
    if (!users) return [];

    return users
      .filter((user) =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const comparison = a.username.localeCompare(b.username);
        return sortOrder === 'asc' ? comparison : -comparison;
      });
  }, [users, searchQuery, sortOrder]);

  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold text-red-600">Error loading users</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortOrder={sortOrder}
        onSortToggle={toggleSort}
      />

      <div className="w-[90%] max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedUsers.map((user) => (
            <UserCard key={user.id} user={user} onClick={setSelectedUser} />
          ))}
        </div>

        {filteredAndSortedUsers.length === 0 && (
          <div className="text-center text-gray-500 text-xl mt-20">
            No users found matching your search
          </div>
        )}
      </div>

      <UserDetail user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  );
};