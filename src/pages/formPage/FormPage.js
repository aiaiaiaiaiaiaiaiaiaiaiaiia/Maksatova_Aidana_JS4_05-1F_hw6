import React, {useState} from 'react';

function FormPage() {
    const [data, setData] = useState({
        info: {
            name: "",
            lastname: "",
            gender: "",
            status: "Не в браке"
        }
    })

    const getData = (e) => {

        setData({
            ...data,
            info: {
                ...data.info,
                [e.target.name]: e.target.value,
            }
        })
    }

    const submit = () => {
        console.log(data);
    }

    return (
        <div>
            <input type="text" name="name" placeholder="Name" onChange={getData}/>
            <input type="text" name="lastname" placeholder="Lastname" onChange={getData}/>
            <input type="checkbox" name='status' value="В браке" onChange={getData}/>
            <select name="gender" onChange={getData}>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
            </select>
            <button onClick={submit}>Add User</button>
        </div>
    );
}

export default FormPage;