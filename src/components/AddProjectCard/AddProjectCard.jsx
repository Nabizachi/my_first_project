import React, { useState } from 'react'
import MyButton from '../../UI/MyButton/MyButton'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value

    }
}

const AddProjectCard = ({ onCreate }) => {

    const input = useInputValue('')

    const submitHandler = (event) => {

        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
            <input style={{ marginRight: '1rem' }} {...input.bind} />

            <MyButton type='submit'> Создать проект </MyButton>
        </form>
    )
}

export default AddProjectCard