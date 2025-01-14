function Buttons({titleOne,titleTwo}) {
  return (
    <div className="flex items-center gap-4">
      <button className="px-[30px] py-2.5 rounded-[10px] bg-orangee text-white flex items-center justify-center font-bold transition-all duration-300 hover:px-[40px] hover:bg-transparent hover:text-orangee hover:border hover:border-orangee">
       {titleOne}
      </button>
      <button className="px-[30px] py-2.5 rounded-[10px] border border-orangee text-black flex items-center justify-center font-bold transition-all duration-300 hover:px-[40px] hover:bg-orangee hover:text-white">
       {titleTwo}
      </button>
    </div>
  );
}

export default Buttons;
