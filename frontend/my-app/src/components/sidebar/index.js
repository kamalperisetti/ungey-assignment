import './index.css'
import { MdDashboard } from "react-icons/md";

import { MdOutlineSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from 'react';
import BarChart from '../barChart';
import Products from '../products';
//import LineCharts from '../lineChart';

import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";
 


const Sidebar = () => {
    const [yearData, setYearData] = useState([])
    const [productData, setProductData] = useState([])
    const [pdata, setCustomerDevice] = useState([])
    //console.log(customerDevice)
    useEffect(() => {
        getTheComparison()
        getThePoducts()
        getTheCustomer()
    }, [])

    const getTheComparison = async() => {
        let url = "http://localhost:5001/comparison" 
        const data = await fetch(url)
        const res = await data.json()
        let formateData = res.map(each => ({
            Month : each.Month,
            lastYear :each.Last_year,
            thisYear : each.This_year
        }))
        setYearData(formateData)
    }

    const getThePoducts = async() => {
        let url = "http://localhost:5001/products"
        const data = await fetch(url)
        const res = await data.json()
        const formatedData = res.map(each => ({
            product: each.Product,
            rating: each.rating,
            revenue: each.revenue,
            soldAmount: each.sold_amount,
            unitPrice: each.unit_price
        }))
        setProductData(formatedData)
    }   

    const getTheCustomer = async() => {
        let url = "http://localhost:5001/customersbydevice"
        const data = await fetch(url)
        const res = await data.json()
        const formatedData = res.map(each => ({
            date: each.date,
            offlineSales: each.offline_sales,
            webSales: each.web_sales
        }))
        setCustomerDevice(formatedData)
    }

    return(
        <div className='main'>
            <div class = "side-bar">
                <div>
                    <h3>Salesway</h3>
                    <p ><MdOutlineSettings/> Settings</p>
                    <p> <CgProfile /> Team</p>
                    <p>MENU</p>
                    {/* <MdDashboard /> */}
                    <p><MdDashboard/> Dashboard</p>
                    <p>Campaigns</p>
                    <p>Flows</p>
                    <p>Integrations</p>
                    <p>Customers</p>
                </div>
                <div>
                    <p>Tom Wang</p>
                </div>
        
            </div>
            <div className='middle-container'>
                <div className='content-header'>
                    <h1>Dashboard</h1>
                    <div>
                        <p>Compare to</p>
                        <select>
                            <option>Last year</option>
                            <option>This year</option>
                        </select>
                    </div>
                </div>
                <div className='purches-container'>
                    <div className='purches'>
                        <p className='p'>Purchase</p>
                        <h1 className='h1'>4,294</h1>
                    </div>
                </div>
                <div className='comparison-container'>
                    <div>
                        <h2>Comparison</h2>
                        <select>
                            <option>6 months</option>
                            <option>1 year</option>
                        </select>
                    </div>
                    <div className='barchart-container'>
                        <BarChart data = {yearData} />
                    </div>
                    </div>
                <div className='product-container'>
                    <div>
                        <h3>Top Products</h3>
                        <button>Full results</button>
                    </div>
                    <div >
                        <ul>
                            <li className="product-details">
                                <p className='productname'>Product</p>
                                <p>Sold amount</p>
                                <p>Unit price</p>
                                <p>Revenue</p>
                                <p>Rating</p>
                            </li>
                            <hr />
                            {productData.map((each) => (
                                <Products details = {each} />
                            ))}
                        </ul>
                        
                    </div>
                    
                </div>
                
            </div>
            <div className='last-container'>
                <div>
                    <h3>Customers by device</h3>
                    <ResponsiveContainer width="200%" aspect={3}>
                        <LineChart data={pdata} margin={{ right: 300 }}>
                            <CartesianGrid />
                            <XAxis dataKey="date" interval={"preserveStartEnd"} />
                            <YAxis></YAxis>
                            <Legend />
                            <Tooltip />
                            <Line
                                dataKey="webSales"
                                stroke="#B1EFFE"
                                activeDot={{ r: 8 }}
                            />
                            <Line  dataKey="offlineSales"   stroke="#0067F6"/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Sidebar