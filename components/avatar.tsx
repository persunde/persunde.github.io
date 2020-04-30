export default function Avatar({ name }) {
  const pictureSrc = encodeURI(`/assets/blog/authors/${name.toString().trim()}.png`)
  return (
    <div className="flex items-center">
      <img src={pictureSrc} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}