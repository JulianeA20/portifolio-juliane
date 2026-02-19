import { useState } from 'react';
import { supabase } from '../lib/supabase';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const { error } = await supabase
                .from('messages')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        } finally {
            setLoading(false);
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">Entre em Contato</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Vamos conversar!</h3>
                        <p>
                            Estou sempre aberta a novas oportunidades e conversas interessantes.
                            Envie uma mensagem e vamos criar algo incrível juntos!
                        </p>
                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon">📧</div>
                                <div className="method-text">
                                    <h4>Email</h4>
                                    <p>juliane.almeida@email.com</p>
                                </div>
                            </div>
                            <div className="contact-method">
                                <div className="method-icon">📱</div>
                                <div className="method-text">
                                    <h4>Redes Sociais</h4>
                                    <p>@julianealmeida</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Seu nome"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="seu@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Sua mensagem..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>

                        {status === 'success' && (
                            <div className="alert alert-success">
                                Mensagem enviada com sucesso! Retornarei em breve.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="alert alert-error">
                                Erro ao enviar mensagem. Tente novamente.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
