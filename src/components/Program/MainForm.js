import counter from "./counter";
function MainForm({setRes,res,err,setErr}) {
    const reset = () =>{
        setRes({arr:[],len:0})
    }

    return(
        <div className="mainForm">
            <form onSubmit={(event) => {
                event.preventDefault()
                const cubsNum = event.target.inputCubsNum.value
                const cubValue = event.target.inputCubValue.value
                const data = {cubsNum,cubValue}
                try{
                    setErr(false)
                    counter(data, setRes, res)

                } catch(error) {
                    setErr(error)
                }
            }}>

                <label> <p>Введите количество кубиков</p></label>
                <input type="text" name="inputCubsNum" defaultValue={1}/>
                <label> <p>Введите количество граней на одном кубике</p></label>
                <input type="text" name="inputCubValue" defaultValue={2}/>
                <label></label>
                <button>Посчитать</button>
                {!!res.len && <button onClick={reset}>Reset</button>}

            </form>
            {!!err
                ? <h2>{err}</h2>
                : (!!res.len  && <div>
                    <h2>Результат:</h2>
                    <h3>{res.arr[0]}</h3>
                </div>)}
        </div>
    )
}

export default MainForm