import React from 'react';
import { useParams } from 'react-router-dom';

function YksUudis() {
	const { index } = useParams();
	const uudised = JSON.parse(localStorage.getItem('uudised')) || [];

	const found = uudised[index];

	return <div>{found ? <div>{found.uusUudis}</div> : 'See uudis puudub'}</div>;
}

export default YksUudis;
