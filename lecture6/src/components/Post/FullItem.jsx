import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FullItem({ selectedItemId }) {
  const [item, setItem] = useState(null);

  //   useEffect(() => {
  //     axios
  //       .get('https://jsonplaceholder.typicode.com/posts/' + selectedItemId)
  //       .then((response) => {
  //         setItem(response.data);
  //       })
  //       .catch((err) => console.error('[FullItem.jsx]', err.message));
  //   }, [selectedItemId]);

  useEffect(() => {
    //   IIFE
    (async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts/' + selectedItemId
        );

        setItem(response.data);
      } catch (err) {
        console.error('[FullItem.jsx]', err.message);
      }
    })();
  }, [selectedItemId]);

  if (!item) return null;
  return (
    <div className="row flex-column bg-dark text-white p-3">
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  );
}

export default FullItem;