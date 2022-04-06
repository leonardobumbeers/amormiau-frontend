import { useState, useEffect } from "react";

export default function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [birtDate, setBirtDate] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  // signup user
  const signupUser = async () => {
    const response = await fetch(
      "https://amormiau-backend.herokuapp.com/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpf,
          rg,
          birtDate,
          phone,
          address,
          city,
          state,
        }),
      }
    );

    const data = await response.json();

    console.log(data);
  };

  // create signup form with signupUser function
  return (
    <div
      className="container"
      style={{
        //center and add beatiful style
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        color: "white",
        fontFamily: "Roboto",
        fontSize: "1.5rem",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      <div
        className="row"
        style={{
          //create a betiful section of form
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: "10px",
        }}
      >
        <div className="col-md-6 mt-5 mx-auto">
          <form
            noValidate
            onSubmit={signupUser}
            style={{
              //create a betiful form
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "10px",
              padding: "20px",
              color: "white",
              fontFamily: "Roboto",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
              border: "1px solid white",
              borderRadius: "10px",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              fontFamily: "Roboto",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
              border: "1px solid white",
              borderRadius: "10px",
            }}
          >
            <h1 className="h3 mb-3 font-weight-normal">Cadastro</h1>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                className="form-control"
                id="cpf"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rg">RG</label>
              <input
                type="text"
                className="form-control"
                id="rg"
                placeholder="RG"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="birtDate">Data de Nascimento</label>
              <input
                type="date"
                className="form-control"
                id="birtDate"
                placeholder="Data de Nascimento"
                value={birtDate}
                onChange={(e) => setBirtDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">Estado</label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="Estado"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Cadastrar
            </button>
            <p className="forgot-password text-right">
              Já possui uma conta?
              <a href="/login"> Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
