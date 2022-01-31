const Content = () => {
	const handleNameChange = () => {
		const names = ['Bob', 'Kevin', 'Gian'];
		const int = Math.floor(Math.random() * 3);
		return names[int];
	}

    const handleClick = () => {
        console.log('You clicked it')
	}

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
	}

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
	}

	return (
			<main>
				<p onDoubleClick={handleClick}>
                    {/* when the function called has paramenters
                    (use parenthesis) 
                    it is called inmediately */}
					Hello {handleNameChange()}!
				</p>
                {/* does not have "()" to do not make the call inmediately */}
				<button onClick={handleClick}>Click it</button>
                {/* the following button has an onclick function with paramenters
                but it is not called inmediately because it has an annonymous
                function calling it, that it starts when the onclick is done */}
				<button onClick={() => handleClick2('Gian')}>Click it</button>
				<button onClick={(e) => handleClick3(e)}>Click it</button>
			</main>
	)
};

export default Content;
