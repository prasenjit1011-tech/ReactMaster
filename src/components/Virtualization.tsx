import React from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import dramaList from '../assets/dramaList.json';

type DramaItem = {
  id: number;
  title: string;
  description: string;
};

// Row component with correct typing
const Row = React.memo(({ index, style }: ListChildComponentProps) => {
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
});

const Virtualization: React.FC = () => {
  return (
    <div style={{ border: '2px solid #F00', width: '800px', padding: '5px' }}>
      <h3>React Virtualization</h3>

      <FixedSizeList
        height={240}
        itemCount={(dramaList as DramaItem[]).length}
        itemSize={80}
        width="100%"
      >
        {Row}
      </FixedSizeList>
    </div>
  );
};

export default Virtualization;