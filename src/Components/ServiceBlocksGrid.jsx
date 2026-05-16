import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";
import ServiceIcon from "./ServiceIcon";

const ServiceBlocksGrid = ({ blocks }) => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || "uz").slice(0, 2);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {blocks.map((block, index) => {
        const tr = block.translations?.[lang] || block.translations?.uz || {};
        return (
          <div
            key={block.id}
            data-aos="fade-up"
            data-aos-delay={(index % 2) * 120}
            className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[28px] p-7 md:p-9 hover:border-blue-500/30 transition"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-[80px]" />

            <div className="relative flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <ServiceIcon name={block.icon} className="text-blue-400" size={26} />
              </div>
              <h3 className="text-2xl font-bold">{tr.title}</h3>
            </div>

            <ul className="relative flex flex-col gap-3">
              {(tr.items || []).map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2
                    size={18}
                    className="text-cyan-300 mt-0.5 shrink-0"
                  />
                  <span className="leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceBlocksGrid;
