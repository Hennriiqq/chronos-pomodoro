import { Bounce, ToastContainer } from 'react-toastify';

type MessagesContainerProps = {
  children: React.ReactNode;
};

export function MessagesContainer({ children }: MessagesContainerProps) {
  return (
    <>
      {children}
      <ToastContainer
        position='top-center'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
    /* teste branch */
  );
}
