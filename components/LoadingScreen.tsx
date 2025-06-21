import { Skeleton } from "@/components/ui/skeleton";

const LoadingScreen = () => {
  return (
    <div className="w-full h-full p-4 md:p-8 lg:p-12 bg-[#12212e] space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center container mx-auto">
        <Skeleton className="h-10 w-32 bg-gray-200/20" />
        <div className="hidden md:flex space-x-4">
          <Skeleton className="h-8 w-20 bg-gray-200/20" />
          <Skeleton className="h-8 w-20 bg-gray-200/20" />
          <Skeleton className="h-8 w-20 bg-gray-200/20" />
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="space-y-4 container mx-auto text-center pt-16">
        <Skeleton className="h-16 w-3/4 mx-auto bg-gray-200/20" />
        <Skeleton className="h-8 w-1/2 mx-auto bg-gray-200/20" />
        <Skeleton className="h-12 w-48 mx-auto mt-4 bg-gray-200/20" />
      </div>

      {/* Cards Section Skeleton */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
        <div className="space-y-3">
          <Skeleton className="h-48 w-full bg-gray-200/20" />
          <Skeleton className="h-6 w-3/4 bg-gray-200/20" />
          <Skeleton className="h-6 w-1/2 bg-gray-200/20" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-48 w-full bg-gray-200/20" />
          <Skeleton className="h-6 w-3/4 bg-gray-200/20" />
          <Skeleton className="h-6 w-1/2 bg-gray-200/20" />
        </div>
        <div className="space-y-3">
          <Skeleton className="h-48 w-full bg-gray-200/20" />
          <Skeleton className="h-6 w-3/4 bg-gray-200/20" />
          <Skeleton className="h-6 w-1/2 bg-gray-200/20" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 