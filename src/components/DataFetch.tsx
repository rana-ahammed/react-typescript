const DataFetch = ({ status }: { status: 'loading' | 'error' | 'success' }) => {
	if (status === 'loading') {
		return <h2>Data is loading...</h2>;
	} else if (status === 'error') {
		<h2>Error</h2>;
	}
	return (
		<div>
			<h2>Data Fetched Successfully</h2>
		</div>
	);
};

export default DataFetch;
