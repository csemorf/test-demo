// import React from 'react';

const Footer = () => {
  const footerYear = new Date().getFullYear;
  return (
    <footer className="footer p-1 bg-gray-700 footer-center">
      <div>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="50px"
          y="50px"
          viewBox="0 0 1050 250"
          // style="enable-background:new 0 0 190 190;"
          className="inline-block fill-current ml-10"
        >
          <path
            d="M31.686,187.333H70.61l2.293-40.266h38.262l-2.293,40.266h38.924l2.293-40.266H190v-38.86h-37.697l1.504-26.413H190v-38.86
   h-33.98l2.293-40.266h-38.925l-2.293,40.266h-38.26l2.293-40.266H42.205l-2.293,40.266H0v38.86h37.698l-1.504,26.413H0v38.86h33.98
   L31.686,187.333z M76.622,81.794h38.261l-1.505,26.413H75.117L76.622,81.794z"
          />
        </svg>
        <p className="mr-10 footer-center">
          Copy &copy; {footerYear} All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
