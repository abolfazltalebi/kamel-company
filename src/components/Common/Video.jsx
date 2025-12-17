import { BiPlay } from "react-icons/bi";
import coverVideo from "../../assets/images/covervideo.webp";
import { motion } from "framer-motion";

export default function Video() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container space-y-5"
    >
      <div className="relative">
        <img loading="lazy" src={coverVideo} alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="size-14 text-white bg-orangee rounded-full flex items-center justify-center">
            <BiPlay />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
