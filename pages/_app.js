import "../styles/globals.css";
import MainLayout from "../src/components/layout/main-layout";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
