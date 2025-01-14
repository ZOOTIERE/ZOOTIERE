import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/Router";
import { SidebarProvider } from "./context/SidebarContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <SidebarProvider>
        <RouterProvider router={AppRouter} />

        <ToastContainer 
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </SidebarProvider>
    </>
  )
}

export default App
