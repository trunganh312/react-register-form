import RegisterFormik from "./components/form/RegisterFormik";
import RegisterHook from "./components/form/RegisterHook";

function App() {
  return (
    <div className="App">
      <h3 className="text-center m-10 text-[48px] font-semibold">
        Register Form
      </h3>
      {/* <RegisterHook></RegisterHook> */}
      <RegisterFormik></RegisterFormik>
    </div>
  );
}

export default App;
