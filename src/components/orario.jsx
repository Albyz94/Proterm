function Orario (props) {
    return (
        <div className={props.class}>
            <p>
                <table>
                    
                        <td>
                        <tr>Lunedi</tr>
                        <tr>Martedi</tr>
                        <tr>Mercoledi</tr>
                        <tr>Giovedi</tr>
                        <tr>Venerdi</tr>
                        <tr>Sabato</tr>
                        <tr>Domenica</tr>

                        </td>
                        <td>
                        <tr>8:30 - 18:30</tr>
                        <tr>8:30 - 18:30</tr>
                        <tr>8:30 - 18:30</tr>
                        <tr>8:30 - 18:30</tr>
                        <tr>8:30 - 18:30</tr>
                        <tr>Chiuso</tr>
                        <tr>Chiuso</tr>
                        </td>
                    
                </table>
            </p>
        </div>
    )
}

export default Orario;