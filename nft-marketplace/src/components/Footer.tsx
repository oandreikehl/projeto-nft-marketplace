import { useState } from 'react';

export function Footer() {
    const [emailInput, setEmailInput] = useState('');

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`E-mail cadastrado: ${emailInput}`);
    };

    return (
        <footer className="w-full max-w-7xl mx-auto px-8 py-12 flex flex-col">

            {/* 2. OS 4 BLOCOS INFORMATIVOS + NEWSLETTER */}
            <div className="w-full bg-[#241612] px-[32px] pb-[32px] flex flex-col lg:flex-row items-center justify-between gap-6 border-x border-zinc-800/40">

                {/* Bloco 1: Segurança da carteira */}
                <div className="w-full lg:w-[264.66px] h-[202px] px-[16px] flex flex-col justify-between">
                    <div className="w-[74px] h-[74px] rounded-[37px] bg-[#D28A4C] flex items-center justify-center">
                        <span className="text-[24px] font-bold font-['Roboto_Mono'] text-[#140D0A] leading-[100%] text-center">
                            W
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-[17px] font-bold font-['Roboto_Mono'] leading-[16px] text-[#F5F1EB]">
                            Segurança da carteira
                        </h4>
                        <p className="text-[14px] font-normal font-['Roboto_Mono'] leading-[22px] text-[#CFB28C]">
                            Proteja sua carteira e colecione arte digital verificada com confiança.
                        </p>
                    </div>
                </div>

                {/* Linha Divisória 1 */}
                <div className="hidden lg:block w-[1px] h-[202px] bg-[#D28A4C]/40" />

                {/* Bloco 2: Criadores em destaque */}
                <div className="w-full lg:w-[264.66px] h-[202px] px-[16px] flex flex-col justify-between">
                    <div className="w-[74px] h-[74px] rounded-[37px] bg-[#D28A4C] flex items-center justify-center">
                        <span className="text-[24px] font-bold font-['Roboto_Mono'] text-[#140D0A] leading-[100%] text-center">
                            C
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-[17px] font-bold font-['Roboto_Mono'] leading-[16px] text-[#F5F1EB]">
                            Criadores em destaque
                        </h4>
                        <p className="text-[14px] font-normal font-['Roboto_Mono'] leading-[22px] text-[#CFB28C]">
                            Conheça artistas, estúdios e comunidades que moldam a cultura digital na rede.
                        </p>
                    </div>
                </div>

                {/* Linha Divisória 2 */}
                <div className="hidden lg:block w-[1px] h-[202px] bg-[#D28A4C]/40" />

                {/* Bloco 3: Alertas de lançamentos */}
                <div className="w-full lg:w-[264.66px] h-[202px] px-[16px] flex flex-col justify-between">
                    <div className="w-[74px] h-[74px] rounded-[37px] bg-[#D28A4C] flex items-center justify-center">
                        <span className="text-[24px] font-bold font-['Roboto_Mono'] text-[#140D0A] leading-[100%] text-center">
                            D
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="text-[17px] font-bold font-['Roboto_Mono'] leading-[16px] text-[#F5F1EB]">
                            Alertas de lançamentos
                        </h4>
                        <p className="text-[14px] font-normal font-['Roboto_Mono'] leading-[22px] text-[#CFB28C]">
                            Receba calendários de cunhagem, novidades de listas de acesso e análises do mercado.
                        </p>
                    </div>
                </div>

                {/* Linha Divisória 3 */}
                <div className="hidden lg:block w-[1px] h-[202px] bg-[#D28A4C]/40" />

                {/* Bloco 4: Newsletter (Antecipe-se) */}
                <div className="w-full lg:w-[357px] h-[202px] px-[16px] flex flex-col justify-between">
                    <h4 className="text-[18px] font-bold font-['Roboto_Mono'] leading-[16px] text-[#F5F1EB]">
                        Antecipe-se ao próximo lançamento
                    </h4>

                    <form onSubmit={handleNewsletterSubmit} className="w-[325px] h-[40px] bg-[#38220F] rounded-[6px] shadow-[0px_0px_20px_0px_#0A060473] flex items-center justify-between overflow-hidden">
                        <input
                            type="email"
                            placeholder="digite seu e-mail..."
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            className="bg-transparent text-[13px] font-['Roboto_Mono'] text-[#F5F1EB] px-3 outline-none w-full placeholder-[#CFB28C]/60"
                        />
                        <button
                            type="submit"
                            className="w-[85px] h-[40px] bg-[#D28A4C] rounded-r-[6px] flex items-center justify-center px-[16px] py-[12px] hover:opacity-90 transition-opacity cursor-pointer flex-shrink-0"
                        >
                            <span className="text-[18px] font-bold font-['Roboto_Mono'] leading-[16px] text-[#140D0A]">
                                Enviar
                            </span>
                        </button>
                    </form>

                    <p className="text-[13px] font-normal font-['Roboto_Mono'] leading-[22px] text-[#CFB28C]">
                        Receba lançamentos selecionados, histórias de criadores e novidades do mercado.
                    </p>
                </div>

            </div>

            {/* 3. FAIXA INFERIOR DO RODAPÉ (Logo, Slogan, Contatos e Carteiras Compatíveis) */}
            <div className="w-full bg-[#38220F] p-[32px] rounded-b-[24px] flex flex-col gap-8 border-x border-b border-zinc-800/40">

                {/* Linha superior da faixa: Logo, Slogan, E-mail e Telefone */}
                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">

                    <div className="flex items-center py-[8px]">
                        <span className="text-[14px] font-bold font-['Roboto_Mono'] tracking-[10%] leading-[100%] text-[#F5F1EB]">
                            KURIO
                        </span>
                    </div>

                    <p className="text-[14px] font-normal font-['Roboto_Mono'] leading-[22px] text-[#F5F1EB] text-center lg:text-left">
                        Built for collectors, creators, and culture
                    </p>

                    <a href="mailto:contato@email.com" className="text-[14px] font-normal font-['Roboto_Mono'] leading-[22px] text-[#F5F1EB] hover:text-[#D28A4C] transition-colors">
                        contato@email.com
                    </a>

                    <span className="text-[14px] font-normal font-['Roboto_Mono'] leading-[22px] text-[#F5F1EB]">
                        +55 11 4002 8922
                    </span>

                </div>

                <div className="w-full h-[1px] bg-[#241612]" />

                {/* 1. SEÇÃO DE NAVEGAÇÃO DO RODAPÉ (4 Colunas: 3 de Links + 1 de Redes Sociais) */}
                <div className="w-full bg-[#241612] p-[32px] rounded-t-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-x border-t border-zinc-800/40">

                    {/* Coluna 1: Meu perfil */}
                    <div className="w-full md:w-[178.66px] flex flex-col gap-4">
                        <h4 className="w-full h-[16px] text-[18px] font-bold font-['Roboto_Mono'] leading-[16px] text-[#F5F1EB]">
                            Meu perfil
                        </h4>
                        <ul className="flex flex-col text-[14px] font-normal font-['Roboto_Mono'] leading-[30px] text-[#F5F1EB]">
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Meu perfil</a></li>
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Minha coleção</a></li>
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Atividade</a></li>
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Estudio do criador</a></li>
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Lista de interesse</a></li>
                        </ul>
                    </div>

                    {/* Coluna 2: Central de ajuda */}
                    <div className="w-full md:w-[178.66px] flex flex-col gap-4">
                        <h4 className="w-full h-[16px] text-[18px] font-bold font-['Roboto_Mono'] leading-[16px] text-[#F5F1EB]">
                            Central de ajuda
                        </h4>
                        <ul className="flex flex-col text-[14px] font-normal font-['Roboto_Mono'] leading-[30px] text-[#F5F1EB]">
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Central de ajuda</a></li>
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Como comprar NFTs</a></li>
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Carteira e segurança</a></li>
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Política do mercado</a></li>
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Denunciar item</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Coleções */}
                    <div className="w-full md:w-[178.66px] flex flex-col gap-4">
                        <h4 className="w-full h-[16px] text-[18px] font-bold font-['Roboto_Mono'] leading-[16px] text-[#F5F1EB]">
                            Coleções
                        </h4>
                        <ul className="flex flex-col text-[14px] font-normal font-['Roboto_Mono'] leading-[30px] text-[#F5F1EB]">
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Arte digital</a></li>
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Fotografia</a></li>
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Musica</a></li>
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Arte 3D</a></li>
                            <li><a href="#" className="hover:text-[#D28A4C] transition-colors">Utilidade</a></li>
                        </ul>
                    </div>

                    {/* Coluna 4: Redes Sociais */}
                    <div className="w-full flex flex-col gap-4">
                        <h4 className="w-full h-[16px] text-[18px] font-bold font-['Roboto_Mono'] leading-[16px] text-[#F5F1EB]">
                            Redes sociais
                        </h4>
                        <div className="w-[190px] h-[30px] flex items-center gap-[10px] mt-2">

                            {/* Facebook */}
                            <a href="#" aria-label="Facebook" className="w-[30px] h-[30px] rounded-[4px] border border-[#D28A4C] pt-[8px] pb-[8px] px-[12px] flex items-center justify-center text-[#D28A4C] hover:bg-[#D28A4C] hover:text-[#140D0A] transition-colors">
                                <svg className="w-3.5 h-3.5 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>

                            {/* Instagram */}
                            <a href="#" aria-label="Instagram" className="w-[30px] h-[30px] rounded-[4px] border border-[#D28A4C] pt-[8px] pb-[8px] px-[12px] flex items-center justify-center text-[#D28A4C] hover:bg-[#D28A4C] hover:text-[#140D0A] transition-colors">
                                <svg className="w-3.5 h-3.5 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>

                            {/* Twitter / X */}
                            <a href="#" aria-label="Twitter" className="w-[30px] h-[30px] rounded-[4px] border border-[#D28A4C] pt-[8px] pb-[8px] px-[12px] flex items-center justify-center text-[#D28A4C] hover:bg-[#D28A4C] hover:text-[#140D0A] transition-colors">
                                <svg className="w-3 h-3 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>

                            {/* LinkedIn */}
                            <a href="#" aria-label="LinkedIn" className="w-[30px] h-[30px] rounded-[4px] border border-[#D28A4C] pt-[8px] pb-[8px] px-[12px] flex items-center justify-center text-[#D28A4C] hover:bg-[#D28A4C] hover:text-[#140D0A] transition-colors">
                                <svg className="w-3.5 h-3.5 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>

                            {/* YouTube */}
                            <a href="#" aria-label="YouTube" className="w-[30px] h-[30px] rounded-[4px] border border-[#D28A4C] pt-[8px] pb-[8px] px-[12px] flex items-center justify-center text-[#D28A4C] hover:bg-[#D28A4C] hover:text-[#140D0A] transition-colors">
                                <svg className="w-3.5 h-3.5 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>

                        </div>

                        {/* Linha inferior da faixa: Carteiras Compatíveis */}
                        <div className="w-full flex flex-col gap-4">
                            <div className="flex flex-col items-center md:items-end gap-[6px]">
                                <span className="w-full h-[16px] text-[18px] font-bold font-['Roboto_Mono'] leading-[16px] text-[#F5F1EB]">
                                    Carteiras compatíveis
                                </span>
                                <div className="w-[228px] h-[26px] bg-[#38220F] border border-[#55321F] rounded-[6px] pl-[8px] py-[8px] flex items-center justify-center shadow-inner">
                                    <span className="w-[215px] h-[12px] text-[9px] font-bold font-['Roboto_Mono'] tracking-[0.1px] leading-[100%] text-[#E89B55] text-center flex items-center justify-center">
                                        METAMASK  •  WALLETCONNECT  •  COINBASE
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* 4. COPYRIGHT FINAL */}
            <div className="w-full h-[30px] flex items-center justify-center text-center">
                <span className="text-[14px] font-normal font-['Roboto_Mono'] leading-[30px] text-[#F5F1EB]">
                    © 2026 Kurio. Propriedade digital para todos.
                </span>
            </div>

        </footer>
    );
}