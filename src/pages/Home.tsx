import Background from '../assets/carInDesert.jpg'

const Home = () => {
  return (
    <div 
        style={{ backgroundImage: `url(${ Background })`}} 
        className='flex flex-row justify-center mx-auto sm:bg-cover bg-fixed'
        >
            <div className='flex place-items-center h-screen'>
                <h3 className='p-5 bg-white bg-opacity-25 text-black rounded'>My Car Inventory</h3>
            </div>
    </div>
  )
}

export default Home