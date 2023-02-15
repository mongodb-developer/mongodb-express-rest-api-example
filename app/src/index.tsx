import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { css } from '@leafygreen-ui/emotion';

const CDN = 'https://d2va9gm4j17fy9.cloudfront.net';
const fontsURL = `${CDN}/fonts`;

export const globalStyles = css`
  /**
   * Euclid
   */

  /* Semibold */
  @font-face {
    font-family: 'Euclid Circular A';
    src: url('${fontsURL}euclid-circular/EuclidCircularA-Semibold-WebXL.woff')
        format('woff'),
      url('${fontsURL}euclid-circular/EuclidCircularA-Semibold-WebXL.woff2')
        format('woff2'),
      url('${fontsURL}euclid-circular/EuclidCircularA-Semibold.ttf')
        format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  /* Semibold Italic */
  @font-face {
    font-family: 'Euclid Circular A';
    src: url('${fontsURL}euclid-circular/EuclidCircularA-SemiboldItalic-WebXL.woff')
        format('woff'),
      url('${fontsURL}euclid-circular/EuclidCircularA-SemiboldItalic-WebXL.woff2')
        format('woff2'),
      url('${fontsURL}euclid-circular/EuclidCircularA-SemiboldItalic.ttf')
        format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  /* Medium */
  @font-face {
    font-family: 'Euclid Circular A';
    src: url('${fontsURL}euclid-circular/EuclidCircularA-Medium-WebXL.woff')
        format('woff'),
      url('${fontsURL}euclid-circular/EuclidCircularA-Medium-WebXL.woff2')
        format('woff2'),
      url('${fontsURL}euclid-circular/EuclidCircularA-Medium.ttf')
        format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  /* Medium Italic */
  @font-face {
    font-family: 'Euclid Circular A';
    src: url('${fontsURL}euclid-circular/EuclidCircularA-MediumItalic-WebXL.woff')
        format('woff'),
      url('${fontsURL}euclid-circular/EuclidCircularA-MediumItalic-WebXL.woff2')
        format('woff2'),
      url('${fontsURL}euclid-circular/EuclidCircularA-MediumItalic.ttf')
        format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  /* Normal */
  @font-face {
    font-family: 'Euclid Circular A';
    src: url('${fontsURL}euclid-circular/EuclidCircularA-Regular-WebXL.woff')
        format('woff'),
      url('${fontsURL}euclid-circular/EuclidCircularA-Regular-WebXL.woff2')
        format('woff2'),
      url('${fontsURL}euclid-circular/EuclidCircularA-Regular.ttf')
        format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  /* Italic */
  @font-face {
    font-family: 'Euclid Circular A';
    src: url('${fontsURL}euclid-circular/EuclidCircularA-RegularItalic-WebXL.woff')
        format('woff'),
      url('${fontsURL}euclid-circular/EuclidCircularA-RegularItalic-WebXL.woff2')
        format('woff2'),
      url('${fontsURL}euclid-circular/EuclidCircularA-RegularItalic.ttf')
        format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  /**
   * Value Serif
   */

  /* Bold */
  @font-face {
    font-family: 'MongoDB Value Serif';
    font-weight: 700;
    src: url('${fontsURL}value-serif/MongoDBValueSerif-Bold.woff')
        format('woff'),
      url('${fontsURL}value-serif/MongoDBValueSerif-Bold.woff2') format('woff2'),
      url('${fontsURL}value-serif/MongoDBValueSerif-Bold.ttf')
        format('truetype');
  }

  /* Medium */
  @font-face {
    font-family: 'MongoDB Value Serif';
    font-weight: 500;
    src: url('${fontsURL}value-serif/MongoDBValueSerif-Medium.woff')
        format('woff'),
      url('${fontsURL}value-serif/MongoDBValueSerif-Medium.woff2')
        format('woff2'),
      url('${fontsURL}value-serif/MongoDBValueSerif-Medium.ttf')
        format('truetype');
  }

  /* Normal */
  @font-face {
    font-family: 'MongoDB Value Serif';
    font-weight: 400;
    src: url('${fontsURL}value-serif/MongoDBValueSerif-Regular.woff')
        format('woff'),
      url('${fontsURL}value-serif/MongoDBValueSerif-Regular.woff2')
        format('woff2'),
      url('${fontsURL}value-serif/MongoDBValueSerif-Regular.ttf')
        format('truetype');
  }

  @font-face {
    font-family: 'Akzidenz';
    font-weight: normal;
    src: url('${fontsURL}/akzidgrostdreg.eot');
    /* IE9 Compat Modes */
    src: url('${fontsURL}/akzidgrostdreg.eot?#iefix')
        format('embedded-opentype'),
      /* Pretty Modern Browsers */ url('${fontsURL}/akzidgrostdreg.ttf')
        format('truetype'),
      /* Safari, Android, iOS */ url('${fontsURL}/akzidgrostdreg.svg#Akzidenz')
        format('svg');
    /* Legacy iOS */
  }

  @font-face {
    font-family: 'Akzidenz';
    font-weight: 600;
    src: url('${fontsURL}/akzidgrostdmed.eot');
    /* IE9 Compat Modes */
    src: url('${fontsURL}/akzidgrostdmed.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('${fontsURL}/akzidgrostdmed.woff') format('woff'),
      /* Pretty Modern Browsers */ url('${fontsURL}/akzidgrostdmed.ttf')
        format('truetype'),
      /* Safari, Android, iOS */ url('${fontsURL}/akzidgrostdmed.svg#Akzidenz')
        format('svg');
    /* Legacy iOS */
  }

  @font-face {
    font-family: 'Akzidenz';
    font-weight: bold;
    src: url('${fontsURL}/akzidgrostdmed.eot');
    /* IE9 Compat Modes */
    src: url('${fontsURL}/akzidgrostdmed.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('${fontsURL}/akzidgrostdmed.woff') format('woff'),
      /* Pretty Modern Browsers */ url('${fontsURL}/akzidgrostdmed.ttf')
        format('truetype'),
      /* Safari, Android, iOS */ url('${fontsURL}/akzidgrostdmed.svg#Akzidenz')
        format('svg');
    /* Legacy iOS */
  }

  html {
    font-family: 'Euclid Circular A', 'Akzidenz', 'Helvetica Neue', Helvetica,
      Arial, sans-serif;
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <div className={globalStyles}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
