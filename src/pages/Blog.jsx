
import ai from "../assets/blogsImg/ai.jpeg"
import er from "../assets/blogsImg/error.png"

const blogPosts = [
  {
    id: '1',
    title: 'How a Developer Can Beat AI (Without Losing Their Mind)',
    date: 'May 20, 2025',
    excerpt: 'If you’re just starting out or midway into your coding journey, it’s easy to feel like you’re already behind.But here’s the thing: AI is a tool. Not a replacement. And if you use it right, you can actually be better than ever.',
    image: ai,
    link: 'https://dev.to/rajat_yadav_/how-a-developer-can-beat-ai-without-losing-their-mind-33mj',
  },
  {
    id: '2',
    title: '🛠️ How a Missing Debug File in pdf-parse Crashed My Node.js App (And How I Fixed It)',
    date: 'June 4, 2025',
    excerpt: 'If you’re seeing ENOENT related to 05-versions-space.pdf while using pdf-parse in Node.js — it’s not your fault. It’s hidden debug logic inside the library. Here’s the fix.',
    image: er,
    link: 'https://medium.com/@mbmrajatit/%EF%B8%8F-how-a-missing-debug-file-in-pdf-parse-crashed-my-node-js-app-and-how-i-fixed-it-be5ba7077527',
  },
  
  
];

function Blog() {
  return (
    <div>
      <div className=" text-[--text] py-8 pb-24">
        <div className="about container m-auto w-[max(75vw,300px)]">
          <div className="a flex justify-center p-8 ">
            <h2 className=' alg border-4 md:text-3xl p-4  md:px-18 font-bold tracking-widest'>BLOGS</h2>
          </div>
        </div>

        <div className="blogs m-6 md:mx-28 flex flex-col gap-6">
          {blogPosts.map((blog)=>(
            <a key={blog.id} href={blog.link} target="_blank" rel="noopener noreferrer" aria-label={`Read more about ${blog.title}`} >
            <div className="blog group md:flex lg:flex-row flex-col gap-4 rounded-2xl border p-2.5 md:p-4 cursor-pointer transform duration-200 hover:-translate-y-1 border-[var(--skyBlue)]">

              <div className="left w-full md:w-[400px] aspect-[3/2] rounded-2xl flex-shrink-0">
                <img src={blog.image} alt={blog.title} className='w-full h-full  md:object-fill object-center rounded-2xl' />
              </div>
              <div className="right">
                <div className="heading mx-2 mt-3 "><h1 className='font-bold text-2xl md:text-4xl'>{blog.title}</h1></div>
                <div className="date mx-3.5 mb-4"><p className='font-thin text-sm'>{blog.date}</p></div>
                <div className="description mx-2"><p className=''>{blog.excerpt}</p></div>
                <div className="more m-2 text-sm group-hover:text-blue-700 ">Read More</div>
              </div>
            </div>
          </a>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Blog
