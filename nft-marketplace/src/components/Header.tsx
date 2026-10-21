import { Search, ShoppingCart, LogIn } from "lucide-react";

export function Header() {
    return (
        <header className="w-full flex items-center justify-between px-8 py-4 bg-[#140D0A] text-white font-['Roboto_Mono'] relative z-10 border-b-[0.3px] border-[#D28A4C]">

            <div className="flex-1 flex justify-start text-[14px] font-bold leading-none tracking-[0.1em] text-[#F5F1EB]">
                KURIO
            </div>

            <nav className="hidden md:flex flex-1 items-center justify-center gap-[40px]">
                <a href="#" className="text-[16px] font-bold leading-none text-[#E89B55] border-b-2 border-[#E89B55] pb-1 transition-all">
                    Início
                </a>
                <a href="#" className="text-[16px] font-normal leading-none text-[#F5F1EB] border-b-2 border-transparent hover:text-[#E89B55] hover:font-bold hover:border-[#E89B55] pb-1 transition-all">
                    Mercado
                </a>
                <a href="#" className="text-[16px] font-normal leading-none text-[#F5F1EB] border-b-2 border-transparent hover:text-[#E89B55] hover:font-bold hover:border-[#E89B55] pb-1 transition-all">
                    Criadores
                </a>
                <a href="#" className="text-[16px] font-normal leading-none text-[#F5F1EB] border-b-2 border-transparent hover:text-[#E89B55] hover:font-bold hover:border-[#E89B55] pb-1 transition-all">
                    Aprenda
                </a>
            </nav>

            <div className="flex-1 flex items-center justify-end gap-[28px] h-[35px]">

                <button className="text-[#F5F1EB] hover:text-[#E89B55] transition-colors flex items-center justify-center w-[20px] h-[20px]">
                    <Search size={20} strokeWidth={2} />
                </button>

                <button className="relative flex items-center justify-center text-[#F5F1EB] hover:text-[#E89B55] transition-colors w-[31px] h-[24px]">
                    <ShoppingCart size={24} strokeWidth={2} />

                    <span className="absolute top-[-2px] right-[-6px] bg-[#D28A4C] text-[#140D0A] text-[10px] font-medium w-[16px] h-[16px] rounded-full border-2 border-zinc-950 flex items-center justify-center leading-none">
                        2
                    </span>
                </button>

                <button className="w-[100px] h-[35px] bg-[#D28A4C] hover:opacity-90 text-[#140D0A] rounded-[6px] flex items-center justify-center gap-2 transition-opacity">
                    <span className="text-[16px] font-medium leading-none mt-[2px]">Entrar</span>
                    <LogIn size={20} />
                </button>
            </div>

        </header>
    );
}