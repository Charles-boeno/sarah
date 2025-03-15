import Link from "next/link"
import Image from "next/image"
import { Folder, FileImage, ArrowLeft } from "lucide-react"

export default function ImagensAdmin() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center">
          <Link href="/" className="flex items-center text-gray-600 hover:text-pink-500">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Voltar para o site</span>
          </Link>
        </div>

        <h1 className="mb-8 text-3xl font-bold text-gray-800">Guia de Gerenciamento de Imagens</h1>

        <div className="mb-10 rounded-lg bg-gray-50 p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Estrutura de Pastas</h2>
          <p className="mb-6 text-gray-600">
            Todas as imagens do site estão organizadas na pasta{" "}
            <code className="rounded bg-gray-200 px-2 py-1 text-pink-600">public</code>. Abaixo está a estrutura
            completa para facilitar a manutenção:
          </p>

          <div className="font-mono text-sm">
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-amber-500" />
              <span className="font-bold">public/</span>
            </div>

            <div className="mt-2 ml-6">
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-amber-500" />
                <span>images/</span>
              </div>

              <div className="mt-2 ml-6">
                <div className="flex items-center gap-2">
                  <Folder className="h-5 w-5 text-amber-500" />
                  <span>banners/</span>
                </div>
                <div className="mt-1 ml-6 flex items-center gap-2">
                  <FileImage className="h-4 w-4 text-pink-500" />
                  <span>premium-treatments.jpg</span>
                </div>
                <div className="mt-1 ml-6 flex items-center gap-2">
                  <FileImage className="h-4 w-4 text-pink-500" />
                  <span>personalized-skincare.jpg</span>
                </div>
                <div className="mt-1 ml-6 flex items-center gap-2">
                  <FileImage className="h-4 w-4 text-pink-500" />
                  <span>spa-day.jpg</span>
                </div>
              </div>

              <div className="mt-2 ml-6">
                <div className="flex items-center gap-2">
                  <Folder className="h-5 w-5 text-amber-500" />
                  <span>products/</span>
                </div>
                <div className="mt-1 ml-6 flex items-center gap-2">
                  <FileImage className="h-4 w-4 text-pink-500" />
                  <span>serum-facial.jpg</span>
                </div>
                <div className="mt-1 ml-6 flex items-center gap-2">
                  <FileImage className="h-4 w-4 text-pink-500" />
                  <span>gold-mask.jpg</span>
                </div>
                <div className="mt-1 ml-6 flex items-center gap-2">
                  <FileImage className="h-4 w-4 text-pink-500" />
                  <span>night-cream.jpg</span>
                </div>
                <div className="mt-1 ml-6 flex items-center gap-2">
                  <FileImage className="h-4 w-4 text-pink-500" />
                  <span>skincare-kit.jpg</span>
                </div>
                <div className="mt-1 ml-6 flex items-center gap-2">
                  <FileImage className="h-4 w-4 text-pink-500" />
                  <span>sunscreen.jpg</span>
                </div>
                <div className="mt-1 ml-6 flex items-center gap-2">
                  <FileImage className="h-4 w-4 text-pink-500" />
                  <span>facial-oil.jpg</span>
                </div>
              </div>

              <div className="mt-2 ml-6">
                <div className="flex items-center gap-2">
                  <Folder className="h-5 w-5 text-amber-500" />
                  <span>logo/</span>
                </div>
                <div className="mt-1 ml-6 flex items-center gap-2">
                  <FileImage className="h-4 w-4 text-pink-500" />
                  <span>logo-main.svg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 rounded-lg bg-gray-50 p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Exemplos de Imagens</h2>

          <div className="mb-6">
            <h3 className="mb-4 text-lg font-medium text-gray-700">Banners</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Tratamentos Premium",
                  path: "/placeholder.svg?height=1080&width=1920&text=Tratamentos+Premium",
                },
                {
                  name: "Skincare Personalizado",
                  path: "/placeholder.svg?height=1080&width=1920&text=Skincare+Personalizado",
                },
                { name: "Spa Day", path: "/placeholder.svg?height=1080&width=1920&text=Spa+Day" },
              ].map((banner, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-gray-200">
                  <div className="relative aspect-video">
                    <Image src={banner.path || "/placeholder.svg"} alt={banner.name} fill className="object-cover" />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-800">{banner.name}</p>
                    <p className="mt-1 text-xs text-gray-500">1920×1080px</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-gray-700">Produtos</h3>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {[
                { name: "Sérum Facial", path: "/placeholder.svg?height=800&width=600&text=Sérum+Facial" },
                { name: "Máscara de Ouro", path: "/placeholder.svg?height=800&width=600&text=Máscara+de+Ouro" },
                { name: "Creme Anti-idade", path: "/placeholder.svg?height=800&width=600&text=Creme+Anti-idade" },
                { name: "Kit Skincare", path: "/placeholder.svg?height=800&width=600&text=Kit+Skincare" },
                { name: "Protetor Solar", path: "/placeholder.svg?height=800&width=600&text=Protetor+Solar" },
                { name: "Óleo Facial", path: "/placeholder.svg?height=800&width=600&text=Óleo+Facial" },
              ].map((product, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-gray-200">
                  <div className="relative aspect-[3/4]">
                    <Image src={product.path || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-2">
                    <p className="text-sm font-medium text-gray-800">{product.name}</p>
                    <p className="mt-1 text-xs text-gray-500">600×800px</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-10 rounded-lg bg-gray-50 p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Especificações de Imagens</h2>

          <div className="mb-6">
            <h3 className="mb-2 text-lg font-medium text-gray-700">Banners</h3>
            <ul className="ml-5 list-disc space-y-1 text-gray-600">
              <li>Dimensões: 1920×1080px (proporção 16:9)</li>
              <li>Formato: JPG ou WebP</li>
              <li>Tamanho máximo: 500KB</li>
              <li>
                Localização: <code className="rounded bg-gray-200 px-2 py-1 text-pink-600">public/images/banners/</code>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-lg font-medium text-gray-700">Produtos</h3>
            <ul className="ml-5 list-disc space-y-1 text-gray-600">
              <li>Dimensões: 600×800px (proporção 3:4)</li>
              <li>Formato: JPG ou WebP</li>
              <li>Tamanho máximo: 300KB</li>
              <li>
                Localização:{" "}
                <code className="rounded bg-gray-200 px-2 py-1 text-pink-600">public/images/products/</code>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium text-gray-700">Logo</h3>
            <ul className="ml-5 list-disc space-y-1 text-gray-600">
              <li>Formato: SVG (preferencial) ou PNG com transparência</li>
              <li>
                Localização: <code className="rounded bg-gray-200 px-2 py-1 text-pink-600">public/images/logo/</code>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10 rounded-lg bg-gray-50 p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Como Substituir Imagens</h2>

          <div className="space-y-4 text-gray-600">
            <p>Para substituir imagens no site, siga estas etapas:</p>

            <ol className="ml-5 list-decimal space-y-2">
              <li>Prepare a nova imagem seguindo as especificações acima</li>
              <li>
                Acesse a pasta correspondente dentro de{" "}
                <code className="rounded bg-gray-200 px-2 py-1 text-pink-600">public/images/</code>
              </li>
              <li>Substitua o arquivo existente pelo novo, mantendo o mesmo nome de arquivo</li>
              <li>Se precisar adicionar uma nova imagem, siga o mesmo padrão de nomenclatura</li>
              <li>
                Para banners, use nomes descritivos como{" "}
                <code className="rounded bg-gray-200 px-2 py-1 text-pink-600">nome-do-banner.jpg</code>
              </li>
              <li>
                Para produtos, use nomes descritivos como{" "}
                <code className="rounded bg-gray-200 px-2 py-1 text-pink-600">nome-do-produto.jpg</code>
              </li>
            </ol>

            <div className="mt-4 rounded-md bg-amber-50 p-4 text-amber-800">
              <p className="font-medium">Importante:</p>
              <ul className="ml-5 mt-2 list-disc">
                <li>Mantenha os mesmos nomes de arquivos para que o site continue funcionando corretamente</li>
                <li>Otimize as imagens antes de fazer upload para manter o site rápido</li>
                <li>Faça backup das imagens originais antes de substituí-las</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Adicionando Novos Produtos</h2>

          <div className="space-y-4 text-gray-600">
            <p>Para adicionar novos produtos ao carrossel, siga estas etapas:</p>

            <ol className="ml-5 list-decimal space-y-2">
              <li>
                Adicione a imagem do produto na pasta{" "}
                <code className="rounded bg-gray-200 px-2 py-1 text-pink-600">public/images/products/</code>
              </li>
              <li>
                Abra o arquivo{" "}
                <code className="rounded bg-gray-200 px-2 py-1 text-pink-600">components/product-carousel.tsx</code>
              </li>
              <li>
                Localize o array <code className="rounded bg-gray-200 px-2 py-1 text-pink-600">products</code>
              </li>
              <li>Adicione um novo objeto seguindo o formato existente:</li>
            </ol>

            <pre className="mt-2 overflow-x-auto rounded-md bg-gray-800 p-4 text-sm text-white">
              {`{
  id: 13, // Use o próximo número disponível
  name: 'Nome do Novo Produto',
  price: 'R$ 99,90',
  image: '/images/products/nome-do-produto.jpg',
}`}
            </pre>

            <div className="mt-4 rounded-md bg-pink-50 p-4 text-pink-800">
              <p className="font-medium">Dica:</p>
              <ul className="ml-5 mt-2 list-disc">
                <li>Mantenha a consistência visual usando imagens com o mesmo estilo e proporções</li>
                <li>Use nomes de arquivos descritivos e em minúsculas, separados por hífen</li>
                <li>Certifique-se de que cada produto tenha um ID único</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

