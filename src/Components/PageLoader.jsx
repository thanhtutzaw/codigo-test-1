import Image from "next/image";
import s from "@/styles/Home.module.scss";
export default function PageLoader({ pageLoading }) {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className={s.loading}
        data-loaded={!pageLoading}
      >
        <Image
          width={200}
          height={200}
          alt="loading"
          src={"https://nft.fluffyhugs.io/loading/loading.webp"}
        />
        <p style={{ position: "absoulte", bottom: "0" }}>
          Sorry ! This is all I can do . In my low spec pc and without three js
          knowledge in 1 day.
        </p>
      </div>
    </>
  );
}
