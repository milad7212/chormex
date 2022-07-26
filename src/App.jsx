import "./App.css";

function App() {
  return (
    <>
      <div className="w-64 h-64 bg-emerald-300  flex flex-col items-center p-2">
        <h1 className="font-black text-xl text-emerald-900">اینستایار</h1>
        <div className="text-center mt-4">
          <button className="bg-slate-100 hover:scale-105 text-base font-bold active:scale-95 py-1 px-4 w-48 rounded-lg shadow-md my-2 text-blue-800 ">
            ورود
          </button>
          <button className="bg-slate-100 hover:scale-105  text-base font-bold active:scale-95 py-1 px-4 w-48 rounded-lg shadow-md my-2 text-blue-800 ">
            ثبت فاکتور
          </button>
          <button className="bg-slate-100 hover:scale-105  text-base font-bold active:scale-95 py-1 px-4 w-48 rounded-lg shadow-md my-2 text-blue-800 ">
            ثبت تراکنش
          </button>
        </div>
        <div className="h-1 w-[90%] bg-gray-500 mt-3"></div>
        <div className="mt-2">
          <span className="text-gray-800 font-bold text-sm">
            www.instayar.com
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
