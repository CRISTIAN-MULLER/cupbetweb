import axios from 'axios';

interface IHomeProps {
	count: number;
}

export default function Home(props: IHomeProps) {
	return <h1>HELLO WORLD</h1>;
}

export const getServerSideProps = async () => {
	const { data } = await axios.get('http://localhost:3333/pools/count');

	console.log(data);

	return {
		props: {}
	};
};
