
export default function ButtonHeader() {
  return (
    <div className="flex items-center gap-4">
      <button className="px-[30px] text-sm py-2.5 rounded-[10px] bg-orangee text-white flex items-center justify-center font-bold transition-all duration-300 hover:px-[40px] hover:bg-transparent hover:text-orangee hover:border hover:border-orangee">
       تماس با ما
      </button>
      <button className="px-[30px] text-sm py-2.5 rounded-[10px] border border-orangee text-black flex items-center justify-center font-bold transition-all duration-300 hover:px-[40px] hover:bg-orangee hover:text-white">
       همکاری با ما
      </button>
    </div>
  )
}

