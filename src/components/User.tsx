import React from 'react';

// string, number, boolean, void, null
// user defined types -> object, array, enum, union, any, custom type
type UserProps = {
	user: {
		name: string;
		age: number;
		isRegistered: boolean;
		lang: string[];
	};
};

const User = ({ user }: UserProps) => {
	return (
		<div style={{ margin: '0.5rem', border: '1px solid black	' }}>
			<h1>{user.name}</h1>
			<p>{user.age}</p>
			{user.isRegistered ? <p>Registered User</p> : <p>Not Registered User</p>}
			<p>
				Speaks:
				{user.lang.map((language, index) => {
					return <span key={index}>{language} </span>;
				})}
			</p>
		</div>
	);
};

export default User;
