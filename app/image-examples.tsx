import Image from "next/image"

export default function ImageExamples() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">Exemplos de Imagens</h1>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Banners</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Imagens para o carrossel principal da página inicial. Proporção 16:9, resolução 1920×1080px.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-video">
              <Image
                src="/images/banners/premium-treatments.jpg"
                alt="Tratamentos Premium"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium">premium-treatments.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-video">
              <Image
                src="/images/banners/personalized-skincare.jpg"
                alt="Skincare Personalizado"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium">personalized-skincare.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-video">
              <Image src="/images/banners/spa-day.jpg" alt="Spa Day" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">spa-day.jpg</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Produtos</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Imagens para a seção de produtos. Proporção 3:4, resolução 600×800px.
        </p>

        <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-6">
          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-[3/4]">
              <Image src="/images/products/serum-facial.jpg" alt="Sérum Facial" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">serum-facial.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-[3/4]">
              <Image src="/images/products/gold-mask.jpg" alt="Máscara de Ouro" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">gold-mask.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-[3/4]">
              <Image src="/images/products/night-cream.jpg" alt="Creme Noturno" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">night-cream.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-[3/4]">
              <Image src="/images/products/skincare-kit.jpg" alt="Kit Skincare" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">skincare-kit.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-[3/4]">
              <Image src="/images/products/sunscreen.jpg" alt="Protetor Solar" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">sunscreen.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-[3/4]">
              <Image src="/images/products/facial-oil.jpg" alt="Óleo Facial" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">facial-oil.jpg</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Serviços</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Imagens para a seção de serviços. Proporção 16:9, resolução 1280×720px.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-video">
              <Image
                src="/images/services/facial-treatments.jpg"
                alt="Tratamentos Faciais"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium">facial-treatments.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-video">
              <Image
                src="/images/services/personalized-skincare.jpg"
                alt="Skincare Personalizado"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium">personalized-skincare.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-video">
              <Image
                src="/images/services/professional-makeup.jpg"
                alt="Maquiagem Profissional"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium">professional-makeup.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-video">
              <Image
                src="/images/services/massage-therapy.jpg"
                alt="Massagem Terapêutica"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium">massage-therapy.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-video">
              <Image src="/images/services/spa-day.jpg" alt="Spa Day" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">spa-day.jpg</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Equipe</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Fotos dos especialistas. Proporção 1:1, resolução 800×800px.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-square">
              <Image src="/images/team/specialist-1.jpg" alt="Especialista 1" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">specialist-1.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-square">
              <Image src="/images/team/specialist-2.jpg" alt="Especialista 2" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">specialist-2.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-square">
              <Image src="/images/team/specialist-3.jpg" alt="Especialista 3" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">specialist-3.jpg</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-semibold">Galeria</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Fotos do salão e instalações. Proporção 4:3, resolução 1200×900px.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-[4/3]">
              <Image src="/images/gallery/salon-1.jpg" alt="Salão 1" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">salon-1.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-[4/3]">
              <Image src="/images/gallery/salon-2.jpg" alt="Salão 2" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">salon-2.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-[4/3]">
              <Image src="/images/gallery/salon-3.jpg" alt="Salão 3" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">salon-3.jpg</p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-[4/3]">
              <Image src="/images/gallery/salon-4.jpg" alt="Salão 4" fill className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-medium">salon-4.jpg</p>
          </div>
        </div>
      </div>
    </div>
  )
}

