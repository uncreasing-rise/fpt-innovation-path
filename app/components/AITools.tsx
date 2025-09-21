// "use client";

// import { useState } from 'react';
// import Icon from './Icon';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- COMPONENT CON ---
// // Dùng để hiển thị kết quả từ AI
// const AIResultDisplay = ({ title, iconName, content }: { title: string, iconName: string, content: string }) => {
//     // Hàm format chuyển markdown đơn giản sang HTML
//     const formatAIResponse = (text: string) => text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-800">$1</strong>').replace(/\n/g, '<br />');

//     if (!content) return null;

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="mt-6 p-5 bg-blue-50 rounded-lg border border-blue-200"
//         >
//             <h4 className="flex items-center text-lg font-bold text-blue-800 mb-3">
//                 <Icon name={iconName} className="w-6 h-6 mr-2 text-blue-500" />
//                 {title}
//             </h4>
//             <div
//                 className="prose prose-slate max-w-none text-slate-700"
//                 dangerouslySetInnerHTML={{ __html: formatAIResponse(content) }}
//             />
//         </motion.div>
//     );
// };

// // --- CÁC TOOL CHÍNH ---
// const NameGenerator = () => {
//     const [keywords, setKeywords] = useState('');
//     const { data, isLoading, error, execute } = useAITool('nameGenerator');

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         execute(keywords);
//     };

//     return (
//         <div className="bg-slate-50 p-8 rounded-xl shadow-lg border border-slate-200/80">
//             <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">AI Sáng tạo Tên Startup</h3>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="keywords" className="block text-slate-700 font-medium mb-2">Nhập từ khoá về ý tưởng</label>
//                     <input
//                         id="keywords"
//                         value={keywords}
//                         onChange={(e) => setKeywords(e.target.value)}
//                         className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition"
//                         placeholder="Ví dụ: AI, giáo dục, trẻ em"
//                     />
//                 </div>
//                 <button type="submit" disabled={isLoading} className="w-full text-white bg-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-slate-800 transition duration-300 text-lg flex items-center justify-center disabled:bg-slate-500 disabled:cursor-not-allowed">
//                     {isLoading ? <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div> : <><Icon name="Sparkles" className="w-5 h-5 mr-2 text-blue-400" /><span>Tạo tên ngay</span></>}
//                 </button>
//             </form>
//             <AnimatePresence>
//                 {error && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-red-500 mt-4 text-center">{error}</motion.p>}
//             </AnimatePresence>
//             <AIResultDisplay title="Gợi ý từ AI:" iconName="Lightbulb" content={data} />
//         </div>
//     );
// };

// const AIMentor = () => {
//     const [question, setQuestion] = useState('');
//     const { data, isLoading, error, execute } = useAITool('faq');
    
//     const sampleQuestions = ["Làm thế nào để gọi vốn?", "MVP là gì?", "FIP hỗ trợ startup như thế nào?"];

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         execute(question);
//     };
    
//     const handleSampleClick = (q: string) => {
//         setQuestion(q);
//         execute(q);
//     };

//     return (
//         <div className="bg-slate-50 p-8 rounded-xl shadow-lg border border-slate-200/80">
//             <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Hỏi Đáp Cùng AI Mentor</h3>
//             <form onSubmit={handleSubmit}>
//                  <div className="mb-4">
//                     <label htmlFor="question" className="block text-slate-700 font-medium mb-2">Đặt câu hỏi của bạn</label>
//                     <input
//                         id="question"
//                         value={question}
//                         onChange={(e) => setQuestion(e.target.value)}
//                         className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition"
//                         placeholder="FPT có giúp kết nối nhà đầu tư không?"
//                     />
//                 </div>
//                 <button type="submit" disabled={isLoading} className="w-full text-white bg-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-slate-800 transition duration-300 text-lg flex items-center justify-center disabled:bg-slate-500 disabled:cursor-not-allowed">
//                      {isLoading ? <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div> : <><Icon name="MessageCircle" className="w-5 h-5 mr-2 text-blue-400" /><span>Gửi câu hỏi</span></>}
//                 </button>
//             </form>
//             <div className="mt-4 text-center">
//                 <p className="text-sm text-slate-500 mb-2">Hoặc thử các câu hỏi sau:</p>
//                 <div className="flex flex-wrap justify-center gap-2">
//                     {sampleQuestions.map(q => (<button key={q} onClick={() => handleSampleClick(q)} className="text-xs bg-white border border-slate-300 rounded-full px-3 py-1.5 hover:bg-slate-200 transition text-slate-600 hover:text-slate-800">{q}</button>))}
//                 </div>
//             </div>
//             <AnimatePresence>
//                  {error && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-red-500 mt-4 text-center">{error}</motion.p>}
//             </AnimatePresence>
//             <AIResultDisplay title="AI Mentor trả lời:" iconName="GraduationCap" content={data} />
//         </div>
//     );
// };


// // --- COMPONENT CHA ---
// const AITools = () => {
//     return (
//         <section id="ai-tools" className="py-28 bg-white">
//             <div className="container mx-auto px-6">
//                 <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
//                     <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 text-center">Công Cụ AI Cho Startup</h2>
//                     <p className="text-lg text-slate-600 mb-16 text-center max-w-3xl mx-auto">Tận dụng sức mạnh của AI để tăng tốc ý tưởng và giải đáp thắc mắc trên hành trình khởi nghiệp của bạn.</p>
//                 </motion.div>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                    <NameGenerator />
//                    <AIMentor />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AITools;