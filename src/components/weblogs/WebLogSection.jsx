import { WeblogData } from "../../contatans/WeblogData";

export default function WebLogSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4 my-12">
    {WeblogData.map((blog) => (
      <div
        key={blog.id}
        className="blog-item bg-white rounded-2xl p-2  shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 relative group"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {blog.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-1">{blog.description}</p>
          <span className="text-gray-500 text-xs">{blog.date}</span>
        </div>

        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="px-[30px] text-sm py-2.5 rounded-[10px] bg-orangee text-white flex items-center justify-center font-bold transition-all duration-300 hover:px-[40px]">
            مشاهده مقاله
          </button>
        </div>
      </div>
    ))}
  </section>
  )
}
