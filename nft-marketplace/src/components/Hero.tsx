import heroImage from '../assets/hero-image.png'; // ou o caminho que você ajustou

export function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
      
      <div className="flex flex-col w-full max-w-[600px] gap-[32px]">
        
        <span className="text-[14px] font-medium leading-[16px] tracking-[0.1em] text-[#F5F1EB]">
          Bem-vindo à Kurio
        </span>
        
        <h1 className="text-[43px] font-bold leading-[70px] text-[#F5F1EB]">
          SEJA DONO DO FUTURO<br />DA ARTE DIGITAL
        </h1>
        
        <p className="max-w-[557px] text-[14px] font-normal leading-[24px] text-[#CFB28C]">
          Descubra NFTs selecionados de criadores emergentes e consagrados. Colecione arte digital rara, apoie artistas e tenha uma parte da cultura da internet.
        </p>
        
        <button className="w-[140px] h-[40px] bg-[#D28A4C] rounded-[6px] hover:opacity-90 transition-opacity flex items-center justify-center">
          <span className="text-[16px] font-bold leading-[20px] text-[#140D0A]">
            EXPLORAR
          </span>
        </button>

        <div className="flex items-center gap-[8px] w-[40px] h-[8px] mt-8 md:mx-auto md:ml-0 ml-auto">
          <span className="w-[8px] h-[8px] rounded-full bg-[#D28A4C]"></span>
          <span className="w-[8px] h-[8px] rounded-full bg-[#D28A4C]/30"></span>
          <span className="w-[8px] h-[8px] rounded-full bg-[#D28A4C]/30"></span>
        </div>

      </div>

      <div className="flex-1 flex justify-end">
        <img 
          src={heroImage} 
          alt="Destaque de Arte Digital NFT" 
          className="w-[450px] h-[450px] object-cover rounded-[24px]" 
        />
      </div>
      
    </section>
  );
}