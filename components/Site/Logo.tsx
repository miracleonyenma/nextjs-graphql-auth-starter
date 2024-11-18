import StarterIcon from "@/components/Icon/Starter";

const SiteLogo = () => {
  return (
    <figure className="flex items-center gap-1 text-green-600">
      <StarterIcon className="icon text-payred-06 h-12 w-12" />
      <figcaption className="mt-1 text-2xl font-extrabold">Pancea</figcaption>
    </figure>
  );
};
export default SiteLogo;
