import React, { createContext, useContext, useState } from 'react';
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState('Dafault Value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      <table>
        <tr>
          <td onClick={()=>{setValue('MyContextProvider Clicked')}}>-: ContextProvider :- </td>
          <td>{value}</td>
        </tr>
      </table>
      {children}
    </MyContext.Provider>
  );
};

export const Parent = () => {
  const { value, setValue } = useContext(MyContext);

  return (<>
      <table>
        <tr>
          <td onClick={()=>{setValue('Parent Clicked')}}>-: Parent :-</td>
          <td></td>
        </tr>
      </table>
      <Child />
    </>
  );
}

export const Child = () => {
  return (<>
    <table>
      <tr>
        <td>-: Child :-</td>
        <td></td>
      </tr>
    </table>
    <GrandChild />
  </>);
}

export const GrandChild = () => {
  const { value, setValue } = useContext(MyContext);

  return (<>
      <table>
        <tr>
          <td onClick={()=>{setValue('GrandChild Clicked')}}>-: GrandChild :- </td>
          <td>{value}</td>
        </tr>
      </table>
    </>
  );
}