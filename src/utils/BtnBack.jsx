import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
const Backbtn = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white  hover:text-black bg-black sm:px-3 px-2 py-2 text-sm xl:text-base rounded hover:bg-white border"
        onClick={() => navigate(-1)}
      >
        👈 BACK
      </motion.button>
    </div>
  );
};
export default Backbtn;
