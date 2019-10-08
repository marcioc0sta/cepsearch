import React from 'react';
import PropTypes from 'prop-types';

const CloseButtonIcon = props => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 1280.000000 1280.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        fill={props.color}
        stroke="none"
      >
        <path
          d="M1545 12784 c-85 -19 -167 -51 -243 -95 -69 -41 -1089 -1049 -1157
-1144 -101 -141 -140 -263 -140 -440 0 -169 36 -293 125 -427 29 -43 705 -726
2149 -2170 l2106 -2108 -2111 -2112 c-1356 -1358 -2124 -2133 -2147 -2169 -88
-137 -121 -249 -121 -419 -1 -181 37 -302 139 -445 68 -95 1088 -1103 1157
-1144 273 -159 604 -143 853 42 22 17 986 976 2143 2131 l2102 2101 2103
-2101 c1156 -1155 2120 -2114 2142 -2131 69 -51 130 -82 224 -113 208 -70 431
-44 629 71 69 41 1089 1049 1157 1144 101 141 140 263 140 440 0 166 -36 290
-121 422 -25 39 -746 767 -2148 2171 l-2111 2112 2107 2108 c2207 2208 2162
2161 2219 2303 75 187 77 392 4 572 -53 132 -74 157 -615 700 -289 291 -552
548 -585 572 -141 101 -263 140 -440 140 -166 0 -289 -35 -420 -120 -41 -26
-724 -702 -2172 -2149 l-2113 -2111 -2112 2111 c-1454 1452 -2132 2123 -2173
2150 -64 41 -149 78 -230 101 -79 22 -258 26 -340 7z"
        />
      </g>
    </svg>
  );
};

CloseButtonIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

export default CloseButtonIcon;
