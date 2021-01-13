import React from 'react'

const getStyle = (val : string) => {
    
      switch(val){
  
        case '0':
          return {
            color: '#3CB371',
            backgroundColor: '#90EE90',
            borderRadius: '10px',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            height: '30px'
          }
  
          case 'Cancelled':
            return {
              color: 'red',
              backgroundColor: 'black'
            }
  
           default :
            return {}
      }
      
    }

function OrderStatus(props: any) {
    return (
        <div style = {getStyle(`${ props.orderValue }`)}>
            {props.orderValue}
        </div>
    )
}

export default OrderStatus

