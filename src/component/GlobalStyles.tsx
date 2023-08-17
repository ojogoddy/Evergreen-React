import React from 'react'
import { Global, css } from '@emotion/react'

const GlobalStyles:React.FC = () => {
  return (
    <div>
        <Global styles = {css`
        @font-face {
            font-family: "CustomFont";
            src: url("../fonts/static/Raleway-Black.ttf");
            src: url("../fonts/static/Raleway-Bold.ttf");
            src: url("../fonts/static/Raleway-ExtraBold.ttf");
            src: url("../fonts/static/Raleway-ExtraLight.ttf");
            src: url("../fonts/static/Raleway-Italic.ttf");
            src: url("../fonts/static/Raleway-Light.ttf");
            src: url("../fonts/static/Raleway-Medium.ttf");
            src: url("../fonts/static/Raleway-Regular.ttf");
            src: url("../fonts/static/Raleway-SemiBold.ttf");
            src: url("../fonts/static/Raleway-Thin.ttf");
          }
          body{
            font-family: CustomFont;
            margin: 0;
            padding:0;
                    }
        ` } />
    </div>
  )
}

export default GlobalStyles