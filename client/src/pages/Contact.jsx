// IMPORT LIBRARY
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// IMPORT ELEMENT
import Input from '../components/elements/Input'
import AlertMessage from '../components/elements/AlertMessage'
import Button from '../components/elements/Button'

// IMPORT COMPONENT
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'


const Contact = () => {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();


    const sendMessage = async (e) => {
        try {
            e.preventDefault();

            const response = await axios.post("http://195.35.8.190:4001/api/messages", {
                email       : email,
                subject    : subject,
                message    : message
            });

            if (response) setSuccess(response.data.msg);
            setTimeout(() => { navigate('/'); }, 2000);
        } catch (error) {
            setError(error.response.data.msg);   
        }   
    }

    return (
        <div>
            <Navbar />
            <Jumbotron />

            <section className="bg-white">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Jika Anda Punya Pertanyaan, Silahkan Hubungi Kami dengan Mengisi Form dibawah ini</p>

                    {error && <AlertMessage type="error" message={error} color="red" />}
                    {success && <AlertMessage type="success" message={success} color="green" />}

                    <form onSubmit={sendMessage} className="space-y-8">
                        <Input type="email" name="email" id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="text" name="subject" id="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 capitalize">Your message</label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Tulis pesan mu disini"></textarea>
                        </div>

                        <Button type="submit" name="Send message" />
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Contact