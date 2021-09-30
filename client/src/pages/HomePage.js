import React, {useCallback, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hooks";
import {OrderList} from "../components/OrderList";

export const HomePage = () => {
    const [orders, setOrders] = useState([])
    const [form, setForm] = useState('0')
    const {request} = useHttp()
    const [state, setState] = useState([])

    const fetchOrders = useCallback(async () => {
        try {
            const data = await request('/api/get', "GET", null)
            setOrders(data)
            setState(data)
        } catch (e) {}
    }, [request])

    useEffect( () => {
        fetchOrders()
    },[fetchOrders])

    const changeHandler = event => {
        setForm(event.target.value)

    }

    const submitHandler = event => {
        event.preventDefault()
        console.log(form)
        switch (form) {
            case "0": {
                const candidate = [...state.map(o => ({market: o.market, model: o.model, price: o.price, _id: o._id}))]
                candidate.sort((a,b) => a.price - b.price)
                setOrders(candidate)
                break
            }
            case "1": {
                const candidate = [...state.map(o => ({user: o.user, market: o.market, model: o.model, price: o.price, count: o.count, _id: o._id}))]
                candidate.sort((a,b) => b.price - a.price)
                setOrders(candidate)
                break
            }
            case "2": {
                let candidate = [...state.map(o => ({user: o.user, price: o.price, _id: o._id}))]

                candidate.sort((a, b) => {
                    const nameA=a.user.lastName.toLowerCase(), nameB=b.user.lastName.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                })

                candidate = candidate.filter(c => (c.price > 2500)).map(c => ({user: c.user}))

                for(let i = 0; i < candidate.length - 1; i++) {
                    for(let j = i; j < candidate.length; j++)
                    if (candidate[i].user.lastName === candidate[j].user.lastName){
                        candidate.splice(j, 1)
                    }
                }
                setOrders(candidate)
                break
            }
            case "3": {
                const candidate = [...state.map(o => ({user: o.user, date: o.date, price: o.price, _id: o._id}))]
                candidate.sort((a,b) => b.price - a.price)
                setOrders(candidate)
                break
            }

            default: return 0
        }
    }

    return (
        <React.Fragment>
            <OrderList orders={orders}/>
            <form action="/" onSubmit={submitHandler}>
                <div className="row flexed" >
            <div className="input-field col s6 offset-s3">
            <select className='browser-default' onChange={changeHandler} >
                <option value='0' selected>Вариант a)</option>
                <option value="1">Вариант b)</option>
                <option value="2">Вариант c)</option>
                <option value="3">Вариант d)</option>
            </select>

            </div>
            <div className="card-action">
                <button
                    className='btn yellow darken-4'
                >
                    Показать
                </button>
            </div>
            </div>
            </form>
        </React.Fragment>
    )
}