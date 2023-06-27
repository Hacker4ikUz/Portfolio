import emailjs from '@emailjs/browser';

export function Contact() {
    const sendEmail = (e:any) => {
        e.preventDefault()
        alert('Xabaringiz yuborildi!')
        emailjs.sendForm('service_56kg0dm', 'template_y6mt01v', e.target, 'maooItRJKiIEJP79j')
    }
    return (
        <div className="contact" id='contact'>
            <h2>Get in Touch</h2>
            <form onSubmit={sendEmail}>
                <input type="text" name='ism' placeholder="Name"/>
                <input type="tel" name='nomer' placeholder="Tel"/>
                <input type="text" name='email_from' placeholder='Email' />
                <input type="text" name='message' placeholder="Message" />
                <button>Send Message</button>
            </form>
        </div>
    )
}