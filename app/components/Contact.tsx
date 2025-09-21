"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Mail, Linkedin, Github } from 'lucide-react'; // Added new icons
import GridBackground from './GridBackground';

const Contact: React.FC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    // State for controlled form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would handle the actual form submission logic, e.g., send data to an API
        console.log("Form submitted with data:", formData);
        setFormSubmitted(true);
        // Optionally reset form after submission
        setFormData({ name: '', email: '', message: '' });
    };
    
    return (
        <section id="contact" className="relative py-28 bg-slate-900 text-white overflow-hidden">
            <GridBackground />
            <div className="container relative z-10 mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 text-center">Gia Nhập Hệ Sinh Thái</h2>
                    <p className="text-lg text-slate-300 mb-16 text-center max-w-3xl mx-auto">Bạn có một ý tưởng đột phá? Hãy kết nối với chúng tôi để bắt đầu hành trình của bạn.</p>
                </motion.div>
                
                <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm p-8 sm:p-12 rounded-xl shadow-2xl border border-slate-700">
                    <AnimatePresence mode="wait">
                        {formSubmitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <CheckCircle2 className="w-16 h-16 mx-auto text-green-400 mb-4" />
                                <h3 className="text-2xl font-bold text-white">Cảm ơn bạn đã gửi ý tưởng!</h3>
                                <p className="text-slate-300 mt-2">Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.</p>
                            </motion.div>
                        ) : (
                            <motion.form 
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-slate-300 font-medium mb-2">Họ và Tên</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-white" 
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-slate-300 font-medium mb-2">Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-white" 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-slate-300 font-medium mb-2">Mô tả ngắn về ý tưởng của bạn</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-white"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-600 font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-lg flex items-center justify-center">
                                    <Send className="w-5 h-5 mr-3" />
                                    Gửi Ý Tưởng
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <p className="text-slate-400 mb-4">Hoặc liên hệ trực tiếp với chúng tôi:</p>
                    <div className="flex items-center justify-center space-x-6">
                        <a href="mailto:info@fptinnovationpath.com" className="flex items-center text-slate-300 hover:text-blue-400 transition">
                            <Mail className="w-5 h-5 mr-2" />
                            info@fptinnovationpath.com
                        </a>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition"><Linkedin className="w-6 h-6" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition"><Github className="w-6 h-6" /></a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

