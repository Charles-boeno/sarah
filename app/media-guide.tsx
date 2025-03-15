import { Folder, FileImage, FileVideo } from "lucide-react"

export default function MediaGuide() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">Guia de Organização de Mídia</h1>

      <div className="mb-12 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
        <h2 className="mb-6 text-2xl font-semibold">Estrutura de Pastas</h2>

        <div className="space-y-4">
          <FolderItem name="public" isRoot>
            <FolderItem name="images">
              <FolderItem name="logo">
                <FileItem name="logo-main.svg" type="image" />
                <FileItem name="logo-icon.svg" type="image" />
              </FolderItem>

              <FolderItem name="banners">
                <FileItem name="premium-treatments.jpg" type="image" />
                <FileItem name="personalized-skincare.jpg" type="image" />
                <FileItem name="spa-day.jpg" type="image" />
              </FolderItem>

              <FolderItem name="services">
                <FileItem name="facial-treatments.jpg" type="image" />
                <FileItem name="personalized-skincare.jpg" type="image" />
                <FileItem name="professional-makeup.jpg" type="image" />
                <FileItem name="massage-therapy.jpg" type="image" />
                <FileItem name="spa-day.jpg" type="image" />
              </FolderItem>

              <FolderItem name="products">
                <FileItem name="serum-facial.jpg" type="image" />
                <FileItem name="gold-mask.jpg" type="image" />
                <FileItem name="night-cream.jpg" type="image" />
                <FileItem name="skincare-kit.jpg" type="image" />
                <FileItem name="sunscreen.jpg" type="image" />
                <FileItem name="facial-oil.jpg" type="image" />
              </FolderItem>

              <FolderItem name="backgrounds">
                <FileItem name="pattern-light.svg" type="image" />
                <FileItem name="pattern-dark.svg" type="image" />
              </FolderItem>

              <FolderItem name="team">
                <FileItem name="specialist-1.jpg" type="image" />
                <FileItem name="specialist-2.jpg" type="image" />
                <FileItem name="specialist-3.jpg" type="image" />
              </FolderItem>

              <FolderItem name="gallery">
                <FileItem name="salon-1.jpg" type="image" />
                <FileItem name="salon-2.jpg" type="image" />
                <FileItem name="salon-3.jpg" type="image" />
                <FileItem name="salon-4.jpg" type="image" />
              </FolderItem>
            </FolderItem>

            <FolderItem name="videos">
              <FileItem name="treatments-preview.mp4" type="video" />
              <FileItem name="skincare-preview.mp4" type="video" />
              <FileItem name="spa-preview.mp4" type="video" />

              <FolderItem name="products">
                <FileItem name="serum-demo.mp4" type="video" />
                <FileItem name="mask-application.mp4" type="video" />
                <FileItem name="cream-application.mp4" type="video" />
                <FileItem name="kit-overview.mp4" type="video" />
                <FileItem name="sunscreen-application.mp4" type="video" />
                <FileItem name="oil-application.mp4" type="video" />
              </FolderItem>

              <FolderItem name="tutorials">
                <FileItem name="skincare-routine.mp4" type="video" />
                <FileItem name="makeup-tutorial.mp4" type="video" />
                <FileItem name="self-massage.mp4" type="video" />
              </FolderItem>
            </FolderItem>
          </FolderItem>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Exemplos de Imagens</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <ImageExample
              title="Banner Principal"
              path="/images/banners/premium-treatments.jpg"
              dimensions="1920×1080px"
              format="JPG"
            />

            <ImageExample
              title="Imagem de Produto"
              path="/images/products/serum-facial.jpg"
              dimensions="600×800px"
              format="JPG"
            />

            <ImageExample
              title="Imagem de Serviço"
              path="/images/services/facial-treatments.jpg"
              dimensions="1280×720px"
              format="JPG"
            />

            <ImageExample title="Logo" path="/images/logo/logo-main.svg" dimensions="Vetorial" format="SVG" />
          </div>
        </div>

        <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Exemplos de Vídeos</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <VideoExample
              title="Banner Vídeo"
              path="/videos/treatments-preview.mp4"
              duration="15-30 segundos"
              resolution="1920×1080px"
            />

            <VideoExample
              title="Demo de Produto"
              path="/videos/products/serum-demo.mp4"
              duration="30-60 segundos"
              resolution="1280×720px"
            />

            <VideoExample
              title="Tutorial"
              path="/videos/tutorials/skincare-routine.mp4"
              duration="2-5 minutos"
              resolution="1280×720px"
            />

            <VideoExample
              title="Vídeo Institucional"
              path="/videos/about-us.mp4"
              duration="1-2 minutos"
              resolution="1920×1080px"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold">Instruções para Imagens</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Banners</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Imagens de destaque para o carrossel principal. Use fotos de alta qualidade que mostrem tratamentos
              estéticos, resultados ou ambientes de spa. Proporção 16:9, resolução mínima de 1920×1080px.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Produtos</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Fotos de produtos em fundo neutro ou em uso. Mantenha um estilo consistente para todos os produtos.
              Proporção 3:4, resolução mínima de 600×800px.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Serviços</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Imagens que ilustram os serviços oferecidos. Mostre o ambiente, profissionais realizando tratamentos ou
              resultados. Proporção 16:9, resolução mínima de 1280×720px.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Equipe</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Fotos profissionais dos especialistas. Use um fundo consistente e iluminação profissional. Proporção 1:1
              (quadrada), resolução mínima de 800×800px.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Galeria</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Fotos do salão, ambiente e instalações. Mostre os espaços bem iluminados e organizados. Proporção 4:3 ou
              16:9, resolução mínima de 1200×900px.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FolderItem({ name, children, isRoot = false }) {
  return (
    <div className={`${isRoot ? "" : "ml-6"} space-y-2`}>
      <div className="flex items-center gap-2 font-mono text-sm">
        <Folder className="h-4 w-4 text-amber-500" />
        <span className={isRoot ? "font-bold" : ""}>{name}/</span>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function FileItem({ name, type }) {
  const Icon = type === "image" ? FileImage : FileVideo
  const color = type === "image" ? "text-pink-500" : "text-purple-500"

  return (
    <div className="ml-6 flex items-center gap-2 font-mono text-sm">
      <Icon className={`h-4 w-4 ${color}`} />
      <span>{name}</span>
    </div>
  )
}

function ImageExample({ title, path, dimensions, format }) {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="aspect-video bg-gray-200 dark:bg-gray-700">
        <div className="flex h-full items-center justify-center">
          <FileImage className="h-8 w-8 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{path}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">{dimensions}</span>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{format}</span>
        </div>
      </div>
    </div>
  )
}

function VideoExample({ title, path, duration, resolution }) {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="aspect-video bg-gray-200 dark:bg-gray-700">
        <div className="flex h-full items-center justify-center">
          <FileVideo className="h-8 w-8 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{path}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">{duration}</span>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{resolution}</span>
        </div>
      </div>
    </div>
  )
}

