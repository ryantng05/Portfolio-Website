import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

export default function Contact() {

    return(
        <>
            <div className="ml-50">
                <h1 className="text-5xl font-bold text-yellow-400 mb-8 mt-20">Contact</h1>
                <div className="ml-5 text-1xl">
                    <p>
                    Thank you for your interest in getting in touch! <br></br><br></br>I value open communication and welcome any inquiries,<br></br>
                     feedback, or collaboration opportunities. Please don't hesitate<br></br> to get in touch with me by filling out the contact form.
                    </p>
                </div>

                <div className='mt-25 ml-5'>
                    <button className='mr-40 cursor-pointer'>
                    <AiFillLinkedin></AiFillLinkedin>
                    </button>
                    <button className='cursor-pointer'>
                        <AiOutlineMail></AiOutlineMail>
                    </button>
                </div>
            </div>
        </>
    )

}