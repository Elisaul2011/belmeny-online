import { Loader } from "./Loader";

export const ScreenLoader = () => {
  return (
    <div className=" bg-gray-800 opacity-80 fixed top-0 left-0 z-50 w-screen h-screen overflow-hidden flex items-center justify-center">
      <Loader></Loader>
    </div>
  );
};
