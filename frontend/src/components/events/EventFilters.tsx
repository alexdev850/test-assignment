import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';

interface EventFiltersProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  dateFrom: string;
  setDateFrom: (val: string) => void;
  dateTo: string;
  setDateTo: (val: string) => void;
}

export function EventFilters({
  searchQuery,
  setSearchQuery,
  dateFrom,
  setDateFrom,
  dateTo,
  setDateTo,
}: EventFiltersProps) {
  const handleClear = () => {
    setSearchQuery('');
    setDateFrom('');
    setDateTo('');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 items-end">
      <div className="space-y-2">
        <Label htmlFor="search">Search by title</Label>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            placeholder="Event name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="dateFrom">From Date</Label>
        <Input
          id="dateFrom"
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dateTo">To Date</Label>
        <Input
          id="dateTo"
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />
      </div>
      <Button variant="outline" onClick={handleClear}>
        Clear Filters
      </Button>
    </div>
  );
}
