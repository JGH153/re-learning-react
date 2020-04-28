import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>
        Hey it's me {props.name}, age: {props.age}{' '}
      </p>
			<p>
				{props.children}
			</p>
    </div>
  );
};

export default person;
