import { useEffect, useState } from "react";
import axios from "axios";

export default function Post() {
    const [create, setCreate] = useState(false);
    const [data, setData] = useState([])
    const [name, setName] = useState();
    const [lastName, setlastName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    console.log(name);

    const handleSubmit = () => {
        axios.post("http://localhost:8080/createUsers", {
            first_name: name,
            last_name: lastName,
            age: age,
            email: email
        });
        fetchData();
    }

    const fetchData = () => {
        axios.get("http://localhost:8080/users")
        .then(res => {
            setData(res.data)
        })
    }

    useEffect(() => {   
        fetchData();
    }, [])

    return (
        <div className="p-4">
            <div className="flex items-center space-x-4">
                <p className="text-3xl font-bold">Post page:</p>
                <button 
                onClick={() => setCreate ((o) => !o)}
                className="bg-blue-400 rounded-lg p-4 text-white text-xl">Create account
                </button>
            </div>
            {create === true && (
                <div className=" m-4 space-y-4">
                <div>
                    <label>First name:</label>
                    <input type= "text"
                    value={name}
                    onChange = { (e) => setName(e.target.value)}
                     className="bg-white rounded-lg border p-6 ml-4"
                    placeholder="first name..."/>
                </div>
                <div>
                    <label>Last name:</label>
                    <input type= "text"
                    value={lastName}
                    onChange = { (e) => setlastName(e.target.value)}
                     className="bg-white rounded-lg border p-6 ml-4"
                    placeholder="last name..."/>
                </div>
                <div>
                    <label>Age:</label>
                    <input type= "text"
                    value={age}
                    onChange = { (e) => setAge(e.target.value)}
                     className="bg-white rounded-lg border p-6 ml-4"
                    placeholder="last name..."/>
                </div>
                <div>
                    <label>E-mail:</label>
                    <input type= "text"
                    value={email}
                    onChange = { (e) => setEmail(e.target.value)}
                     className="bg-white rounded-lg border p-6 ml-4"
                    placeholder="last name..."/>
                </div>
                <button className="bg-red-400 rounded-2xl p-3 text white text-2xl" onClick={handleSubmit}
                >Save</button>
                </div>
            )}
            {data.map((item) => (
  <p key={item.id}>{item.age}</p>
))}

        </div>
    );
}