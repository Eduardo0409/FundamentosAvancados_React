
const UserDetails = ({ nome, idade, profissao}) => {

    return (
        <div>
            <h2>{nome}</h2>
            <p>{idade} anos</p>
            <p>{profissao}</p>
            {idade >= 18 ? (
                <p>{nome} <strong>pode</strong> tirar carteira de habilitação</p>
            ) : (
                <p>{nome} <strong>não pode</strong> tirar a carteira de habilitação.</p>
            )}
        </div>
    )
}

export default UserDetails