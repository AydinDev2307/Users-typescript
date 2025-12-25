import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../API/UserAPI';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};