import './index.css'
import { MdDashboard } from "react-icons/md";

import { MdOutlineSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from 'react';
import BarChart from '../barChart';
import Products from '../products';
//import LineCharts from '../lineChart';
import { LiaChartBarSolid } from "react-icons/lia";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import { MdOutlinePower } from "react-icons/md";
import image from './Ellipse.png'

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
        let url = "https://ungray-assignment.onrender.com/comparison" 
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
        let url = "https://ungray-assignment.onrender.com/products"
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
        let url = "https://ungray-assignment.onrender.com/customersbydevice"
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
                    <p><LiaChartBarSolid /> Campaigns</p>
                    <p><MdOutlineAlignHorizontalLeft /> Flows</p>
                    <p><MdOutlinePower /> Integrations</p>
                    <p>Customers</p>
                </div>
                <div>
                
                    <p className='profile'><img className='img' src={image} alt = 'img'/>  Tom Wang</p>
                </div>
        
            </div>
            <div className='middle-container'>
                <div className='content-header'>
                    <h1>Dashboard</h1>
                    <div className='dashboard'>
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
                        <h2 className='h1'>4,294</h2>
                    </div>
                    <div className='purches'>
                        <p className='p'>Revenue</p>
                        <h2 className='h1'>$322,3k</h2>
                    </div>
                    <div className='purches'>
                        <p className='p'>Refunds</p>
                        <h2 className='h1'>$8,2k</h2>
                    </div>
                </div>
                <div className='comparison-container'>
                    <div className='comparison'>
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
                    <div className='top-products'>
                        <h3>Top Products</h3>
                        <button className='full-result-btn'>Full results</button>
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
                <div className='your-good-container'>
                    <p>That redar</p>
                    <hr />
                    <h2>You're good!</h2>
                    <p>Your sales performance score is better then 80% other users</p>
                    <button className='improve-btn'>Improve your score</button>
                </div>
                <div className='customer-container'>
                    <h3>Customers by device</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={pdata} margin={{ bottom:20, left:20 }}>
                            <CartesianGrid />
                            <XAxis type= "name" dataKey="webSales" />
                            <YAxis type= "number"></YAxis>
                            <Legend />
                            <Tooltip />
                            <Line
                                dataKey="offlineSales"
                                stroke="#B1EFFE"
                            />
                            <Line  dataKey="webSales" stroke="#0067F6"/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='community-container'>
                    <p>Community feedback</p>
                    <h2>Mostly positive</h2>
                    <div className='community'>
                        <div>
                            <p>Negative</p>
                            <b>12</b>
                        </div>
                        <div>
                            <p>Netural</p>
                            <b>34</b>
                        </div>
                        <div>
                            <p>Positive</p>
                            <b>134</b>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar