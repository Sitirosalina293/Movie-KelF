

import Link from 'next/link';

import LINKS from '../../utils/constants/links';
import QUERY_PARAMS from '../../utils/constants/query-params';
import STATIC_MOVIE_CATEGORIES from '../../utils/constants/static-movie-categories';

const Logo = () => (
  <>
    <Link
      href={{
        pathname: LINKS.HOME.HREF,
        query: {
          [QUERY_PARAMS.CATEGORY]: STATIC_MOVIE_CATEGORIES[0].name,
          [QUERY_PARAMS.PAGE]: 1
        }
      }}>
      <a>
        <h1>MOVIE APP</h1>
      </a>
    </Link>
    <style jsx>{`
      a {
        color : var(--palette-secondary-main);
        width: 100%;
        height: 5rem;
        display: grid;
        place-items: center;
        margin-bottom: 2rem;
        font-size: 2rem;
      }
    `}</style>
  </>
);

export default Logo;
