import { motion } from "framer-motion";

const ArrowRigths = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(39, 39, 42, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(39, 39, 42, 1)",
    },
  };
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_20_28)">
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          d="M18.3536 10.6464C18.5488 10.8417 18.5488 11.1583 18.3536 11.3536L15.1716 14.5355C14.9763 14.7308 14.6597 14.7308 14.4645 14.5355C14.2692 14.3403 14.2692 14.0237 14.4645 13.8284L17.2929 11L14.4645 8.17157C14.2692 7.97631 14.2692 7.65973 14.4645 7.46447C14.6597 7.2692 14.9763 7.2692 15.1716 7.46447L18.3536 10.6464ZM-2 10.5L18 10.5V11.5L-2 11.5V10.5Z"
          fill="#F4F4F5"
        />
      </g>
      <defs>
        <clipPath id="clip0_20_28">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="matrix(1 0 0 -1 0.14209 20.1421)"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default ArrowRigths;
