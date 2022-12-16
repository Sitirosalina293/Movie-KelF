
import Head from 'next/head';

import { LOGO_IMAGE_PATH, DARK_TMDB_IMAGE_PATH, LIGHT_TMDB_IMAGE_PATH } from '../../utils/constants/image-paths';

const MyHead = ({ children }) => (
  <Head>
    <link rel='preconnect' href='https://image.tmdb.org' />
    <link rel='preconnect' href='https://api.themoviedb.org' />
    <link rel='preload' href={LOGO_IMAGE_PATH} as='image' media='(min-width: 80em)' />
    <link rel='preload' href={DARK_TMDB_IMAGE_PATH} as='image' media='(prefers-color-scheme: dark) and (min-width: 80em)' />
    <link rel='preload' href={LIGHT_TMDB_IMAGE_PATH} as='image' media='(prefers-color-scheme: light) and (min-width: 80em)' />
    {children}
  </Head>
);

export default MyHead;
