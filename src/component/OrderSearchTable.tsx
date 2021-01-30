import React from 'react'
import { OrderSearchResult } from '../store/search/types'
import SearchTable from './SearchTable'
import { Link } from 'react-router-dom';
import { dateFormatter } from '../utils/formatter'

interface OrderSearchTableProps {
  orders: OrderSearchResult[]
}

function OrderSearchTable(props: OrderSearchTableProps) {

  const tableHeader = [
    'ORDER ID',
    'CUSTOMER NAME',
    'ORDER DATE',
    'DELIVERY DATE',
    'ORDER TYPE',
    'ORDER STATUS',
    'ORDER TOTAL',
    'AMOUNT DUE'
  ];
  const searchData = props.orders.map((data, idx) => {
    return [
      data.orderId,
      data.customerName,
      dateFormatter(data.orderDate),
      dateFormatter(data.orderDate),
      data.orderType,
      data.orderStatus,
      data.orderTotal,
      0.00
    ] 
  })

  const onRowClick = 'history.push(`/order?orderId=${t[0]}`)';

  return (
    <div>
      <SearchTable tableName={'ORDER SEARCH RESULT'} tableHeader={tableHeader} tableBody={searchData} onRowClick={ onRowClick }/>
    </div>
  )
}

export default OrderSearchTable
