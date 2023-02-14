function Toolbar({ filters, onSelectFilter, selected }) {
  return (
    <div className='toolbar'>
    {
        filters.map((item) => (
            <button 
                onClick={onSelectFilter}
                key={item}
                className={item === selected ? 'button_toolbar active' : 'button_toolbar'}
            >
                {item}
            </button>
        ))
    }
    </div>
  );
}

export default Toolbar;
