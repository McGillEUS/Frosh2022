import { Button, Typography } from "@mui/material";
import React from "react";
import { HOW_TO_REGISTER, STEPS_TO_TAKE } from "../../constants/registration";

export default function Register() {
  return (
    <div style={{ marginTop: "10px" }}>
      <Typography variant="h1">Registration</Typography>
      <div
        style={{
          padding: "10px 20px 50px 20px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1000px",
        }}
      >
        <div>
          <Typography variant="p">{HOW_TO_REGISTER}</Typography>
        </div>
        <div style={{ padding: "20px 25px 40px 25px" }}>
        <Typography variant="p">{STEPS_TO_TAKE}</Typography>
          <div style={{ paddingTop: "2em" }}>
          <Typography variant="p">
            *You must complete Steps 1-5 before coming to pick up your
            credentials and gear*
          </Typography>
          </div>
        </div>
        <div style={{paddingBottom: "50px"}}>
          <Typography variant="p">
            <strong>Reach out to oweek.communications@eusmcgill.ca if you have any questions.</strong>
          </Typography>

        </div>
        <div
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "10px",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            size="large"
            href="https://involvement.mcgill.ca/organization/eus"
          >
            Register Here
          </Button>
        </div>
        {/*<div
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "10px",
          }}
        >
          <Button
            variant="contained"
            size="large"
            href="https://drive.google.com/file/d/1c3cRhjv1KXxtrfnLfsSKHiImp28Rdzv_/view?usp=sharing" //TODO: Update link
          >
            Bursary Form
          </Button>
        </div>*/}
      </div>
    </div>
  );
}
