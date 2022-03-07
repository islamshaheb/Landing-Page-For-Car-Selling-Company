/** @format */

import React from 'react';
import logo from 'assets/logo.svg';
import useWindowDimensions from 'views/components/useWindowDimensions/useWindowDimensions';
function Header({reference, click}:any) {
  const { Width } = useWindowDimensions();
  return (
    <div
      style={{
        height: Width >= 550 ? 103 : 90,
        // boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2)',
        borderBottom: '1px solid #D5D5D5',
        position: 'sticky',
        top: 0,
        width: '100%',
        background: '#ffffff75',
        backdropFilter: 'blur(15px)',
        zIndex: 3,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: Width >= 550 ? '30px 64px 0' : '20px 8px 0',
        }}
      >
        <div style={{}}>
          <img src={logo} alt='loadingimage' />
        </div>
        <div ref ={reference} style={{}}>
          <button
            style={{
              backgroundColor: '#2F77AD',
              padding: '1rem',
              fontWeight: Width >= 550 ? 700 : 600,
              borderRadius: 8,
              fontSize: Width >= 550 ? 20 : 16,
              color: '#FFFFFF',
              border: 'none',
              cursor:"pointer"
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
