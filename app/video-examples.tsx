export default function VideoExamples() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">Exemplos de Vídeos</h1>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Vídeos de Banner</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Vídeos curtos para o carrossel principal. Duração: 15-30 segundos, resolução 1920×1080px.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <video className="aspect-video w-full" controls poster="/images/banners/premium-treatments.jpg">
              <source src="/videos/treatments-preview.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <p className="mt-2 text-sm font-medium">treatments-preview.mp4</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <video className="aspect-video w-full" controls poster="/images/banners/personalized-skincare.jpg">
              <source src="/videos/skincare-preview.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <p className="mt-2 text-sm font-medium">skincare-preview.mp4</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <video className="aspect-video w-full" controls poster="/images/banners/spa-day.jpg">
              <source src="/videos/spa-preview.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <p className="mt-2 text-sm font-medium">spa-preview.mp4</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Vídeos de Produtos</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Demonstrações de produtos. Duração: 30-60 segundos, resolução 1280×720px.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <video className="aspect-video w-full" controls poster="/images/products/serum-facial.jpg">
              <source src="/videos/products/serum-demo.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <p className="mt-2 text-sm font-medium">serum-demo.mp4</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <video className="aspect-video w-full" controls poster="/images/products/gold-mask.jpg">
              <source src="/videos/products/mask-application.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <p className="mt-2 text-sm font-medium">mask-application.mp4</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <video className="aspect-video w-full" controls poster="/images/products/night-cream.jpg">
              <source src="/videos/products/cream-application.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <p className="mt-2 text-sm font-medium">cream-application.mp4</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold">Tutoriais</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Vídeos educativos mais longos. Duração: 2-5 minutos, resolução 1280×720px.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <video className="aspect-video w-full" controls>
              <source src="/videos/tutorials/skincare-routine.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <p className="mt-2 text-sm font-medium">skincare-routine.mp4</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <video className="aspect-video w-full" controls>
              <source src="/videos/tutorials/makeup-tutorial.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <p className="mt-2 text-sm font-medium">makeup-tutorial.mp4</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <video className="aspect-video w-full" controls>
              <source src="/videos/tutorials/self-massage.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <p className="mt-2 text-sm font-medium">self-massage.mp4</p>
          </div>
        </div>
      </div>
    </div>
  )
}

