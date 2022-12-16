
import clsx from 'clsx';

const GradientImageWrapper = ({
  className = '',
  children,
  overlayEnabled,
  ...rest
}) => (
  <>
    {overlayEnabled ? (
      <>
        <div
          className={clsx('gradient', className)}
          {...rest}>
          {children}
        </div>
        <style jsx>{`
          .gradient {
            position: relative;
          }

          .gradient::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: inline-block;
            background-image: var(--background-blend-gradient);
          }

          :global(.gradient .img) {
            display: block;
          }
        `}</style>
      </>
    ) : (
      <>
        {children}
      </>
    )}
  </>
);

export default GradientImageWrapper;
