import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // 获取当前年份

  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '20px 0',
        backgroundColor: '#333',
        color: '#fff',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <p>© {currentYear} Your App Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
