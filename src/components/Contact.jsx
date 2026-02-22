import { useState } from 'react';
import { supabase } from '../lib/supabase';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');
        try {
            const { error } = await supabase.from('messages').insert([{
                name: formData.name,
                email: formData.email,
                message: formData.message,
                created_at: new Date().toISOString()
            }]);
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

    const inputClass = `w-full p-4 bg-bg-card border border-white/10 rounded-2xl text-white
        font-primary text-base transition-all duration-300 outline-none
        focus:border-primary focus:shadow-[0_0_0_3px_rgba(139,92,246,0.1)]`;

    return (
        <section id="contact" className="py-24 relative bg-gradient-to-b from-[rgba(236,72,153,0.05)] to-transparent">
            <div className="max-w-[1200px] mx-auto px-8">
                <h2 className="font-display text-5xl font-extrabold mb-12 text-gradient text-center">Entre em Contato</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1000px] mx-auto">
                    {/* Info */}
                    <div className="animate-fade-in-up">
                        <h3 className="text-3xl font-bold mb-6 text-gradient">Vamos conversar!</h3>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            Estou sempre aberta a novas oportunidades e conversas interessantes.
                            Envie uma mensagem e vamos criar algo incrível juntos!
                        </p>

                        <div className="flex flex-col gap-6">
                            {[
                                { icon: '📧', title: 'Email', sub: 'juliane.almeida@email.com' },
                                { icon: '📱', title: 'Redes Sociais', sub: '@julianealmeida' },
                            ].map((m) => (
                                <div key={m.title}
                                    className="flex gap-4 items-center p-6 bg-bg-card backdrop-blur-[10px]
                                    border border-white/10 rounded-2xl transition-all duration-300
                                    hover:border-primary/30 hover:translate-x-1.5">
                                    <div className="text-3xl">{m.icon}</div>
                                    <div>
                                        <h4 className="text-white mb-1">{m.title}</h4>
                                        <p className="text-text-secondary m-0">{m.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <form className="animate-fade-in-up" style={{ animationDelay: '0.2s' }} onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-white font-medium">Nome</label>
                            <input type="text" id="name" name="name" value={formData.name}
                                onChange={handleChange} required placeholder="Seu nome" className={inputClass} />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-white font-medium">Email</label>
                            <input type="email" id="email" name="email" value={formData.email}
                                onChange={handleChange} required placeholder="seu@email.com" className={inputClass} />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-white font-medium">Mensagem</label>
                            <textarea id="message" name="message" value={formData.message}
                                onChange={handleChange} required rows="5" placeholder="Sua mensagem..."
                                className={`${inputClass} resize-y min-h-[120px]`} />
                        </div>

                        <button type="submit" disabled={loading}
                            className="w-full mt-4 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-full
                            transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg disabled:opacity-60 disabled:cursor-not-allowed">
                            {loading ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>

                        {status === 'success' && (
                            <div className="mt-4 p-4 rounded-2xl font-medium text-center
                                bg-green-500/20 border border-green-500/30 text-green-400">
                                Mensagem enviada com sucesso! Retornarei em breve.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="mt-4 p-4 rounded-2xl font-medium text-center
                                bg-red-500/20 border border-red-500/30 text-red-400">
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
