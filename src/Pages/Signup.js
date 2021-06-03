import React, { useState } from 'react';


import Signup from '../Components/Signup/Signup';

import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";

const override = css`
  display: block;
  margin: 0 auto;
  
`

function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#F5A623");
  return (
    <div className={loading ? 'signupParentDiv' : ''} style={{border: 'none'}}>
      {loading ?
      <SyncLoader color={color} loading={true} css={override} size={15} />
       : <Signup loading={loading} setLoading={setLoading} />}
      
    </div>
  );
}

export default SignupPage;
