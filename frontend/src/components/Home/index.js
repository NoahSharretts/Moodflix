import React from "react";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Home.css';


function Home() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);



  return (
    <>
      <h1>Homeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
    </>
  );

}

export default Home;
