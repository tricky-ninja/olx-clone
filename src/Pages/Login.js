import React, {useState} from 'react';
import Login from '../Components/Login/Login';


import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

const override = css`
  display: block;
  margin: 0 auto;
  
`

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#F5A623");
  return (
    <div className={loading ? 'loginParentDiv' : ''} style={{border: 'none'}}>
      {loading ?
       <SyncLoader color={color} loading={true} css={override} size={15} /> 
       : <Login loading={loading} setLoading={setLoading} />}
    </div>
  );
  }

export default LoginPage;
