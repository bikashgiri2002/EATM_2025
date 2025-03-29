import {useState} from 'react'

const Bmi = () => {
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0) 
    const [bmi, setBmi] = useState(0)
    const [status, setStatus] = useState('')

    const calculateBmi = () => {
        const h = height / 100;
        const bmi = weight / (h * h)
        setBmi(bmi);
        if (bmi < 18.5) {
            setStatus('Underweight')
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            setStatus('Normal weight')
        } else if (bmi >= 25 && bmi <= 29.9) {
            setStatus('Overweight')
        } else if (bmi >= 30) {
            setStatus('Obesity')
        }
    }
  return (
    <div>
        <div className='flex flex-col items-center justify-around h-96 bg-gray-600 text-white border rounded-2xl w-80'>
            <div>
                <label htmlFor="">Height: </label>
                <input className='bg-gray-200 text-black' type='number' value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Weight: </label>
                <input className='bg-gray-200 text-black' type='number' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <button type='button' onClick={calculateBmi} className='bg-blue-500 text-white p-2 rounded-lg'>Calculate</button>
        </div>
        {
            status && <div>
                <h2>Your BMI is: {bmi.toFixed(2)}</h2>
                <h2>Status: {status}</h2>
                <div className={` w-10 h-10 ${bmi < 18.5 ? 'bg-yellow-500' : 'bg-green-600'}`}>
                </div>
            </div>
        }
    </div>
  )
}

export default Bmi


// condition ? true : false

// role == 'admin' ? <Admin /> : <User />

// if (role == 'admin') {
//     return <Admin />
// } else {
//     return <User />
// }