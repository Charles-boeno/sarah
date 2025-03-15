import { Folder, FileImage, FileVideo } from "lucide-react"

export default function FolderStructure() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">Estrutura de Pastas para Mídia</h1>

      <div className="mb-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold">Estrutura Completa</h2>

        <div className="font-mono text-sm">
          <div className="flex items-center gap-2">
            <Folder className="h-5 w-5 text-amber-500" />
            <span className="font-bold">public/</span>
          </div>

          <div className="mt-4 ml-6">
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-amber-500" />
              <span>images/</span>
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
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileImage className="h-4 w-4 text-pink-500" />
                <span>logo-icon.svg</span>
              </div>
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
                <span>services/</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileImage className="h-4 w-4 text-pink-500" />
                <span>facial-treatments.jpg</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileImage className="h-4 w-4 text-pink-500" />
                <span>personalized-skincare.jpg</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileImage className="h-4 w-4 text-pink-500" />
                <span>professional-makeup.jpg</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileImage className="h-4 w-4 text-pink-500" />
                <span>massage-therapy.jpg</span>
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
                <span>team/</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileImage className="h-4 w-4 text-pink-500" />
                <span>specialist-1.jpg</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileImage className="h-4 w-4 text-pink-500" />
                <span>specialist-2.jpg</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileImage className="h-4 w-4 text-pink-500" />
                <span>specialist-3.jpg</span>
              </div>
            </div>

            <div className="mt-2 ml-6">
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-amber-500" />
                <span>gallery/</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileImage className="h-4 w-4 text-pink-500" />
                <span>salon-1.jpg</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileImage className="h-4 w-4 text-pink-500" />
                <span>salon-2.jpg</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileImage className="h-4 w-4 text-pink-500" />
                <span>salon-3.jpg</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileImage className="h-4 w-4 text-pink-500" />
                <span>salon-4.jpg</span>
              </div>
            </div>
          </div>

          <div className="mt-4 ml-6">
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-amber-500" />
              <span>videos/</span>
            </div>

            <div className="mt-1 ml-6 flex items-center gap-2">
              <FileVideo className="h-4 w-4 text-purple-500" />
              <span>treatments-preview.mp4</span>
            </div>
            <div className="mt-1 ml-6 flex items-center gap-2">
              <FileVideo className="h-4 w-4 text-purple-500" />
              <span>skincare-preview.mp4</span>
            </div>
            <div className="mt-1 ml-6 flex items-center gap-2">
              <FileVideo className="h-4 w-4 text-purple-500" />
              <span>spa-preview.mp4</span>
            </div>

            <div className="mt-2 ml-6">
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-amber-500" />
                <span>products/</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileVideo className="h-4 w-4 text-purple-500" />
                <span>serum-demo.mp4</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileVideo className="h-4 w-4 text-purple-500" />
                <span>mask-application.mp4</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileVideo className="h-4 w-4 text-purple-500" />
                <span>cream-application.mp4</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileVideo className="h-4 w-4 text-purple-500" />
                <span>kit-overview.mp4</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileVideo className="h-4 w-4 text-purple-500" />
                <span>sunscreen-application.mp4</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileVideo className="h-4 w-4 text-purple-500" />
                <span>oil-application.mp4</span>
              </div>
            </div>

            <div className="mt-2 ml-6">
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-amber-500" />
                <span>tutorials/</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileVideo className="h-4 w-4 text-purple-500" />
                <span>skincare-routine.mp4</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileVideo className="h-4 w-4 text-purple-500" />
                <span>makeup-tutorial.mp4</span>
              </div>
              <div className="mt-1 ml-6 flex items-center gap-2">
                <FileVideo className="h-4 w-4 text-purple-500" />
                <span>self-massage.mp4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-semibold">Instruções para Organização</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium">1. Criação das Pastas</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Crie todas as pastas conforme a estrutura acima dentro da pasta <code>public</code> do seu projeto
              Next.js. Esta organização facilitará a manutenção e localização dos arquivos de mídia.
            </p>
          </div>

          <div>
            <h3 className="font-medium">2. Nomeação de Arquivos</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Use nomes descritivos em minúsculas, separados por hífen. Evite espaços, caracteres especiais ou acentos.
              Mantenha consistência na nomenclatura para facilitar a organização.
            </p>
          </div>

          <div>
            <h3 className="font-medium">3. Formatos e Dimensões</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Siga as recomendações de formato e dimensões para cada tipo de mídia:
            </p>
            <ul className="mt-2 ml-6 list-disc space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>Banners: JPG, 1920×1080px (16:9)</li>
              <li>Produtos: JPG, 600×800px (3:4)</li>
              <li>Serviços: JPG, 1280×720px (16:9)</li>
              <li>Equipe: JPG, 800×800px (1:1)</li>
              <li>Galeria: JPG, 1200×900px (4:3)</li>
              <li>Logo: SVG (vetorial)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium">4. Otimização</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Otimize todas as imagens e vídeos antes de incluí-los no projeto para melhorar o desempenho do site:
            </p>
            <ul className="mt-2 ml-6 list-disc space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>Comprima imagens JPG/PNG usando ferramentas como TinyPNG</li>
              <li>Otimize SVGs removendo metadados desnecessários</li>
              <li>Comprima vídeos para web usando ferramentas como Handbrake</li>
              <li>Considere versões de menor resolução para dispositivos móveis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

