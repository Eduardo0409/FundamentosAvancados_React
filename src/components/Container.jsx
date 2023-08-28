
const Container = ({ valor, children }) => {
  return (
    <div>
        <h2>Este seria o titulo do container</h2>
        {children}
        <p>O valor seria: {valor}</p>
    </div>
  )
}

export default Container