import Link from "next/link"
import { ArrowLeft, Image, Settings, FileText } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center">
          <Link href="/" className="flex items-center text-gray-600 hover:text-pink-500">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Voltar para o site</span>
          </Link>
        </div>

        <h1 className="mb-8 text-3xl font-bold text-gray-800">Painel Administrativo</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/admin/imagens"
            className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-4 rounded-full bg-pink-100 p-4">
              <Image className="h-8 w-8 text-pink-500" />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-gray-800">Gerenciar Imagens</h2>
            <p className="text-sm text-gray-600">Instruções para atualizar e manter as imagens do site</p>
          </Link>

          <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 rounded-full bg-amber-100 p-4">
              <Settings className="h-8 w-8 text-amber-500" />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-gray-800">Configurações</h2>
            <p className="text-sm text-gray-600">Configurações gerais do site</p>
          </div>

          <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 rounded-full bg-purple-100 p-4">
              <FileText className="h-8 w-8 text-purple-500" />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-gray-800">Conteúdo</h2>
            <p className="text-sm text-gray-600">Gerenciar textos e conteúdos do site</p>
          </div>
        </div>
      </div>
    </div>
  )
}

