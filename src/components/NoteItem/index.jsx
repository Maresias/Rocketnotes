import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles"


export function NoteItem({isNew, value, onClick, ...rest}) {
    return (
        <Container>
            <input
             type="text" 
             value={value}
             {...rest}
            />

            <button
            type="button"
            onClick={onClick}
            >
                {isNew? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}