
import { Skeleton } from "@/components/sckeleton";
import ResultComponent from "./result-component";
import { Suspense } from "react";

export default function LoadingSearch() {

  return (
    <div className="flex flex-col gap-4 ">
      <Suspense fallback={null}>
        <ResultComponent />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
      </div>
    </div>
  );
}
