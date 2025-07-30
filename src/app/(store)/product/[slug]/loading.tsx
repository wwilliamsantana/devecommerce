
import { Skeleton } from "@/components/sckeleton";


export default function LoadingSlug() {

  new Promise(resolve => setTimeout(resolve, 2000))
  return (
    <div className="grid grid-cols-3 gap-6 items-center mt-12">
      <Skeleton className="h-[700px] col-span-2" />
      <Skeleton className="h-[500px] " />
    </div>
  );
}
