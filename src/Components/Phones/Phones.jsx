import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phonesWithFakeData);
                console.log(phonesWithFakeData)
            })
    }, [])

    return (
        <div className="mb-16">
            <h2 className='py-4 bg-zinc-600 text-2xl px-12 my-8 text-white font-semibold'>Tiny Bar Chart</h2>
            <BarChart width={900} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey='name'/>
                <YAxis />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default Phones;