import React, { createContext, useContext, useState } from 'react';
export const NewContext = createContext();

export const NewContextProvider = ({ children }) => {
  const [value, setValue] = useState('New Context');

  return (
    <NewContext.Provider value={{ value, setValue }}>
        <table>
            <tr>
                <td onClick={()=>{setValue('NewContextProvider Clicked')}}>-: NewContextProvider :- </td>
                <td>{value}</td>
            </tr>
        </table>
        {children}
    </NewContext.Provider>
  );
};

export const NewParent = () =>{
    const { value, setValue } = useContext(NewContext);

    return (
        <>
            <table>
                <tr>
                    <td onClick={()=>{setValue('New Parent Clicked')}}>-: New Parent :-</td>
                    <td></td>
                </tr>
            </table>
            <NewChild />
        </>
    )
}


export const NewChild = () => {
    return (<>
        <table>
            <tr>
                <td>-: Child :-</td>
                <td></td>
            </tr>
        </table>
        <NewGrandChild />
      </>
    );
}


export const NewGrandChild = () => {
  const { value, setValue } = useContext(NewContext);

  return (<>
      <table>
        <tr>
          <td onClick={()=>{setValue('New GrandChild Clicked')}}>-: GrandChild :- </td>
          <td>{value}</td>
        </tr>
      </table>
    </>
  );
}