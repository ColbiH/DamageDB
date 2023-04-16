const SearchButton = ({ onSearch }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '17px' }}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={onSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchButton;
