// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", move);

//     return () => {
//       window.removeEventListener("mousemove", move);
//     };
//   }, []);

//   return (
//     <motion.div
//       animate={{
//         x: position.x - 40,
//         y: position.y - 40,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 400,
//         damping: 30,
//       }}
//       className="fixed top-0 left-0 w-20 h-20 rounded-full border border-white/30 backdrop-blur-md z-[9999] pointer-events-none flex items-center justify-center text-xs uppercase tracking-[2px]"
//     >
//       View
//     </motion.div>
//   );
// }