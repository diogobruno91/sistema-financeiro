
import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";
import { newDateAdjusted } from '../../helpers/dateFilter';

type Props = {
    onAdd : (item: Item) => void;
}

export const AreaInserir = ({ onAdd }: Props) => {
    const [date, setDate]         = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle]       = useState('');
    const [value, setValue]       = useState(0);

    const handleAddEvent = () => {

        let newItem: Item = {
            date: newDateAdjusted(date),
            category: category,
            title: title,
            value: value
        };

        onAdd(newItem);
    }

    return(
        <C.Container>
            <label> Data:</label>
            <input  type="date" onChange={e => setDate(e.target.value)} />
            <label> Categoria:</label>
            <input type="text" onChange={e => setCategory(e.target.value)} />
            <label> Titulo:</label>
            <input type="text" onChange={e => setTitle(e.target.value)} />
            <label> Preço:</label>
            <input type="number" onChange={e => setValue(parseFloat(e.target.value))} />
            <button onClick={handleAddEvent}> Adicionar</button>
        </C.Container>
    );
}