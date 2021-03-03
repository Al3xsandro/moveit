import { SideBar } from '../components/SideBar';
import { useRouter } from 'next/router';
import '../styles/global.css';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/' && <SideBar />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;