import styles from "./ResultImc.module.css";

const ResultImc = ({ resultImc }) => {
    return (
        <div className={`container ${styles.containerResult}`}>
            <h2>Seu IMC é de {resultImc} kg/m2.</h2>
        </div>
    )
}

export default ResultImc;