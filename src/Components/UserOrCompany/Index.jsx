function UserOrCompany({ setState, value }) {
  return (
    <div>
      <label htmlFor='one' onChange={(e) => setState(e.target.defaultValue)}>
        Usuário
        <input type='radio' name='one' value='user' />
        Companhia
        <input type='radio' name='one' value='company' />
      </label>
    </div>
  );
}

export default UserOrCompany;
