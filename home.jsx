import { Link } from 'react-router-dom';

export default function Home() {

    return(
        <>
        <div className="ml-50 ">
            <div className="mt-82 mb-10">

            <h1>Hi</h1>
            <br/>
            <h1>I'm Ryan,</h1>
            <br/>
            <h1>aspiring software engineer.</h1>
            <br/>
            <h2>Computer Science & AI, 2027 at Wilfrid Laurier University</h2>

        </div>
        <Link to="/contact">
            <button className="border-1 p-1 cursor-pointer text-rose-500 hover:bg-rose-500 hover:text-black hover:border-rose-500">
            CONTACT ME
            </button>
        </Link>
        </div>
        </>

    );

}
