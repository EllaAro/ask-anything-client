import React from "react";
import { Typography } from "@material-ui/core";
import Error from "../components/sharedComponents/Error";

const notFoundContent = (
  <div>
    <Typography variant="h2">404</Typography>
    <Typography variant="h5">Page not found</Typography>
  </div>
);

const NotFoundPage = () => <Error>{notFoundContent} </Error>;

export default NotFoundPage;
