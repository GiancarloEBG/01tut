import {useState} from 'react';

const Content = () => {
    const [name, setName] = useState('Gian');
    const [count, setCount] = useState(0);

	const handleNameChange = () => {
		const names = ['Bob', 'Kevin', 'Gian'];
		const int = Math.floor(Math.random() * 3);
		setName(names[int]);
	}

    const handleClick = () => {
        setCount(count + 1)
        setCount(count + 1)
        console.log(count)
	}

    const handleClick2 = (name) => {
        console.log(count)
	}

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
	}

	return (
			<main>
				<p onDoubleClick={handleClick}>
					Hello {name}!
				</p>
				<button onClick={handleNameChange}>Change Name</button>
                {/* the following button has an onclick function with paramenters
                but it is not called inmediately because it has an annonymous
                function calling it, that it starts when the onclick is done */}
				<button onClick={handleClick}>Click it</button>
				<button onClick={handleClick2}>Click it</button>
			</main>
	)
};

export default Content;