export default function MediaStructure() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">Estrutura de Mídia do Projeto</h1>

      <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold">Estrutura de Pastas</h2>

        <div className="font-mono text-sm">
          <p className="mb-2">public/</p>
          <p className="mb-2 ml-4">├── images/</p>
          <p className="mb-2 ml-8">├── logo/</p>
          <p className="mb-2 ml-12">└── logo-main.svg</p>
          <p className="mb-2 ml-12">└── logo-icon.svg</p>
          <p className="mb-2 ml-8">├── banners/</p>
          <p className="mb-2 ml-12">└── premium-treatments.jpg</p>
          <p className="mb-2 ml-12">└── personalized-skincare.jpg</p>
          <p className="mb-2 ml-12">└── spa-day.jpg</p>
          <p className="mb-2 ml-8">├── services/</p>
          <p className="mb-2 ml-12">└── facial-treatments.jpg</p>
          <p className="mb-2 ml-12">└── personalized-skincare.jpg</p>
          <p className="mb-2 ml-12">└── professional-makeup.jpg</p>
          <p className="mb-2 ml-8">├── products/</p>
          <p className="mb-2 ml-12">└── serum-facial.jpg</p>
          <p className="mb-2 ml-12">└── gold-mask.jpg</p>
          <p className="mb-2 ml-12">└── night-cream.jpg</p>
          <p className="mb-2 ml-12">└── skincare-kit.jpg</p>
          <p className="mb-2 ml-12">└── sunscreen.jpg</p>
          <p className="mb-2 ml-12">└── facial-oil.jpg</p>
          <p className="mb-2 ml-8">└── backgrounds/</p>
          <p className="mb-2 ml-12">└── pattern-light.svg</p>
          <p className="mb-2 ml-12">└── pattern-dark.svg</p>
          <p className="mb-2 ml-4">└── videos/</p>
          <p className="mb-2 ml-8">├── treatments-preview.mp4</p>
          <p className="mb-2 ml-8">├── skincare-preview.mp4</p>
          <p className="mb-2 ml-8">├── spa-preview.mp4</p>
          <p className="mb-2 ml-8">└── products/</p>
          <p className="mb-2 ml-12">└── serum-demo.mp4</p>
          <p className="mb-2 ml-12">└── mask-application.mp4</p>
          <p className="mb-2 ml-12">└── cream-application.mp4</p>
          <p className="mb-2 ml-12">└── kit-overview.mp4</p>
          <p className="mb-2 ml-12">└── sunscreen-application.mp4</p>
          <p className="mb-2 ml-12">└── oil-application.mp4</p>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold">Recomendações para Mídia</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Imagens</h3>
            <ul className="ml-5 list-disc text-sm">
              <li>Use imagens de alta qualidade (mínimo 1200px de largura)</li>
              <li>Banners principais: proporção 16:9 (1920x1080px recomendado)</li>
              <li>Imagens de produtos: proporção 3:4 (600x800px recomendado)</li>
              <li>Imagens de serviços: proporção 16:9 (1280x720px recomendado)</li>
              <li>
                Formatos recomendados: JPG para fotografias, PNG para imagens com transparência, SVG para ícones e logos
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium">Vídeos</h3>
            <ul className="ml-5 list-disc text-sm">
              <li>Vídeos de banner: 15-30 segundos, HD (1920x1080px)</li>
              <li>Vídeos de produtos: 30-60 segundos, HD (1280x720px)</li>
              <li>Formato recomendado: MP4 com codificação H.264</li>
              <li>Tamanho máximo: 10MB para vídeos de produtos, 20MB para vídeos de banner</li>
              <li>Inclua versões de baixa resolução para dispositivos móveis</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium">Otimização</h3>
            <ul className="ml-5 list-disc text-sm">
              <li>Comprima todas as imagens antes de fazer upload (use ferramentas como TinyPNG)</li>
              <li>Otimize vídeos para web (use ferramentas como Handbrake)</li>
              <li>Considere usar formatos modernos como WebP para imagens e WebM para vídeos</li>
              <li>Forneça texto alternativo (alt) para todas as imagens</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

