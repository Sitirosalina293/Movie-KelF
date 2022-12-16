

import { Provider } from 'react-redux';
import globalStyles from '../styles/global';

import { useStore } from '../../store';
import ThemeProvider from '../utils/hocs/ThemeProvider';
import Layout from '../parts/Layout';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
      </Provider>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default MyApp;
