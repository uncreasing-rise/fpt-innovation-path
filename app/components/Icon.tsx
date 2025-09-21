import React from 'react';
import { icons, LucideProps } from 'lucide-react';

// Định nghĩa props cho component Icon
// 'name' là một trong các key của object 'icons' từ lucide-react
// Các props còn lại được kế thừa từ LucideProps (ví dụ: className, size, color)
interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  // Lấy ra component icon tương ứng từ object 'icons' dựa vào tên được truyền vào
  const LucideIcon = icons[name];

  // Nếu không tìm thấy icon với tên đã cho, không render gì cả
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react.`);
    return null;
  }

  // Render component icon đã tìm thấy và truyền tất cả các props còn lại vào nó
  return <LucideIcon {...props} />;
};

export default Icon;
