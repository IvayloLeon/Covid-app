import { useState } from 'react'
import { Data } from './Data';
import Swal from 'sweetalert2'

export const CovidScreen = () => {

    const [country, setCountry] = useState('');
    const [active, setActive] = useState(false);
    const [information, setInformation] = useState({})

    const getData = async (e) => {
        if (e) {
            e.preventDefault();
        }
        const url = `https://api.covid19api.com/summary`;

        const resp = await fetch(url);
        const data = await resp.json();

        const newData = (data.Countries);

        const newData2 = newData.find(newData => newData.Slug === country.toLowerCase());

        if (newData2 !== undefined) {
            setActive(true)
            setInformation(newData2)
            return newData2
        }

        if (country === false) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Debes poner un país!'
            })
        }

        if (country) {
            Swal.fire({
                icon: 'error',
                title: 'Oops... País no encontrado',
                text: 'Para buscar un país con espacios, por ejemplo: Estados Unidos. Debes poner: united-states '
            })
        }
    }

    return (
        <div>
            <h2 className='text-center mb-4'>Covid Screen</h2>
            <form onSubmit={getData} className='text-center mb-4'>
                <input
                    type="text"
                    placeholder='Search a country'
                    className='form-control'
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                <button type='submit' className='btn btn-outline-primary mt-3'>
                    Submit
                </button>
            </form>

            <hr />

            {active && <Data information={information} />}
        </div>
    )
}
