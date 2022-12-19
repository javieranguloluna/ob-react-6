import FilterContainer from '../container/FilterContainer';

const Filteroptions = () => {

    return (
        <div className='filters'>
            {/* Filter Containers */}
            <FilterContainer filter='SHOW_ALL'>
                ALL
            </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>
                ACTIVE
            </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>
                COMPLETED
            </FilterContainer>
        </div>
    );
};


export default Filteroptions;
