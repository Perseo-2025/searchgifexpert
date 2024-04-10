
export default function GifItem({title, url, id}) {


  return (
    <div className="md:w-1/2">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
