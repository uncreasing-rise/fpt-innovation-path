"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Rocket, Users, TrendingUp, Zap, Lightbulb, Gem, Milestone, FlaskConical, Code, Star } from 'lucide-react';

// --- UPDATED DATA WITH NEW IMAGES ---
const journeySteps = [
    {
        icon: <Lightbulb className="w-8 h-8 text-white"/>,
        stage: "Giai đoạn 1",
        title: "Ý Tưởng",
        description: "Mọi hành trình vĩ đại đều bắt đầu từ một ý tưởng. Chúng tôi giúp bạn định hình, kiểm chứng và biến ý tưởng ban đầu thành một mô hình kinh doanh tiềm năng.",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1740&auto=format&fit=crop"
        // 
    },
    {
        icon: <FlaskConical className="w-8 h-8 text-white"/>,
        stage: "Giai đoạn 2",
        title: "Ươm Mầm",
        description: "Thông qua các buổi workshop chuyên sâu và chương trình mentoring 1-1, chúng tôi cung cấp kiến thức nền tảng vững chắc để bạn xây dựng sản phẩm.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1740&auto=format&fit=crop"
        // 
    },
    {
        icon: <Code className="w-8 h-8 text-white"/>,
        stage: "Giai đoạn 3",
        title: "Phát Triển MVP",
        description: "FIP kết nối bạn với đội ngũ kỹ thuật tài năng và các chuyên gia để xây dựng Sản phẩm khả dụng tối thiểu (MVP), sẵn sàng để ra mắt thị trường.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop"
        // 
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-white"/>,
        stage: "Giai đoạn 4",
        title: "Tăng Tốc & Gọi Vốn",
        description: "Tại Pitching Day, bạn sẽ có cơ hội trình bày trực tiếp trước các quỹ đầu tư mạo hiểm và nhà đầu tư thiên thần để gọi những vòng vốn đầu tiên.",
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1738&auto=format&fit=crop"
        // 
    },
     {
        icon: <Star className="w-8 h-8 text-white"/>,
        stage: "Giai đoạn 5",
        title: "Trở thành Huyền Thoại",
        description: "Thành công của bạn là minh chứng cho hệ sinh thái. Bạn sẽ trở thành một phần của mạng lưới cựu thành viên thành công và tiếp tục truyền cảm hứng.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1740&auto=format&fit=crop"
        // 
    },
];

const About: React.FC = () => {
    const stats = [
        { value: "50+", label: "Dự án đã ươm mầm" },
        { value: "$2M+", label: "Vốn đã kêu gọi thành công" },
        { value: "200+", label: "Thành viên & Cố vấn" },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="py-28 bg-slate-50">
            <motion.div 
                className="container mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-5 text-center text-slate-900">
                    Hành Trình Của Nhà Sáng Lập
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-24 text-center max-w-3xl mx-auto">
                    Tại FPT Innovation Path, chúng tôi không chỉ cung cấp nguồn lực, mà còn đồng hành cùng bạn trên mỗi bước đi, từ khi ý tưởng còn sơ khai cho đến ngày vươn ra biển lớn.
                </motion.p>
                
                {/* --- The Founder's Journey Timeline --- */}
                <div className="relative">
                    {/* The timeline line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-slate-200 hidden md:block" aria-hidden="true"></div>

                    <motion.div 
                        className="space-y-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {journeySteps.map((step, index) => (
                            <TimelineItem key={index} step={step} index={index} />
                        ))}
                    </motion.div>
                </div>


                {/* --- Statistics Section --- */}
                <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-lg"
                            custom={index}
                            variants={itemVariants}
                        >
                            <p className="text-5xl font-extrabold text-blue-600 mb-2">{stat.value}</p>
                            <p className="text-slate-500 font-medium text-lg">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

// Helper component for each timeline item
const TimelineItem = ({ step, index }: { step: typeof journeySteps[0], index: number }) => {
    const isOdd = index % 2 !== 0;

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: isOdd ? 50 : -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.div 
            className={`md:flex items-center w-full ${isOdd ? 'md:flex-row-reverse' : ''}`}
            variants={itemVariants}
        >
            {/* Content */}
            <div className="md:w-5/12">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200/80">
                    <p className="text-sm font-semibold text-blue-600 mb-1">{step.stage}</p>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                </div>
            </div>
            {/* Icon */}
            <div className="md:w-2/12 flex justify-center">
                 <div className="relative z-10 bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center my-6 md:my-0 shadow-lg">
                    {step.icon}
                </div>
            </div>
             {/* Image */}
            <div className="md:w-5/12">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src={step.image} alt={step.title} className="w-full h-64 object-cover" />
                </div>
            </div>
        </motion.div>
    );
};


export default About;

