import { useState } from 'react';

// Importação das imagens dos NFTs
import nft042 from '../assets/image042.png';
import nft009 from '../assets/image009.png';
import nft552 from '../assets/image552.png';
import nft118 from '../assets/image118.png';
import nft314 from '../assets/image314.png';
import nft088 from '../assets/image088.png';
import nft207 from '../assets/image207.png';
import nft10 from '../assets/NFT Artwork 10.png';
import nft160 from '../assets/image160.png';

export function Catalog() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCollection, setSelectedCollection] = useState('Arte Digital');
  const [selectedNetwork, setSelectedNetwork] = useState('Ethereum');
  
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState(0.02);
  const [maxPrice, setMaxPrice] = useState(12.30);

  const mockNFTs = [
    { id: 1, name: "Emerald Ape #042", price: "1.19 ETH", imageUrl: nft042 },
    { id: 2, name: "Sage Nomad #009", price: "1.69 ETH", imageUrl: nft009 },
    { id: 3, name: "Neon Vessel #552", price: "1.99 ETH", imageUrl: nft552 },
    { id: 4, name: "Cosmic Bloom #118", price: "1.29 ETH", imageUrl: nft118 },
    { id: 5, name: "Violet Nomad #314", price: "1.39 ETH", imageUrl: nft314 },
    { id: 6, name: "Ivory Baron #088", price: "1.79 ETH", imageUrl: nft088 },
    { id: 7, name: "Golden Beat #207", price: "0.99 ETH", imageUrl: nft207 },
    { id: 8, name: "NFT Artwork #010", price: "1.75 ETH", imageUrl: nft10 },
    { id: 9, name: "Golden Signal #160", price: "0.39 ETH", imageUrl: nft160 },
  ];

  const collections = [
    { name: "Arte Digital", count: "33" },
    { name: "Fotografia", count: "12" },
    { name: "Música", count: "65" },
    { name: "Arte 3D", count: "39" },
    { name: "Colecionáveis", count: "23" },
    { name: "Generativa", count: "17" },
    { name: "Jogos", count: "19" },
    { name: "Assinaturas", count: "13" },
    { name: "Utilidade", count: "18" },
  ];

  const networks = [
    { name: "Ethereum", count: "119" },
    { name: "Polygon", count: "78" },
    { name: "Solana", count: "86" },
  ];

  // Dados atualizados com as imagens corretas para os 4 cards do Diário da Cunhagem
  const diaryPosts = [
    { 
      id: 1, 
      image: nft088, 
      date: "12 de setembro | Leitura de 6 min",
      title: "Como funciona a propriedade de NFTs", 
      description: "Aprenda a colecionar, negociar e verificar ativos digitais." 
    },
    { 
      id: 2, 
      image: nft042, 
      date: "13 de setembro | Leitura de 2 min",
      title: "10 artistas digitais para acompanhar", 
      description: "Conheça criadores que moldam a cultura digital." 
    },
    { 
      id: 3, 
      image: nft314, 
      date: "15 de setembro | Leitura de 3 min",
      title: "Raridade, atributos e procedência", 
      description: "Entenda raridade, procedência, direitos autorais e utilidade." 
    },
    { 
      id: 4, 
      image: nft160, 
      date: "15 de setembro | Leitura de 2 min",
      title: "Como proteger sua carteira", 
      description: "Proteja sua carteira, seus ativos e sua identidade." 
    },
  ];

  const handleApplyFilter = () => {
    console.log(`Filtrando NFTs entre ${minPrice.toFixed(2)} ETH e ${maxPrice.toFixed(2)} ETH`);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-12 flex flex-col gap-16">
      
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Lado Esquerdo: Barra Lateral + Card de NFT em Destaque */}
        <div className="flex flex-col gap-8 w-full lg:w-[310px] flex-shrink-0">
          
          {/* Barra Lateral de Filtros */}
          <aside className="w-full p-[20px] bg-[#241612] rounded-[24px] flex flex-col gap-8 border border-zinc-800/40">
            
            {/* Seção 1: Coleções */}
            <div className="flex flex-col gap-6">
              <h3 className="w-[87px] h-[16px] text-[18px] font-bold leading-[16px] text-[#F5F1EB]">
                Coleções
              </h3>

              <div className="flex flex-col gap-1">
                {collections.map((item) => {
                  const isSelected = selectedCollection === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setSelectedCollection(item.name)}
                      className={`w-[246px] h-[40px] flex items-center justify-between text-[15px] font-normal leading-[40px] px-2 rounded-lg transition-colors ${
                        isSelected 
                          ? 'text-[#E89B55] bg-zinc-900/40 font-semibold' 
                          : 'text-[#CFB28C] hover:text-[#F5F1EB]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span>({item.count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-full h-[1px] bg-zinc-800/60" />

            {/* Seção 2: Faixa de Preço */}
            <div className="flex flex-col gap-4">
              
              <h3 className="w-[152px] h-[16px] text-[18px] font-bold leading-[16px] text-[#F5F1EB]">
                Faixa de preço
              </h3>

              <div className="w-[258px] h-[36px] relative flex items-center">
                <div className="absolute w-full h-[4px] bg-[#140D0A] rounded-full" />

                <input 
                  type="range" 
                  min="0" 
                  max="25" 
                  step="0.1"
                  value={minPrice} 
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    if (val <= maxPrice) setMinPrice(val);
                  }}
                  className="absolute w-full appearance-none bg-transparent pointer-events-auto accent-[#D28A4C] cursor-pointer [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D28A4C] [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-[#140D0A]"
                />

                <input 
                  type="range" 
                  min="0" 
                  max="25" 
                  step="0.1"
                  value={maxPrice} 
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    if (val >= minPrice) setMaxPrice(val);
                  }}
                  className="absolute w-full appearance-none bg-transparent pointer-events-auto accent-[#D28A4C] cursor-pointer [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D28A4C] [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-[#140D0A]"
                />
              </div>

              <span className="w-[220px] h-[20px] text-[15px] font-normal leading-none text-[#F5F1EB]">
                Preço: {minPrice.toFixed(2).replace('.', ',')} - {maxPrice.toFixed(2).replace('.', ',')} ETH
              </span>

              <button 
                onClick={handleApplyFilter}
                className="w-[92px] h-[36px] px-[12px] py-[8px] bg-[#D28A4C] rounded-[6px] flex items-center justify-center hover:opacity-90 transition-opacity mt-1 cursor-pointer"
              >
                <span className="w-[68px] h-[20px] text-[16px] font-bold leading-[20px] text-[#140D0A] text-center">
                  Aplicar
                </span>
              </button>

            </div>

            <div className="w-full h-[1px] bg-zinc-800/60" />

            {/* Seção 3: Rede */}
            <div className="flex flex-col gap-4">
              
              <h3 className="w-[44px] h-[16px] text-[18px] font-bold leading-[16px] text-[#F5F1EB]">
                Rede
              </h3>

              <div className="flex flex-col gap-1">
                {networks.map((net) => {
                  const isSelected = selectedNetwork === net.name;
                  return (
                    <button
                      key={net.name}
                      onClick={() => setSelectedNetwork(net.name)}
                      className={`w-[246px] h-[40px] flex items-center justify-between text-[15px] font-normal leading-[40px] px-2 rounded-lg transition-colors ${
                        isSelected 
                          ? 'text-[#E89B55] bg-zinc-900/40 font-semibold' 
                          : 'text-[#CFB28C] hover:text-[#F5F1EB]'
                      }`}
                    >
                      <span>{net.name}</span>
                      <span>({net.count})</span>
                    </button>
                  );
                })}
              </div>

            </div>

          </aside>

          {/* Seção: NFT EM DESTAQUE */}
          <div 
            style={{
              background: 'linear-gradient(180deg, rgba(210, 138, 76, 0.1) 0%, rgba(210, 138, 76, 0.03) 100%)'
            }}
            className="w-[310px] h-[470px] pt-[24px] pb-[4px] px-[20px] rounded-[24px] flex flex-col items-center gap-[10px] border border-zinc-800/40"
          >
            <h3 className="w-[270px] h-[32px] text-[24px] font-bold leading-[32px] text-[#E89B55] text-center">
              NFT EM DESTAQUE
            </h3>

            <span className="w-[270px] h-[16px] text-[22px] font-bold leading-[16px] text-[#F5F1EB] text-center">
              OFERTA LIMITADA
            </span>

            <div className="w-[310px] h-[368px] rounded-[22px] overflow-hidden flex items-center justify-center mt-1">
              <img 
                src={nft042} 
                alt="NFT em Destaque" 
                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer" 
              />
            </div>
          </div>

        </div>

        {/* Lado Direito: Cabeçalho + Grid de Produtos + Paginação */}
        <div className="flex-1 flex flex-col gap-12 w-full">
          
          <div className="flex flex-row items-center justify-between w-full border-b border-zinc-800 pb-6">
            <div className="flex items-center gap-[20px]">
              <button onClick={() => setActiveTab('all')} className={`relative pb-2 text-[15px] font-medium leading-[16px] transition-colors ${activeTab === 'all' ? 'text-[#E89B55]' : 'text-[#F5F1EB] hover:text-[#E89B55]'}`}>
                Todos os NFTs
                {activeTab === 'all' && <span className="absolute bottom-[-24px] left-[10%] w-[80%] h-[2px] bg-[#D28A4C]"></span>}
              </button>
              <button onClick={() => setActiveTab('new')} className={`relative pb-2 text-[15px] font-medium leading-[16px] transition-colors ${activeTab === 'new' ? 'text-[#E89B55]' : 'text-[#F5F1EB] hover:text-[#E89B55]'}`}>
                Novos lançamentos
                {activeTab === 'new' && <span className="absolute bottom-[-24px] left-[10%] w-[80%] h-[2px] bg-[#D28A4C]"></span>}
              </button>
              <button onClick={() => setActiveTab('trending')} className={`relative pb-2 text-[15px] font-medium leading-[16px] transition-colors ${activeTab === 'trending' ? 'text-[#E89B55]' : 'text-[#F5F1EB] hover:text-[#E89B55]'}`}>
                Em alta
                {activeTab === 'trending' && <span className="absolute bottom-[-24px] left-[10%] w-[80%] h-[2px] bg-[#D28A4C]"></span>}
              </button>
            </div>

            <div className="flex items-center w-[300px]">
              <span className="w-[109px] text-[15px] font-normal leading-none text-[#F5F1EB]">
                Ordenar por:
              </span>
              <span className="w-[190px] text-[15px] font-normal leading-none text-[#F5F1EB]">
                Listados recentemente
              </span>
            </div>
          </div>

          {/* Grid de Produtos */}
          <div className="flex justify-center lg:justify-start">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[72px] max-w-[842px]">
              {mockNFTs.map((nft) => (
                <div 
                  key={nft.id} 
                  className="w-[258px] flex flex-col gap-[12px] cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="w-[258px] h-[300px] bg-[#241612] rounded-[15px] flex items-center justify-center border border-zinc-800/40">
                    <div className="w-[250px] h-[250px] rounded-[12px] overflow-hidden flex items-center justify-center">
                      <img 
                        src={nft.imageUrl} 
                        alt={nft.name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>

                  <h4 className="w-[258px] text-[16px] font-normal leading-[16px] text-[#F5F1EB]">
                    {nft.name}
                  </h4>

                  <span className="w-[258px] text-[18px] font-bold leading-[16px] text-[#E89B55]">
                    {nft.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Paginação Alinhada à Direita */}
          <div className="flex justify-center lg:justify-end max-w-[842px] w-full pt-4">
            <div className="w-[207px] h-[35px] flex items-center gap-[8px]">
              {[1, 2, 3, 4].map((page) => {
                const isSelected = currentPage === page;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-[35px] h-[35px] rounded-[4px] border border-[#3F2319] flex items-center justify-center transition-colors cursor-pointer ${
                      isSelected 
                        ? 'bg-[#D28A4C] border-[#D28A4C]' 
                        : 'bg-transparent hover:bg-[#D28A4C]/20 hover:border-[#D28A4C]'
                    }`}
                  >
                    <span className={`text-[18px] font-bold leading-[16px] ${
                      isSelected ? 'text-[#140D0A]' : 'text-[#F5F1EB]'
                    }`}>
                      {page}
                    </span>
                  </button>
                );
              })}

              <button 
                onClick={() => setCurrentPage((prev) => (prev < 4 ? prev + 1 : 4))}
                className="w-[35px] h-[35px] rounded-[4px] border border-[#3F2319] flex items-center justify-center hover:bg-[#D28A4C]/20 hover:border-[#D28A4C] transition-colors cursor-pointer bg-transparent"
              >
                <span className="text-[18px] font-bold leading-[16px] text-[#F5F1EB]">
                  &gt;
                </span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* 3. SEÇÃO DE DESTAQUE INFERIOR (Dois cards lado a lado) */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-6 pt-8">
        
        {/* Card 1 */}
        <div className="w-full lg:w-[586px] h-[250px] bg-[#241612] border border-[#D28A4C]/20 rounded-[20px] p-6 flex flex-row items-center justify-between overflow-hidden">
          <div className="w-[250px] h-[250px] flex-shrink-0 rounded-[16px] overflow-hidden">
            <img src={nft042} alt="Lançamento Gênesis" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-between h-full py-2 flex-1 pl-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] font-bold font-['Roboto_Mono'] text-[#F7F3EC] leading-[16px]">
                Lançamento gênesis de edição limitada
              </h4>
              <p className="text-[14px] font-normal font-['Roboto_Mono'] text-[#CFB28C] leading-[24px]">
                Colecione edições escassas diretamente dos criadores antes da revelação
              </p>
            </div>
            <button className="w-[125px] h-[35px] px-3 bg-[#D28A4C] rounded-[6px] flex items-center justify-center text-[16px] font-medium font-['Roboto_Mono'] text-[#140D0A] whitespace-nowrap hover:opacity-90 transition-opacity cursor-pointer">
              Explorar -&gt;
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-[586px] h-[250px] bg-[#241612] border border-[#D28A4C]/20 rounded-[20px] p-6 flex flex-row items-center justify-between overflow-hidden">
          <div className="w-[250px] h-[250px] flex-shrink-0 rounded-[16px] overflow-hidden">
            <img src={nft088} alt="Arte Digital Selecionada" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-between h-full py-2 flex-1 pl-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-[16px] font-bold font-['Roboto_Mono'] text-[#F7F3EC] leading-[16px]">
                Arte digital selecionada e muito mais
              </h4>
              <p className="text-[14px] font-normal font-['Roboto_Mono'] text-[#CFB28C] leading-[24px]">
                Explore novos artistas, coleções verificadas e obras digitais que definem.
              </p>
            </div>
            <button className="w-[125px] h-[35px] px-3 bg-[#D28A4C] rounded-[6px] flex items-center justify-center text-[16px] font-medium font-['Roboto_Mono'] text-[#140D0A] whitespace-nowrap hover:opacity-90 transition-opacity cursor-pointer">
              Explorar -&gt;
            </button>
          </div>
        </div>

      </div>

      {/* 4. SEÇÃO: DIÁRIO DA CUNHAGEM (Com as imagens corretas) */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-[40px] pt-12">
        
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="w-full text-[28px] font-bold font-['Roboto_Mono'] leading-[100%] text-[#F5F1EB]">
            Diário da Cunhagem
          </h2>
          <p className="w-full text-[14px] font-normal font-['Roboto_Mono'] leading-[100%] text-[#CFB28C]">
            Histórias, guias e insights para colecionadores sobre o universo da propriedade digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {diaryPosts.map((post) => (
            <div 
              key={post.id}
              className="w-[268px] h-[369px] bg-[#241612] rounded-[8px] overflow-hidden flex flex-col border border-zinc-800/40 hover:border-[#D28A4C]/40 transition-colors group cursor-pointer"
            >
              {/* Imagem (268 x 195) */}
              <div className="w-[268px] h-[195px] overflow-hidden flex-shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>

              {/* Texto (268 x 174) */}
              <div className="w-[268px] h-[174px] pt-[12px] px-[16px] pb-[16px] flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-medium font-['Roboto_Mono'] leading-[16px] text-[#CFB28C]">
                    {post.date}
                  </span>
                  <h4 className="text-[16px] font-bold font-['Roboto_Mono'] leading-[100%] text-[#F5F1EB] line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-[12px] font-medium font-['Roboto_Mono'] leading-[16px] text-[#CFB28C] line-clamp-2">
                    {post.description}
                  </p>
                </div>

                <span className="text-[12px] font-bold font-['Roboto_Mono'] leading-[14px] text-[#E89B55] hover:underline pt-1">
                  Ler mais -&gt;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}