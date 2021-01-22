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
      data.orderId,
      data.orderDate,
      data.customerId,
      data.customerName,
      data.orderType,
      data.orderStatus,
      data.orderTotal] 
  })

  const onRowClick = 'history.push(`/order?orderId=${t[0]}`)';

  return (
    <div>
      <SearchTable tableName={'ORDER SEARCH RESULT'} tableHeader={tableHeader} tableBody={searchData} onRowClick={ onRowClick }/>
    </div>
  )
}

export default OrderSearchTable
