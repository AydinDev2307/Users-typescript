interface DetailItemProps {
  label: string;
  value: string;
}

export const DetailItem = ({ label, value }: DetailItemProps) => (
  <div className="flex flex-col sm:flex-row sm:justify-between py-2">
    <span className="font-semibold text-gray-600 mb-1 sm:mb-0">{label}:</span>
    <span className="text-gray-800 sm:text-right">{value}</span>
  </div>
);