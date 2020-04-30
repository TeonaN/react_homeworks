import React from "react";
import classes from "./Blog.module.css";
import styled from "styled-components";
// import Radium from "radium";
import List from "../../components/Post/List";
// const Styles = {
//   color: "lime",
//   ":hover": {
//     color: "blue",
//   },

//   "@media screen and (max-width: 960px)": {
//     color: "brown",
//     backgroundColor: "#eee",
//   },
// };

const MainDiv = styled.div`
  color: #ccc;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};

  @media screen and (max-width: 960px) {
    background-color: black;
  }
`;

MainDiv.defaultProps = {
  bgColor: "#fff",
};

function Blog(props) {
  return (
    <div className={`row flex-column ${classes.Blog}`}>
      <h2 className={classes.title}>Blog Page</h2>
      <List />
      {/* <List /> */}
    </div>
  );
}

// export default Radium(Blog)
export default Blog;

// background-color: ${(props) => props.bgColor};
