import React from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import dramaList from '../dramaList.json';

// ✅ Define type for each item
type DramaItem = {
  id: number;
  title: string;
  description: string;
};

// ✅ Type-safe Row component
const Row = React.memo(
  ({ index, style }: ListChildComponentProps) => {
    const item = (dramaList as DramaItem[])[index];

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
          <b>
            {item.id}. {item.title}
          </b>{' '}
          {item.description}
        </p>
      </div>
    );
  }
);

// ✅ Main component
const Virtualization: React.FC = () => {
  return (
    <div
      style={{
        border: '2px solid #F00',
        width: '800px',
        padding: '5px',
        margin: '5px',
      }}
    >
      <h3>React Virtualization</h3>

      <List
        height={240} // visible height
        itemCount={(dramaList as DramaItem[]).length} // total items
        itemSize={80} // height of each row
        width="100%" // list width
      >
        {Row}
      </List>
    </div>
  );
};

export default Virtualization;