

import { DARK_TMDB_IMAGE_PATH, LIGHT_TMDB_IMAGE_PATH } from '../../utils/constants/image-paths';

const TMDBMark = () => (
  <>
    <picture className='tmdb-mark'>
      <source srcSet={DARK_TMDB_IMAGE_PATH} media='(prefers-color-scheme: dark)' />
      <source srcSet={LIGHT_TMDB_IMAGE_PATH} media='(prefers-color-scheme: light)' />
    </picture>
    <style jsx>{`
      .tmdb-mark {
        display: flex;
        justify-content: center;
      }

      .tmdb-mark > img {
        max-width: 100%;
        height: 3rem;
      }
    `}</style>
  </>
);

export default TMDBMark;
