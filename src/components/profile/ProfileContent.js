import React from "react";
import { Button } from "@material-ui/core";
import ProfileQuote from "./ProfileQuote";

const ProfileContent = () => {
  return (
    <React.Fragment>
      <div className="example-container">
        <ProfileQuote />
      </div>
      <div style={{ width: "70%", margin: "50px auto", textAlign: "center" }}>
        <h4>Hi, I'm Nay Yaung 🤘🏻</h4>
        <h2>Building digital products, brands and experience.</h2>
        <span>
          I have started learning Web Technologies at <strong>age 13</strong>
        </span>
        <br />
        <Button
          style={{
            marginTop: 20,
            borderRadius: 100,
            background: "#0d0e10",
            color: "white",
            padding: "14px 30px 14px 30px",
          }}
          variant="contained"
          size="small"
        >
          Connect with me
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ProfileContent;
