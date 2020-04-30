import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';
import FullItem from './FullItem';

import classes from './Post.module.css';

function List(props) {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setList(response.data.slice(0, 15));
        setLoading(false);
      })
      .catch((err) => console.error('[List.jsx]', err.message));
  }, []);

  const handleItemClick = (itemId) => {
    console.log('[Item.jsx]', itemId);
    setSelectedItemId(itemId);
  };

  //   setup render content
  let content = <h2>List</h2>;
  if (loading) {
    content = (
      <div className="spinner-border text-info align-self-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    content = list.map((item) => {
      return (
        <Item
          key={item.id}
          item={item}
          handleItemClick={() => {
            handleItemClick(item.id);
          }}
        />
      );
    });
  }

  return (
    <div className="row flex-column">
      <div>Total - {list.length}</div>
      <hr />
      {selectedItemId && <FullItem selectedItemId={selectedItemId} />}
      <hr />
      <div
        className={`row p-5 ${
          loading ? 'justify-content-center' : 'row-cols-1'
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default List;