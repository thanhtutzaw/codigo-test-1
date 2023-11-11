
import s from "@/styles/Home.module.scss";
export default function ViewMoreBtn({}) {
  return (
    <div className={s.viewMore_container} data-fade="index">
      <div className={s.viewMore}>
        <svg
          className={s.viewMore_svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 254.73 221.92"
          preserveAspectRatio="xMaxYMax "
          data-open_viewmore="false"
          data-fade="index"
        >
          <path
            fill="#203D99"
            className={s.viewMore_svg_shape}
            d="m225.68,15.74c-25.47-21.39-54.72-22.72-79.62,6.86-24.91,29.57-40.17,54.92-72.67,49.26-32.5-5.66-62.08,14.2-71.32,44.78-9.24,30.58,13.36,75.03,52.18,90.3,38.81,15.27,72.91,24.12,122.72.19,49.81-23.93,68.79-79.19,75.51-108.95,6.71-29.76-1.32-61.04-26.79-82.44Z"
          ></path>
          <text className={s.viewMore_svg_text} x="81.9%" y="95.9%">
            view collection
          </text>
        </svg>
      </div>
    </div>
  );
}
