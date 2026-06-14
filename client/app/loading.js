import LoadingScreen from "@/components/LoadingScreen";

// Next.js automatically shows this while a route segment (and its data) is loading.
// Since real progress isn't available here, the loader loops smoothly.
export default function Loading() {
  return <LoadingScreen loop duration={2000} />;
}
