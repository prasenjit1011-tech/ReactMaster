import React from 'react';
import { FixedSizeList as List } from 'react-window';
import dramaList from './dramaList.json';

const Row = React.memo(({ index, style }) => {
    const item = dramaList[index];

    return (
        <div
            style={{
                ...style,
                boxSizing: 'border-box',
                padding: '10px',
                borderBottom: '2px solid #F00',
                backgroundColor: '#fff',
            }}
        >
            <p>
                <b>{item.id}. {item.title}</b> 
                {item.description}
            </p>
        </div>
    );
});

const Virtualization = () => {
    return (
        <div style={{border:'2px solid #F00', width:'800px', padding:'5px', margin:'5px'}}>
            <h1>React Virtualization</h1>

            <List
                height={240}      // visible height
                itemCount={dramaList.length}  // total items
                itemSize={80}     // height of each row
                width={'100%'}    // list width
            >
                {Row}
            </List>
        </div>
    );
};

export default Virtualization;