import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="white" className="font-small pt-0 mt-5 mb-0 bg-primary fixed-bottom">
      
      <div className=" text-center py-3">
        <MDBContainer fluid>
            <span className="text-left mx-4">
               Contact : +91-9537849714
            </span>
          This website is just for demo purpose
          <span className="text-right mx-4">
                E-mail:vaibhavsingh61999@gmail.com
            </span>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;