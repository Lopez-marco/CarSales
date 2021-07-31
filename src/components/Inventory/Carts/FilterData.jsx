import React, {useState, useEffect} from 'react';

const FilterData = (props) => {

    const show = () => {
        console.log(props.filteredData)
        return props.filteredData.map((value,index)=>{
        return(
        <div key={value.id}>
        <div>
        {value.year}
        </div>
        </div>
        )
        })
    }

    return ( <div>
        {show()}
    </div> );
}
 
export default FilterData;