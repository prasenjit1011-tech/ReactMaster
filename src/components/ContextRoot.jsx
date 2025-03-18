import React from 'react';
import { MyContextProvider, Parent } from './MyContextProvider';
import { NewContextProvider, NewParent } from './NewContextProvider';

const ContextRoot = () => {
  return (
    <div style={{ border: '1px solid gray', padding: '1px 50px 30px', margin: '1px', width:'1000px', alignContent:'center' }}>
      <p style={{fontSize:'26px'}}>Context Root Component...</p>
      <table style={{border:'solid 0px '}}>
        <tr>
          <td style={{border:'1px solid', width:'500px'}}>
            <MyContextProvider>
              <Parent />
            </MyContextProvider>
          </td>
          <td style={{border:'1px solid', width:'500px'}}>
            <NewContextProvider>
              <NewParent />
            </NewContextProvider>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ContextRoot;
