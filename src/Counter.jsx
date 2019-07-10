import React from 'react';

const Counter = ({ count, addCount }) => (
	<div>
		<button onClick={() => addCount()}>Add</button>
		<p>Count: {count}</p>
	</div>
);

export default Counter;
