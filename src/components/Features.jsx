import BentoCard from "./BentoCard.jsx";
import {TiLocationArrow} from "react-icons/ti";
import BentoTilt from "./BentoTilt.jsx";

const Features = () => {
  return (
    <section className="-mt-[2px] bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-4xl text-blue-50">
            L'Univers du Metajeu
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Plongez dans un univers riche et en constante expansion où une vaste gamme de produits converge pour créer une expérience interconnectée à votre monde.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={<>radia<b>n</b>t</>}
            text="Une application de Metajeu multiplateforme, transformant vos activités à travers les jeux Web2 et Web3 en une aventure gratifiante."
          />
        </BentoTilt>

        <div className="h-[135vh] grid grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={<>zig<b>m</b>a</>}
              text="Une collection NFT inspirée de l'anime et du jeu vidéo - une propriété intellectuelle prête pour l'expansion."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 row-span-1 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={<>n<b>e</b>xus</>}
              text="Un hub social gamifié, ajoutant une nouvelle dimension de jeu à votre identité, votre engagement Web3 et vos interactions sociales."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 ms-14 row-span-1 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={<>az<b>u</b>l</>}
              text="Un agent IA interdimensionnel - élevant votre expérience de jeu pour la rendre à la fois plus amusante et plus productive."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">Enc<b>o</b>re Pl<b>u</b>s a ve<b>n</b>ir!</h1>
              <TiLocationArrow className="m-5 scale-[12] self-end mt-3 me-6 rotate-[10deg]"/>
              <TiLocationArrow className="m-5 scale-[12] self-end rotate-[190deg] me-14"/>
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
          </div>
        </div>
    </section>
)
}
export default Features
