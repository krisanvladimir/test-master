import React from "react";

export const OrderList = props => {


    return (

        <div className='container'>
            <h1>Отчет</h1>
            <table>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Модель</th>
                    <th>Количество</th>
                    <th>Дата</th>
                    <th>Цена</th>
                </tr>
                </thead>
                <tbody>
                {Array.from(props.orders).map(order => {
                    return (
                        <tr key={order._id}>
                            <td>{order.user ? (order.user.lastName + ' ' + order.user.name): null}</td>
                            <td>{order.market ? (order.market === 'BMW' ? 'BMW X' + order.model.toString():'Audi Q' + order.model.toString()) : null}</td>
                            <td>{(order.count) || null}</td>
                            <td>{order.date ? (new Intl.DateTimeFormat('ru-Ru',{
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                            }).format(new Date(order.date))) : null}</td>
                            <td className='price'>{order.price ? (new Intl.NumberFormat('ru-RU', {
                                currency: 'rub',
                                style: 'currency'
                            }).format(order.price)) : null}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}