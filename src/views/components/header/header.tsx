/** @format */

import React from 'react';
import logo from 'assets/logo.svg';
import useWindowDimensions from 'views/components/useWindowDimensions/useWindowDimensions';
function Header({ reference, click }: any) {
  const { Width } = useWindowDimensions();
  return (
    <div
      style={{
        height: Width >= 550 ? 103 : 70,
        // boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2)',
        borderBottom: '1px solid #D5D5D5',
        position: 'sticky',
        top: 0,
        width: '100%',
        background: '#ffffff80',
        backdropFilter: 'blur(15px)',
        zIndex: 3,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding:
            Width >= 550 ? (Width >= 768 ? '30px 64px 0 39px' : '30px 64px 0 22px') : '20px 8px 0',

          // padding:
          //   Width >= 550 && Width <= 768
          //     ? '25px 30px 30px 0'
          //     : Width > 768
          //     ? '11px 8px 0 20px'
          //     : '15px 8px 0 20px',
        }}
      >
        <div style={{}}>
          <img src={logo} width={Width >= 550 ? 'auto' : '120px'} alt='loadingimage' />
        </div>
        <div ref={reference} style={{}}>
          <button
            style={{
              backgroundColor: '#2F77AD',

              fontWeight: Width >= 550 ? 700 : 400,
              padding: Width >= 550 ? '1rem' : '.7rem 1rem',
              borderRadius: 8,
              fontSize: Width >= 550 ? 20 : 12,
              color: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={click}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
