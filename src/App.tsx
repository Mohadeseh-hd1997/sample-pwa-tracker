import Main from "./component/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./component/Banner";
import { ConfigProvider } from "antd";

function App() {
  var IconAdd = document.getElementById("AddHome");
  var defredprompt: any;

  IconAdd?.addEventListener("click", function () {
    if (defredprompt) {
      defredprompt.prompt();
      defredprompt.userChoice.then(function (choice: any) {
        if (choice.outcome === "dismissed") {
          console.log("Cancel install PWA");
        } else {
          console.log("PWA installed");
        }
      });
      defredprompt = null;
    }
  });

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    defredprompt = event;
    return false;
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1d68d4",
          colorInfo: "#1d68d4",
          colorSuccess: "#3da30b",
          sizeStep: 4,
          colorLink: "#0752bf",
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main children={<Banner />} />}></Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
