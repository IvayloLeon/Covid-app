import React from 'react'

export const Data = React.memo(({information}) => {

    const {Country, TotalConfirmed, TotalDeaths, NewConfirmed, NewDeaths} = information;
    
    return (
        <div className='text-center'>
            <h3>Country: {Country}</h3>
            <h3>Total confirmed: {TotalConfirmed}</h3>
            <h3>Total deaths: {TotalDeaths}</h3>
            <h3>New confirmed today: {NewConfirmed}</h3>
            <h3>New deaths today: {NewDeaths}</h3>
        </div>
    )
});