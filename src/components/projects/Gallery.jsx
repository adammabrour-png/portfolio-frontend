export default function Gallery({ images = [] }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className="rounded-xl border border-gray-800"
        />
      ))}
    </div>
  );
}