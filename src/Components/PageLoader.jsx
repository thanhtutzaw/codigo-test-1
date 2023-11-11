import Image from "next/image";
import s from "@/styles/Home.module.scss";
export default function PageLoader({ pageLoading }) {
  return (
    <div className={s.loading} data-loaded={!pageLoading}>
      <Image
        width={200}
        height={200}
        alt="loading"
        src={"https://nft.fluffyhugs.io/loading/loading.webp"}
      />
    </div>
  );
}
