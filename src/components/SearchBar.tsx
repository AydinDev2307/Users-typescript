import { Search, ArrowUpAZ, ArrowDownAZ } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortOrder: 'asc' | 'desc';
  onSortToggle: () => void;
}

export const SearchBar = ({ searchQuery, onSearchChange, sortOrder, onSortToggle }: SearchBarProps) => {
  return (
    <div className="w-full bg-white shadow-md sticky top-0 z-10">
      <div className="w-[90%] max-w-7xl mx-auto h-20 flex items-center justify-between gap-4 px-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
          <input
            className="w-full bg-gray-100 rounded-full h-14 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 font-semibold text-lg"
            type="text"
            placeholder="Search by username, name or email..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <button
          onClick={onSortToggle}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 h-14 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          {sortOrder === 'asc' ? (
            <>
              <ArrowUpAZ size={20} />
              A-Z
            </>
          ) : (
            <>
              <ArrowDownAZ size={20} />
              Z-A
            </>
          )}
        </button>
      </div>
    </div>
  );
};