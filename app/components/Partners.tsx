import React from 'react';
import Image from 'next/image';

const partnersData = [
    { name: "Innovate Capital", logo: "https://placehold.co/200x100/f8fafc/94a3b8/png?text=Innovate+Capital" },
    { name: "Venture Friends", logo: "https://placehold.co/200x100/f8fafc/94a3b8/png?text=Venture+Friends" },
    { name: "Tech Accelerator", logo: "https://placehold.co/200x100/f8fafc/94a3b8/png?text=Tech+Accelerator" },
    { name: "Future Labs", logo: "https://placehold.co/200x100/f8fafc/94a3b8/png?text=Future+Labs" },
    { name: "Growth Fund", logo: "https://placehold.co/200x100/f8fafc/94a3b8/png?text=Growth+Fund" },
];

const Partners: React.FC = () => {
    return (
        <section id="partners" className="py-28 bg-slate-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Đối Tác & Nhà Đầu Tư Đồng Hành</h2>
                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
                    {partnersData.map((partner, index) => (
                        <div key={index} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition duration-300 transform hover:scale-110">
                            <Image 
                                src={partner.logo} 
                                alt={partner.name} 
                                width={200}
                                height={100}
                                className="h-12 w-auto" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;