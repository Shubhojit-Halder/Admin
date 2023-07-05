import { TailSpin } from "react-loader-spinner";
const LoaderComp = () => {
  return (
    // <Loader
    //     type="TailSpin"
    //     color="rgb(155, 236, 34)"
    //     height={70}
    //     width={70}
    //     timeout={5000}
    // />
    <div style={{position:"absolute",top:"40%",left:"50%"}}>
      <TailSpin
        height="80"
        width="80"
        radius="9"
        color="teal"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
export default LoaderComp;
