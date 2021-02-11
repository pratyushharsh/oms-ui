import React from 'react'
import { OrderSearchResult } from '../store/search/types'
import SearchTable from './SearchTable'
import { Link } from 'react-router-dom';
import { dateFormatter } from '../utils/formatter'
import getSymbolFromCurrency from 'currency-symbol-map'

interface OrderSearchTableProps {
  orders: OrderSearchResult[]
}

const getSymbolFromLocale = (locale: string) => {

    if( locale === 'en_US'){
      return '$'
    }
    else if( locale === 'en_SA'){
      return '﷼'
    }
    else if( locale === '"ar_SA"'){
      return '﷼'
    }else{
      return '$'
    }

}


function OrderSearchTable(props: OrderSearchTableProps) {

  const tableHeader = [
    'ORDER ID',
    'CUSTOMER NAME',
    'ORDER DATE',
    'DELIVERY DATE',
    'ORDER TYPE',
    'ORDER STATUS',
    'TRACKING URL',
    'ORDER TOTAL',
    'AMOUNT DUE'
  ];
  const searchData = props.orders.map((data, idx) => {

    const currency = getSymbolFromLocale(data.locale)

    return [
      data.orderId,
      data.customerName,
      dateFormatter(data.orderDate),
      dateFormatter(data.orderDate),
      data.orderType,
      data.orderStatus,
      'https://staging-mumbai.fareye.co/v2/dashboard_44116369102',
      `${currency} ${data.orderTotal}`,
      `${currency} 0.00`
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
