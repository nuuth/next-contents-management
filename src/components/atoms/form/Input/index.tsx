type InputProps = {
  type: 'text' | 'password' | 'hidden'
}

const Input: React.FC<InputProps> = ({ type }) => (
  <>
    <input type={type} className="input" />
  </>
)

export default Input
