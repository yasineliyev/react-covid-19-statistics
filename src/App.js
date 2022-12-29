import React,{useEffect,useState} from "react";
import axios from "axios";

function App() {

  const [info,setInfo]=useState("");
  const [date,setDate]=useState("");

  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=>setInfo(res.data[date]))
    .catch(err=>console.log(err))
  },[info,date]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-center text-white display-3">TÜRKİYƏ üçün COVID-19 Statistikası</h2>
            <input type="text" placeholder="GG/AA/YY" className="form-control" onChange={(e)=>setDate(e.target.value)}/>
              <table className="table table-striped text-white">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Test sayı</th>
                    <th scope="col">Xəstə sayı</th>
                    <th scope="col">Ölüm sayı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={info===undefined ? "bg-danger" : "bg-success"}>
                    <th className="text-white" scope="row">{info===undefined ? "Məlumat gözlənilir" : info.date}</th>
                    <td className="text-white">{info===undefined ? "Məlumat gözlənilir" : info.tests}</td>
                    <td className="text-white">{info===undefined ? "Məlumat gözlənilir" : info.patients}</td>
                    <td className="text-white">{info===undefined ? "Məlumat gözlənilir" : info.deaths}</td>
                  </tr>
                </tbody>
              </table>
              <h6 className="text-warning">Qeyd: Yalnız 11/03/2020 və 31/05/2022 tarixləri arasında olan məlumatları əldə edə bilərsiniz.</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;