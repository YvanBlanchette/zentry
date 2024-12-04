const BentoCard = ({src, title, text}) => {
  return (
    <article className="relative size-full" >
      <video src={src} loop muted autoPlay className="absolute left-0 top-0 size-full object-cover object-center" />
      <div className="relative z-10 size-full flex flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {text && (
            <p className="mt-3 max-w-64 text-xs md:text-base">
              {text}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}
export default BentoCard
