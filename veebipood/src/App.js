import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Ariklient from './pages/Ariklient';
import Kinkekaart from './pages/Kinkekaart';
import LisaToode from './pages/LisaToode';
import Ostukorv from './pages/Ostukorv';
import Seaded from './pages/Seaded';
import LisaTegelane from './components/lisaTegelane/LisaTegelane';
import Hinnad from './pages/Hinnad';
import Tooted from './pages/Tooted';
import Tootajad from './pages/Tootajad';
import HaldaTooted from './pages/HaldaTooted';
import HaldaEsindused from './pages/HaldaEsindused';
import HaldaHinnad from './pages/HaldaHinnad';
import HaldaTootajad from './pages/HaldaTootajad';
import LisaHind from './pages/LisaHind';
import LisaEsindus from './pages/LisaEsindus';
import LisaTootaja from './pages/LisaTootaja';
import YksTootaja from './pages/YksTootaja';
import YksEsindus from './pages/YksEsindus';
import YksHind from './pages/YksHind';
import YksToode from './pages/YksToode';
import MuudaToode from './pages/MuudaToode';
import MuudaHind from './pages/MuudaHind';
import MuudaEsindus from './pages/MuudaEsindus';
import MuudaTootaja from './pages/MuudaTootaja';
import Menuu from './components/Menuu';

function App() {
	return (
		<div className='App'>
			<Menuu />
			<Routes>
				<Route path='/' element={<Avaleht />} />
				<Route path='lisa-tegelane' element={<LisaTegelane />}></Route>
				<Route path='esindused' element={<Esindused />} />
				<Route path='arikliendile' element={<Ariklient />} />
				<Route path='osta-kinkekaart' element={<Kinkekaart />} />
				<Route path='lisa-toode' element={<LisaToode />} />
				<Route path='ostukorv' element={<Ostukorv />} />
				<Route path='seaded' element={<Seaded />} />
				<Route path='hinnad' element={<Hinnad />} />
				<Route path='tootajad' element={<Tootajad />} />
				<Route path='tooted' element={<Tooted />} />

				<Route path='halda-tooted' element={<HaldaTooted />} />
				<Route path='halda-esindused' element={<HaldaEsindused />} />
				<Route path='halda-hinnad' element={<HaldaHinnad />} />
				<Route path='halda-tootajad' element={<HaldaTootajad />} />

				<Route path='lisa-hind' element={<LisaHind />} />
				<Route path='lisa-esindus' element={<LisaEsindus />} />
				<Route path='lisa-tootaja' element={<LisaTootaja />} />

				<Route path='tootaja/:index' element={<YksTootaja />} />
				<Route path='esindus/:index' element={<YksEsindus />} />
				<Route path='hind/:index' element={<YksHind />} />
				<Route path='toode/:index' element={<YksToode />} />

				<Route path='muuda-tootaja/:index' element={<MuudaTootaja />} />
				<Route path='muuda-esindus/:index' element={<MuudaEsindus />} />
				<Route path='muuda-hind/:index' element={<MuudaHind />} />
				<Route path='muuda-toode/:index' element={<MuudaToode />} />

				<Route path='*' element={<Avaleht />} />
			</Routes>
		</div>
	);
}

export default App;
