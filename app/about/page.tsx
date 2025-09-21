"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    Lightbulb, FlaskConical, TrendingUp, Users, Rocket,
    Award, Briefcase, Calendar, CheckCircle,
    ArrowRight, BookOpen, Shield
} from 'lucide-react';
import Image from 'next/image';

// Unified theme colors system
const theme = {
    colors: {
        primary: {
            50: 'bg-blue-50',
            600: 'bg-blue-600',
            textPrimary: 'text-blue-600',
            border: 'border-blue-200',
            ring: 'ring-blue-500/20'
        },
        secondary: {
            50: 'bg-slate-50',
            100: 'bg-slate-100',
            textPrimary: 'text-slate-900',
            textSecondary: 'text-slate-600',
            textMuted: 'text-slate-500',
            border: 'border-slate-200'
        },
        gradients: {
            primary: 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800',
            text: 'bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent'
        }
    },
    shadows: {
        lg: 'shadow-lg shadow-blue-900/10',
        xl: 'shadow-xl shadow-blue-900/15',
        card: 'shadow-lg shadow-slate-200/50'
    }
};

// Simplified journey steps for a student club (3 stages)
const journeySteps = [
    {
        icon: <Lightbulb className="w-10 h-10 text-white" />,
        stage: "Giai đoạn 1",
        title: "Tư duy Khởi nghiệp",
        subtitle: "Khám phá & Định hướng ý tưởng",
        description: "Học cách tìm kiếm, phân tích và phát triển ý tưởng tiềm năng thông qua các buổi workshop về **Design Thinking** và **Lean Canvas**.",
        keyActivities: [
            "Workshop về Tư duy Phản biện",
            "Thảo luận nhóm về ý tưởng"
        ],
        mentorType: "Mentor nội bộ (thành viên CLB)",
        duration: "1 tháng",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1740&auto=format&fit=crop"
    },
    {
        icon: <FlaskConical className="w-10 h-10 text-white" />,
        stage: "Giai đoạn 2",
        title: "Dự án thực tế",
        subtitle: "Xây dựng và phát triển sản phẩm",
        description: "Đồng hành để biến ý tưởng thành sản phẩm hoặc dịch vụ đầu tiên (MVP). Giai đoạn này tập trung vào việc áp dụng kiến thức để xây dựng bản mẫu và thu thập phản hồi từ người dùng.",
        keyActivities: [
            "Lên kế hoạch phát triển sản phẩm",
            "Thiết kế và lập trình bản mẫu"
        ],
        mentorType: "Giảng viên & Cựu sinh viên",
        duration: "2-3 tháng",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1740&auto=format&fit=crop"
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-white" />,
        stage: "Giai đoạn 3",
        title: "Trình bày & Kết nối",
        subtitle: "Tham gia cuộc thi và mở rộng quan hệ",
        description: "Các thành viên sẽ được huấn luyện kỹ năng thuyết trình, tham gia các cuộc thi khởi nghiệp và kết nối với các chuyên gia, nhà đầu tư để tìm kiếm cơ hội phát triển.",
        keyActivities: [
            "Huấn luyện kỹ năng thuyết trình",
            "Tham gia FPTU Startup Challenge"
        ],
        mentorType: "Chuyên gia & Doanh nhân",
        duration: "1-2 tháng",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1740&auto=format&fit=crop"
    },
];

const programFeatures = [
    {
        icon: <BookOpen className="w-8 h-8" />,
        title: "Cộng đồng năng động",
        description: "Môi trường sáng tạo nơi bạn có thể gặp gỡ, học hỏi và làm việc cùng những người bạn cùng chung chí hướng.",
        stats: "150+ Thành viên"
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Hệ thống Mentorship",
        description: "Kết nối với giảng viên, cựu sinh viên và các chuyên gia trong ngành để được cố vấn 1-on-1.",
        stats: "20+ Mentor"
    },
    {
        icon: <Briefcase className="w-8 h-8" />,
        title: "Dự án thực tế",
        description: "Biến ý tưởng thành sản phẩm thực tế, có người dùng và phản hồi từ thị trường.",
        stats: "Dự án cá nhân/nhóm"
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Được công nhận",
        description: "Nhận chứng chỉ thành viên, giải thưởng từ các cuộc thi và sự công nhận từ cộng đồng.",
        stats: "Giải thưởng & Chứng nhận"
    }
];

const executiveTeam = [
    {
        name: "Nguyễn Văn A",
        position: "Chủ nhiệm",
        major: "Kỹ thuật Phần mềm",
        bio: "Với tầm nhìn chiến lược và khả năng kết nối mạnh mẽ, Văn A là người dẫn dắt FIP, tập trung vào việc áp dụng công nghệ vào các mô hình khởi nghiệp thực tế.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1740&auto=format&fit=crop"
    },
    {
        name: "Trần Thị B",
        position: "Phó Chủ nhiệm",
        major: "Quản trị Kinh doanh",
        bio: "Chịu trách nhiệm mảng đối ngoại và tài chính, Trần B có khả năng kết nối với các mentor, đối tác và nhà đầu tư, đảm bảo nguồn lực cho các dự án.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1740&auto=format&fit=crop"
    },
    {
        name: "Lê Văn C",
        position: "Trưởng ban Nội dung",
        major: "Thiết kế Đồ họa",
        bio: "Là người đứng sau các chiến dịch truyền thông sáng tạo, Lê C phụ trách sản xuất nội dung hình ảnh/video, lan tỏa tinh thần khởi nghiệp đến cộng đồng sinh viên.",
        image: "https://images.unsplash.com/photo-1539571696388-f584e7275b46?q=80&w=1740&auto=format&fit=crop"
    },
    {
        name: "Phạm Thị D",
        position: "Trưởng ban Sự kiện",
        major: "Quan hệ Công chúng",
        bio: "Với kinh nghiệm tổ chức sự kiện chuyên nghiệp, D chịu trách nhiệm lên kế hoạch và thực hiện các buổi workshop, talkshow và cuộc thi của CLB một cách bài bản.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1740&auto=format&fit=crop"
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const StatItem = ({ value, label, description, icon }: { value: string, label: string, description: string, icon: React.ReactNode }) => {
    return (
        <motion.div
            className={`bg-white p-8 rounded-2xl ${theme.shadows.card} border ${theme.colors.secondary.border} text-center group hover:scale-105 transition-all duration-300 relative overflow-hidden`}
            variants={itemVariants}
        >
            <div className={`absolute inset-0 ${theme.colors.gradients.text} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            <div className={`${theme.colors.primary[600]} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                    {icon}
                </div>
            </div>
            <p className={`text-5xl font-bold ${theme.colors.primary.textPrimary} mb-2 group-hover:text-blue-700 transition-colors duration-300`}>
                {value}
            </p>
            <p className={`${theme.colors.secondary.textPrimary} font-bold text-lg mb-2`}>
                {label}
            </p>
            <p className={`${theme.colors.secondary.textSecondary} text-sm`}>
                {description}
            </p>
        </motion.div>
    );
};

const TimelineItem = ({ step, index }: { step: typeof journeySteps[0], index: number }) => {
    const isEven = index % 2 === 0;

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: isEven ? -80 : 80 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    return (
        <motion.div
            className={`flex items-stretch w-full ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}
            variants={itemVariants}
        >
            {/* Image */}
            <div className="lg:w-1/2 hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-2xl relative h-full group/image">
                    <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover group-hover/image:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
                <div className={`bg-white p-10 rounded-2xl ${theme.shadows.xl} border ${theme.colors.secondary.border} hover:shadow-2xl transition-all duration-500 group h-full relative overflow-hidden`}>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <span className={`text-sm font-bold ${theme.colors.primary.textPrimary} ${theme.colors.primary[50]} px-4 py-2 rounded-full border ${theme.colors.primary.border}`}>
                                {step.stage}
                            </span>
                            <div className="flex items-center text-sm text-slate-500">
                                <Calendar className="w-4 h-4 mr-1" />
                                {step.duration}
                            </div>
                        </div>

                        <h3 className={`text-3xl font-bold ${theme.colors.secondary.textPrimary} mb-3 group-hover:${theme.colors.primary.textPrimary} transition-colors duration-300`}>
                            {step.title}
                        </h3>

                        <p className={`text-lg ${theme.colors.primary.textPrimary} font-semibold mb-6`}>
                            {step.subtitle}
                        </p>

                        <p className={`${theme.colors.secondary.textSecondary} leading-relaxed mb-8`}>
                            {step.description}
                        </p>

                        {/* Key Activities */}
                        <div className="mb-8">
                            <h4 className={`text-sm font-bold ${theme.colors.secondary.textPrimary} mb-4 flex items-center`}>
                                <Briefcase className="w-4 h-4 mr-2" />
                                Hoạt động tiêu biểu
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                                {step.keyActivities.map((activity, activityIndex) => (
                                    <div key={activityIndex} className="flex items-center text-sm group/item">
                                        <CheckCircle className={`w-4 h-4 ${theme.colors.primary.textPrimary} mr-3 flex-shrink-0`} />
                                        <span className={`${theme.colors.secondary.textSecondary} group-hover/item:${theme.colors.primary.textPrimary} transition-colors duration-200`}>
                                            {activity}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mentor Info */}
                        <div className="flex items-center text-sm text-slate-600">
                            <Users className="w-4 h-4 mr-2" />
                            <span className="font-medium">Mentor: </span>
                            <span className="ml-1">{step.mentorType}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Icon (Mobile & Tablet) */}
            <div className="lg:hidden flex justify-center items-center my-8">
                <div className={`relative z-10 ${theme.colors.gradients.primary} w-28 h-28 rounded-full flex items-center justify-center ${theme.shadows.xl} group-hover:scale-110 transition-all duration-500 ${theme.colors.primary.ring} ring-8`}>
                    {step.icon}
                    <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            </div>

            {/* Image (Mobile & Tablet) */}
            <div className="lg:hidden">
                <div className="rounded-2xl overflow-hidden shadow-2xl relative h-64 group/image">
                    <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover group-hover/image:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-8 group-hover/image:translate-y-0 opacity-0 group-hover/image:opacity-100 transition-all duration-500">
                        <div className="flex items-center text-white">
                            <ArrowRight className="w-5 h-5 mr-2" />
                            <span className="font-semibold">Tìm hiểu thêm</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ExecutiveTeam = () => {
    return (
        <motion.div
            className="my-32 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <motion.h3 variants={itemVariants} className={`text-4xl font-bold mb-4 ${theme.colors.secondary.textPrimary}`}>
                Ban Chủ nhiệm
            </motion.h3>
            <motion.p variants={itemVariants} className={`text-xl ${theme.colors.secondary.textSecondary} mb-16 max-w-3xl mx-auto`}>
                Đội ngũ cốt lõi, những người dẫn dắt và kiến tạo hành trình phát triển cho các thành viên FIP.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {executiveTeam.map((member, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
                    >
                        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h4 className={`text-xl font-bold ${theme.colors.secondary.textPrimary} mb-1`}>{member.name}</h4>
                        <p className={`text-sm font-semibold ${theme.colors.primary.textPrimary} mb-2`}>{member.position}</p>
                        <p className={`text-sm ${theme.colors.secondary.textMuted}`}>{member.bio}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Main component
const About: React.FC = () => {
    return (
        <section id="about" className={`py-32 ${theme.colors.secondary[50]}`}>
            <motion.div
                className="container mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Header Section */}
                <motion.div variants={itemVariants} className="text-center mb-24">
                    <div className={`inline-flex items-center ${theme.colors.primary[50]} ${theme.colors.primary.border} border px-4 py-2 rounded-full mb-6`}>
                        <Award className={`w-5 h-5 ${theme.colors.primary.textPrimary} mr-2`} />
                        <span className={`text-sm font-semibold ${theme.colors.primary.textPrimary}`}>
                            Câu lạc bộ Phát triển Khởi nghiệp FPTU
                        </span>
                    </div>

                    <h2 className={`text-6xl md:text-7xl font-bold mb-8 ${theme.colors.secondary.textPrimary}`}>
                        Hành trình từ
                        <span className={theme.colors.gradients.text}> ý tưởng </span>
                        đến
                        <span className={theme.colors.gradients.text}> thực tế</span>
                    </h2>

                    <p className={`text-xl ${theme.colors.secondary.textSecondary} max-w-5xl mx-auto leading-relaxed mb-8`}>
                        FPT Innovation Path (FIP) là bệ phóng dành cho những sinh viên đam mê khởi nghiệp và sáng tạo. Chúng tôi cung cấp một môi trường toàn diện, từ huấn luyện tư duy đến hỗ trợ thực hiện dự án, giúp bạn tự tin trên con đường trở thành những nhà lãnh đạo tương lai.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Mô hình đào tạo độc đáo</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Cộng đồng sinh viên & cựu sinh viên</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            <span>Kết nối doanh nghiệp</span>
                        </div>
                    </div>
                </motion.div>

                {/* Executive Team Section */}
                <ExecutiveTeam />

                {/* Program Features */}
                <motion.div
                    className="mb-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.h3 variants={itemVariants} className={`text-4xl font-bold text-center mb-16 ${theme.colors.secondary.textPrimary}`}>
                        Vì sao nên chọn FIP?
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {programFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`bg-white p-8 rounded-2xl ${theme.shadows.card} border ${theme.colors.secondary.border} hover:scale-105 transition-all duration-300 group`}
                            >
                                <div className={`${theme.colors.primary[600]} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </div>
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className={`text-xl font-bold ${theme.colors.secondary.textPrimary}`}>
                                        {feature.title}
                                    </h4>
                                    <span className={`text-sm font-bold ${theme.colors.primary.textPrimary} ${theme.colors.primary[50]} px-3 py-1 rounded-full`}>
                                        {feature.stats}
                                    </span>
                                </div>
                                <p className={`${theme.colors.secondary.textSecondary} leading-relaxed`}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Journey Timeline */}
                <motion.div
                    className="mb-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.h3 variants={itemVariants} className={`text-4xl font-bold text-center mb-20 ${theme.colors.secondary.textPrimary}`}>
                        Lộ trình phát triển cùng FIP
                    </motion.h3>
                    <div className="relative">
                        <div className={`absolute left-1/2 -translate-x-1/2 h-full w-1 ${theme.colors.gradients.text} hidden lg:block`} aria-hidden="true"></div>
                        <motion.div
                            className="space-y-32"
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
                </motion.div>

                {/* Statistics */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <StatItem value="150+" label="Thành viên" description="Sinh viên năng động, sáng tạo" icon={<Users className="w-8 h-8" />} />
                    <StatItem value="20+" label="Mentor" description="Giảng viên & chuyên gia" icon={<Briefcase className="w-8 h-8" />} />
                    <StatItem value="50+" label="Dự án đã phát triển" description="Các dự án thực tế từ thành viên" icon={<Rocket className="w-8 h-8" />} />
                    <StatItem value="10+" label="Giải thưởng lớn" description="Tại các cuộc thi cấp trường & quốc gia" icon={<Award className="w-8 h-8" />} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;