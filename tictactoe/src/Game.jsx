import { useState } from 'react';
import './Game.css';

export default function Game() {
	const [turn, setTurn] = useState();
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();
	const [isDraw, setIsDraw] = useState(false);
	const [playerOneScore, setPlayerOneScore] = useState(0);
	const [playerTwoScore, setPlayerTwoScore] = useState(0);
	const checkwinner = (arr) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagonal: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};
		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					arr[pattern[0]] === '' ||
					arr[pattern[1]] === '' ||
					arr[pattern[2]] === ''
				) {
				} else if (
					arr[pattern[0]] === arr[pattern[1]] &&
					arr[pattern[1]] === arr[pattern[2]]
				) {
					setWinner(arr[pattern[0]]);
					console.log('Winner detected. Calling handleScore...');
					handleScore(winner);
				}
			});
		}
	};

	const handleClick = (num) => {
		if (winner || cells[num] !== '') return;

		let arr = [...cells];
		if (turn === 'X') {
			arr[num] = 'X';
			setTurn('O');
		} else {
			arr[num] = 'O';
			setTurn('X');
		}
		checkwinner(arr);
		setCells(arr);
		if (!arr.includes('') && !winner) {
			setIsDraw(true);
		}
	};

	const Cell = ({ num }) => {
		const cellValue = cells[num];
		const cellClassName = cellValue ? `cell cell-${cellValue}` : 'cell';

		return (
			<td className={cellClassName} onClick={() => handleClick(num)}>
				{cellValue}
			</td>
		);
	};

	const handleReset = () => {
		setWinner();
		setIsDraw(false);
		setCells(Array(9).fill(''));
	};

	const handleScore = () => {
		console.log('handleScore is called...');
		if (winner === 'X') {
			setPlayerOneScore(playerOneScore + 1);
		}
		if (winner === 'O') {
			setPlayerTwoScore(playerTwoScore + 1);
		}
	};
	return (
		<div className='container'>
			<div className='player-box'>
				<div>Player1: {playerOneScore} </div>
				<div>Player2: {playerTwoScore} </div>
			</div>
			<div className={`winner ${winner || isDraw ? 'show' : ''}`}>
				{winner ? `Winner is: ${winner}` : isDraw ? 'Its a draw' : ''}
			</div>
			<table>
				<tbody>
					<tr>
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
			<button className='reset-button' onClick={handleReset}>
				Reset
			</button>
		</div>
	);
}
