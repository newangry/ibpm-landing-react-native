import Image from "next/image";

const Logo = () => (
  <span
    style={{
      gap: 8,
      display: "flex",
      cursor: "pointer",
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <Image
      src="/logo.png"
      alt="iBPM logo"
      height={58}
      width={58}
      style={{ borderRadius: 4 }}
    />
    <h1 style={{ fontSize: 36 }}>iBPM</h1>
  </span>
);

export default Logo
