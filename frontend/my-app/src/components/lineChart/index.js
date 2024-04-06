
// import {
//     LineChart,
//     ResponsiveContainer,
//     Legend,
//     Tooltip,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
// } from "recharts";

const LineCharts = (props) => {
    const {details} = props
    console.log(details.offlineSales)
    return(
        <div>
            <p>{details.offlineSales}</p>
            {/* <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={details} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="offlineSales" interval={"preserveStartEnd"} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line
                        dataKey="offlineSales"
                        stroke="webSales"
                        activeDot={{ r: 8 }}
                    />
                    <Line dataKey="webSales" stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer> */}
        </div>
    )
}

export default LineCharts