import React, { useRef } from 'react';
import hinnadJSON from '../data/hinnad.json';
import { toast, ToastContainer } from 'react-toastify';
function LisaHind() {
	const hindRef = useRef(); // import!

	const lisaHind = () => {
		if (hindRef.current.value <= 0) {
			toast.error('Negatiivset hinda lisada ei saa');
			return;
		}

		hinnadJSON.push({
			number: Number(hindRef.current.value),
			lisaja: 'Jyrgen',
		});
		// setHinnad(hinnad.slice());
		hindRef.current.value = '';
		toast.success('Edukalt lisatud');
	};
	return (
		<div>
			<label>Uus hind</label>
			<input ref={hindRef} type='number' />
			<button onClick={lisaHind}>Lisa</button>
			<ToastContainer />
		</div>
	);
}

export default LisaHind;
