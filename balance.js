//user account balance
function Balance(){
  const ctx = React.useContext(UserContext);

  return (
    <Card
      txtcolor="blue"
      bgcolor="info"
      header="Account Balance"
      key={ctx.users[0].name}
      body={
        <>
          <ul className="list-group list-group-flush make-center bg-dark">
            <li className="list-group-item make-center">
              Account Balance ${ctx.users[0].balance}
            </li>
          </ul>
        </>
      }
    />
  );
}

function AllData(){
  const ctx = React.useContext(UserContext);

  
  return (
    <div className="card-group">
    <div className="card">
      <div className="card-header bg-info text-center text-white">
        User's Name
      </div>
      {ctx.users.map(({name}) => { return ( <>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center">{name}</li>
      </ul> </>)})} 
    </div> 
    <div className="card">
        <div className="card-header bg-info text-center text-white">
          Email
        </div>
        {ctx.users.map(({email}) => { return ( <>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">{email}</li> 
        </ul> </>)})}
      </div>
      <div className="card">
        <div className="card-header bg-info text-center text-white">
          Password
        </div>
        {ctx.users.map(({password}) => { return ( <>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">{password}</li>
        </ul> </>)})}
      </div>
      <div className="card">
        <div className="card-header bg-info text-center text-white">
          Balance
        </div>
        {ctx.users.map(({balance}) => { return ( <>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">$ {balance}</li>
        </ul> </>)})}
      </div> 
       
    </div> 
);
   
    
}
