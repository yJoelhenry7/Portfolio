import { useState } from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';

const encode = (data) => new URLSearchParams(data).toString();
const inputStyle = 'w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-purplish';

const Contact = () => {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const form = e.target;
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', 'bot-field': form['bot-field'].value, ...values }),
      });
      if (!res.ok) throw new Error(res.statusText);
      setValues({ name: '', email: '', subject: '', message: '' });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col items-center text-white py-12 px-4">
      <h1 className="text-4xl m-4 font-bold" id="contact">Contact</h1>
      <p className="max-w-xl text-center opacity-60 mb-8">
        Have a project in mind or just want to say hi? Send me a message and I&apos;ll get back to you.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        {/* honeypot: hidden from people, filled in by bots */}
        <p className="hidden"><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>

        <div className="flex flex-col md:flex-row gap-4">
          <input className={inputStyle} type="text" name="name" placeholder="Your name" required value={values.name} onChange={handleChange} />
          <input className={inputStyle} type="email" name="email" placeholder="Your email" required value={values.email} onChange={handleChange} />
        </div>
        <input className={inputStyle} type="text" name="subject" placeholder="Subject" required value={values.subject} onChange={handleChange} />
        <textarea className={inputStyle} name="message" placeholder="Your message" rows={5} required value={values.message} onChange={handleChange} />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="self-start px-8 py-3 text-lg font-semibold rounded-2xl shadow-xl hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
          style={{ background: 'linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)' }}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        <div aria-live="polite">
          {status === 'sent' && <p className="text-green-400">Thanks! Your message has been sent.</p>}
          {status === 'error' && <p className="text-red-400">Something went wrong. Please try again, or reach me on LinkedIn.</p>}
        </div>
      </form>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a href="https://www.linkedin.com/in/joel-henry-yellamelli/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center gap-2 px-6 py-3 font-semibold rounded-2xl border-2 border-purplish hover:scale-105">
          <LinkedIn /> LinkedIn
        </a>
        <a href="https://github.com/yJoelhenry7" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex items-center gap-2 px-6 py-3 font-semibold rounded-2xl border-2 border-purplish hover:scale-105">
          <GitHub /> GitHub
        </a>
      </div>
    </div>
  )
}

export default Contact
