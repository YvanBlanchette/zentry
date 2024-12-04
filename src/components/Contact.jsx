import ImageClipBox from "./ImageClipBox.jsx";
import AnimatedTitle from "./AnimatedTitle.jsx";
import Button from "./Button.jsx";
import {TiLocationArrow} from "react-icons/ti";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            containerClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            containerClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            containerClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            containerClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-8 font-general text-[16px] uppercase">
            Joindre Zentry
          </p>

          <AnimatedTitle
            title="Co<b>n</b>struis<b>o</b>ns la <br /> nouvelle ere du <br /> j<b>e</b>u video ens<b>e</b>mble"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black tracking-wide"
          />

          <Button label="Nous Joindre" rightIcon={<TiLocationArrow />} containerClass="mt-10 cursor-pointer flex items-center gap-1" />
        </div>
      </div>
    </div>
  );
};
export default Contact
