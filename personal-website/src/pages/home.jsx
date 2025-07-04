import { Link } from 'react-router-dom';

export default function Home() {

    return(
        <section className='min-h-screen
        p-8
        flex flex-col justify-center items-start
        bg-gradient-to-b from-blue-800 to-teal-400
        to-teal-400'>
        <div className="ml-50 ">
            <div className="text-3xl md:text-3xl font-extrabold text-white mb-2">

                <h1>Hi</h1>
                <br/>
                <h1>I'm Ryan,</h1>
                <br/>
                <h1>aspiring software engineer.</h1>
                <br></br>

            </div>
            <h2 className='mb-10 text-white text-sm tracking-widest'>Computer Science & AI, 2027 at Wilfrid Laurier University</h2>
        <Link to="/contact">
            <button className="px-8 py-3
            border-2 border-yellow-400
            text-yellow-400 uppercase tracking-wider
            hover:bg-yellow-400 hover:text-blue-900
            transition-colors duration-200 cursor-pointer">
            CONTACT ME
            </button>
        </Link>
        </div>
        </section>

    );

}