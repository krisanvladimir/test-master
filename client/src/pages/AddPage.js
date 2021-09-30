import React, {useState} from "react";
import {useHttp} from "../hooks/http.hooks";

export const AddPage = () => {
    const [form, setForm] = useState({})
    const {request} = useHttp()

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const submitHandler = async event => {
        try{
            const data = await request('api/add', 'POST', {...form})
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='row'>
            <div className="col s6 offset-s3">
                <h1>Сделать заказ</h1>
                <div className="card blue-grey">
                    <form action="/order" onSubmit={submitHandler}>
                    <div className="card-content white-text">
                        <span className="card-title">Данные заказа</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Введите Имя"
                                    id="name"
                                    type="text"
                                    name='name'
                                    className="validate"
                                    onChange={changeHandler}
                                    required
                                />
                                <label htmlFor="name"/>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Введите Фамилию"
                                    id="lastName"
                                    type="text"
                                    name='lastName'
                                    className="validate"
                                    onChange={changeHandler}
                                    required
                                />
                                <label htmlFor="lastName"/>
                            </div>
                        </div>
                        <p>
                            <label>
                                <input name="market" type="radio" value='BMW' onChange={changeHandler} required/>
                                <span>BMW-салон</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="market" type="radio" value='Audi' onChange={changeHandler} required/>
                                <span>AUDI-салон</span>
                            </label>
                        </p>
                        <div className='mr2'>
                            <label>
                                <input name="model" type="radio" value='3' onChange={changeHandler} required/>
                                <span>3</span>
                            </label>
                            <label>
                                <input name="model" type="radio" value='5' onChange={changeHandler} required/>
                                <span>5</span>
                            </label>
                            <label>
                                <input name="model" type="radio" value='6' onChange={changeHandler} required/>
                                <span>6</span>
                            </label>
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Количество"
                                id="count"
                                type="number"
                                name='count'
                                className="validate"
                                onChange={changeHandler}
                                required
                            />
                            <label htmlFor="count"/>
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Сумма"
                                id="price"
                                type="number"
                                name='price'
                                className="validate"
                                onChange={changeHandler}
                                required
                            />
                            <label htmlFor="price"/>
                        </div>
                    </div>

                    <div className="card-action">
                        <button
                            className='btn yellow darken-4'
                           type="submit"
                        >
                            Оформить заказ
                        </button>
                    </div>
                    </form>
                </div>

            </div>
        </div>
    )
}