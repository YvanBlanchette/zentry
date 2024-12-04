const Button = ({id, label, rightIcon, leftIcon, containerClass}) => {
  return (
    <button id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full  bg-violet-50 px-7 py-3 text-black transition-all duration-500 ${containerClass}`}>
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div
          className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-165%] opacity-100 group-hover:opacity-0 group-hover:skew-y-12">
          {label}
        </div>
        <div
          className="absolute translate-y-[165%] skew-y-12 transition duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:skew-y-0">
          {label}
        </div>
      </span>
      {rightIcon}
    </button>
  )
}
export default Button
