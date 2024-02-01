import styles from './TableImc.module.css';

const TableImc = ({ resultImc }) => {
    return (
        <div className="container">
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    <tr className={Number(String(resultImc).replace(",", ".")) <= 18.5 ? styles.selectedField : null}>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                    </tr>
                    <tr className={Number(String(resultImc).replace(",", ".")) > 18.5 && Number(String(resultImc).replace(",", ".")) <= 24.9 ? styles.selectedField : null}>
                        <td>18,5 a 24,9</td>
                        <td>Normal</td>
                    </tr>
                    <tr className={Number(String(resultImc).replace(",", ".")) > 25 && Number(String(resultImc).replace(",", ".")) <= 29.9 ? styles.selectedField : null}>
                        <td>25 a 29,9</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr className={Number(String(resultImc).replace(",", ".")) > 30 && Number(String(resultImc).replace(",", ".")) <= 34.9 ? styles.selectedField : null}>
                        <td>30 a 34,9</td>
                        <td>Obesidade grau I</td>
                    </tr>
                    <tr className={Number(String(resultImc).replace(",", ".")) > 35 && Number(String(resultImc).replace(",", ".")) <= 39.9 ? styles.selectedField : null}>
                        <td>35 a 39,9</td>
                        <td>Obesidade grau II</td>
                    </tr>
                    <tr className={Number(String(resultImc).replace(",", ".")) > 40 ? styles.selectedField : null}>
                        <td>Maior que 40</td>
                        <td>Obesidade grau III</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableImc;