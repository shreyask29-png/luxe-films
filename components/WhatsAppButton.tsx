export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917338101850"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-14
        h-14
        rounded-full
        bg-green-500
        flex
        items-center
        justify-center
        text-white
        text-2xl
        shadow-lg
        hover:scale-110
        transition
        duration-300
      "
    >
      💬
    </a>
  );
}