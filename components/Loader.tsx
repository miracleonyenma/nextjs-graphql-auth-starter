import LoaderIcon from "@/components/Icon/Loader";
import { AnimatePresence, motion } from "framer-motion";

const Loader: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="overflow-clip"
          initial={{ width: 0, scale: 0 }}
          animate={{ width: loading ? "auto" : 0, scale: loading ? 1 : 0 }}
          exit={{
            width: 0,
            scale: 0,
          }}
        >
          <LoaderIcon className="icon animate-spin" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
