import React  from 'react';

export const SloganSection = React.forwardRef(({ slogans, className, buttonStyle }, ref) => {
  if ( slogans.length === 2 ) {
    return (
      <div className={className} ref={ref}>
        {slogans.map((slogan, index) => (
          <div key={index} className="position-absolute">
            <p className={`btn ${buttonStyle}`}>
              {slogan}
            </p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className={className} ref={ref}>
        {slogans.map((slogan, index) => {
          let orderClass = '';
          if (index === 0) {
            orderClass = 'before'
          } else if (index === 1) {
            orderClass = 'main'
          } else if ( index === 2 ) {
            orderClass = 'after'
          }
          return(
          <div key={index} className={`position-absolute ${orderClass}`}>
            <p className={`btn ${buttonStyle}`}>
              {slogan}
            </p>
          </div>
        )})}
      </div>
    );
  }
} );
