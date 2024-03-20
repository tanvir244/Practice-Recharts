import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 90 },
        { id: 2, name: "Bob", math: 72, physics: 65, chemistry: 80 },
        { id: 3, name: "Charlie", math: 90, physics: 85, chemistry: 92 },
        { id: 4, name: "David", math: 68, physics: 60, chemistry: 75 },
        { id: 5, name: "Emma", math: 78, physics: 72, chemistry: 85 },
        { id: 6, name: "Frank", math: 88, physics: 82, chemistry: 94 },
        { id: 7, name: "Grace", math: 95, physics: 88, chemistry: 97 },
        { id: 8, name: "Henry", math: 62, physics: 55, chemistry: 70 },
        { id: 9, name: "Ivy", math: 80, physics: 75, chemistry: 88 },
        { id: 10, name: "Jack", math: 75, physics: 68, chemistry: 82 }
    ];

    return (
        <div>
            <h2 className='py-4 bg-zinc-600 text-2xl px-12 mb-8 text-white font-semibold'>Line Chart</h2>
            <LChart width={800} height={400} data={studentData}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={"physics"} stroke='yellow'></Line>
                <Line dataKey="chemistry" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;