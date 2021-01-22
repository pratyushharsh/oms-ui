import React from 'react'
import { OrderSearchResult } from '../store/search/types'
import SearchTable from './SearchTable'
import { Link } from 'react-router-dom';

interface OrderSearchTableProps {
  orders: OrderSearchResult[]
}

function OrderSearchTable(props: OrderSearchTableProps) {

  const tableHeader = [
    'ORDER ID',
    'ORDER DATE',
    'CUSTOMER ID',
    'CUSTOMER NAME',
    'ORDER TYPE',
    'ORDER STATUS',
    'ORDER TOTAL'
  ];
  const searchData = props.orders.map((data, idx) => {
    return [
      <Link to={`/order?orderId=${data.orderId}`} >{data.orderId}</Link>,
      data.orderDate,
      data.customerId,
      data.customerName,
      data.orderType,
      data.orderStatus,
      data.orderTotal] 
  })

  return (
    <div>
      <SearchTable tableName={'ORDER SEARCH RESULT'} tableHeader={tableHeader} tableBody={searchData}/>
    </div>
  )
}

export default OrderSearchTable
