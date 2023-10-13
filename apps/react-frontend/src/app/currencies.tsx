import axios from "axios"
import { useState } from "react";
import { Modal } from "@mui/material"

function Currencies() {
    const [value, setvalue] = useState("");
    const [modalIsOpen, setmodalIsOpen] = useState(false);

    function back(base: string, symbols: string) {
        return async function () {
            const g = await axios.get(`currency/exchangeCurrency/${base}/${symbols}`);
            setvalue(g.data);
            setmodalIsOpen(true);
        }
    }
    
    return (
        <div>
        <table>
        <tr key={1} onDoubleClick={back("USD", "JPY")}>
            <td>USD</td><td>JPY</td>
        </tr>
        <tr key={2} onDoubleClick={back("USD", "EUR")}>
            <td>USD</td><td>EUR</td>
        </tr>
        <tr key={3} onDoubleClick={back("USD", "RUB")}>
            <td>USD</td><td>RUB</td>
        </tr>
        <tr key={4} onDoubleClick={back("USD", "KZT")}>
            <td>USD</td><td>KZT</td>
        </tr>
        </table>
        <Modal
        open={modalIsOpen}
        onClose={() => {
            setmodalIsOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <img src={value} alt={value}/>
        </Modal>
        </div>
    )
}

export default Currencies;
